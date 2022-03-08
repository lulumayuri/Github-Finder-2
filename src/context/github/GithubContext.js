import {  createContext ,useState ,useReducer} from "react";
import githubReducer from "./GithubReducier";

const GithubContext = createContext()

export	const GithubProvider = ({children})=>{
    const intialState =(
        {
            users:[],
            loading:false
        }
    )
    const [state,dispatch]=useReducer(githubReducer,intialState)
    // const fetchUser = async ()=>{
    //     setLoading()
    //     const response = await fetch(`https://api.github.com/users`)
    //     const data =await response.json()
    //    dispatch({
    //        type:'GET_USERS',
    //        payload : data,
    //    })

        

    // }
    const clear = ()=>{
        dispatch(
            {
                type:'CLEAR',
                payload:[]
            }
        )
    }
    const searchUser = async (text)=>{
        setLoading()
        const param = new URLSearchParams({
            q:text,
        })
        const response = await fetch(`https://api.github.com/search/users?${param}`)
        const {items} = await response.json()
        dispatch({
                   type:'GET_USERS',
                   payload : items,
               })
    }
    const setLoading =()=>{
        dispatch({
            type:'SET_LOADING'
        })
    }
    return <GithubContext.Provider value={{
        users:state.users,
        loading:state.loading,
        searchUser,
        clear
       
    }}>
        {children}
    </GithubContext.Provider>
    
}
export default GithubContext