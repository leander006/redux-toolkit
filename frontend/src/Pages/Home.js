import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Component/Navbar'

function Home() {
  const name = useSelector(state=>state.user.userInfo.name)
  const email = useSelector(state=>state.user.userInfo.email)
  return (
    <>
    <Navbar/>
    <div className='container'>
    <h1 className='my-4 py-4 text-info'>Welcome {name}</h1>
    <h3 className='text-success'>Your email id is {email}</h3>
    </div>
    </>
  )
}

export default Home