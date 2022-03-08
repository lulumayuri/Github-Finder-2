import React, { useState ,useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/alertContext'
function UserSearch() {
    const {users,searchUser,clear}= useContext(GithubContext)
    const {setAlret}=useContext(AlertContext)
    const [text,setText] = useState('')
    const changeHandler = (e)=>{
        setText(e.target.value)
    }
    const clearHandler = (e)=>{
       
    }
    const submitHandler =(e)=>{
        e.preventDefault()
        if(text===''){
            setAlret('Please entre something','error')
        }else{
            searchUser(text)
            setText('')
        }
    }
  return (
    <div className='grid  grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-control'>
                    <div className="relative">
                        <input type="text" onChange={changeHandler} value={text} className="w-full pr-36 bg-gray-200 input input-lg text-black" placeholder='Search' />
                        <button type='submit'className='absolute top-0 right-0 rounded-l-none w-36 h-full btn btn-lg bg-black '>Go</button>
                    </div>

                </div>
            </form>
        </div>
        <div>
            {users.length>0 && (
                 <button onClick={clear} className="btn btn-ghost btn-lg text-white">
                          Clear
                 </button>
            )
            }
           
        </div>
    </div>
  )
}

export default UserSearch