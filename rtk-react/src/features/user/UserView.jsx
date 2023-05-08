import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

export const UserView = () => {
    const user = useSelector((state)=>state.user)
    console.log(user)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])


  return (
    <div>
    <h2>List of Users</h2>
    {user.loading && <div> Loaidng... </div>}
    {!user.loading && user.error ? <div> Error: {user.error} </div> : null}
    {!user.loading && user.users.length ? (
        <ul> 
        {user.users.map((user) =>{
           return  <li key={user.id}>{user.name}</li>
        })}
        </ul>
        ): null}

    </div>
  )
}
