import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaLocationArrow, FaAddressBook} from "react-icons/fa"
import { BsPersonFill, BsEnvelopeAtFill} from "react-icons/bs"

const UserList = () => {

    const [listOfUSer, setListOfUSer ] = useState()

     useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
              console.log(response)
                const data = response.data
                console.log(data)
                setListOfUSer(data)
            })
            .catch(err =>{
                console.log(err)
            })
     }, [])
  return (
    <div className='user-card'>
      {
        listOfUSer && listOfUSer.map( user => (
          <div className='card' key={user.id}>
            <img src="./logo192.png" alt="card-image" className='card-img'/> 
            <h2><span><BsPersonFill/></span>{user.name}</h2>
            <p><span><FaAddressBook/></span>{user.phone}</p>
            <p><span><BsEnvelopeAtFill/></span>{user.email}</p>
            <p><span><FaLocationArrow/></span>{user.address.street}, {user.address.city}</p>
          </div>
        ))
      }
    </div>
  )
}

export default UserList
