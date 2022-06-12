import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Component/Navbar';
import { updateUser } from '../redux/apiCalls';
import { updateUser2 } from '../redux/userSlice';
// import { remove, update } from '../redux/userSlice';

function Userupdate() {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
    const {userInfo,pending,error} = useSelector(state =>state.user);
    const dispatch = useDispatch();

    // without api call

    // const handleUpdate= (e)=>{
    //   e.preventDefault();

    //   dispatch(update({name,email}));
    //   setEmail("");
    //   setName("");

    // }
// with API 
    const handleUpdate =(e)=>{
        e.preventDefault();
// without thunk
        updateUser({ name, email },dispatch);
// with thunk
        dispatch(updateUser2({name,email}))
        setEmail("");
        setName("");

    }






      return (
      <>
      <Navbar/>
  <div className='container'>
        <form className='container'>
        <div className="mb-3">
  <label htmlFor="exampleInputUser" className="form-label"  >Name</label>
  <input type="text" className="form-control" value={name} placeholder={userInfo.name} onChange={e=>setName(e.target.value)} id="exampleInputUser" aria-describedby="userHelp"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" value={email} placeholder={userInfo.email} onChange={e=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<button disabled={pending} className="btn btn-primary" onClick={handleUpdate}>Submit</button>
{error ? <div className='text-danger'>Something went wrong</div>:""}
{pending === false && <div className='text-success'>Successfully updated user info</div>}
</form>

  </div>

  </>
  )
}

export default Userupdate