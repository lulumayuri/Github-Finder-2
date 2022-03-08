import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UserItem({user}) {
  return (
   <div className="card shadow-md compact side bg-slate-700 text-white">
        <div className="flex-row item-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className='rounded-full shadow w-14 h-14'>
                               <img src={user.avatar_url} alt="Profile-pic" /> 
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='card-title'>{user.login}</h2>
                    <Link className='text-white text-opacity-40'
                    to={`/user/${user.login}`}
                     >
            Visit Profile
                    </Link>
                </div>
        </div>
    </div>
  )
}


export default UserItem