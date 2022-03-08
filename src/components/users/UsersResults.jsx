import React from 'react'
import {useEffect,useState} from 'react'
import Spinner from '../shared/Spinner'
import UserItem from './UserItem'
function UsersResults() {
    const [users, setUsers]=useState([])
    const [loading , setLoading] =useState(true)
    useEffect(()=>{
        fetchUser()
    }, [])
    const fetchUser = async ()=>{
        const response = await fetch(`https://api.github.com/users`,{
            headers:{
                Authorization : `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
        })
        const data =await response.json()
        setUsers(data)
        setLoading(false)
        

    }
 if(!loading){
     return( <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2'>
                    {users.map((user) =>(<UserItem key={user.id} user={user} />))}
            </div>)
 }else{
     return <Spinner/>
 }
}

export default UsersResults