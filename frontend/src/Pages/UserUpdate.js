import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Component/Navbar';
import { deleteUser, updateUser } from '../redux/apiCalls';
// import { remove, update } from '../redux/userSlice';

function Userupdate() {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
    const {userInfo,pending,error} = useSelector(state =>state.user);
    const dispatch = useDispatch();

    // const handleUpdate= (e)=>{
    //   e.preventDefault();

    //   dispatch(update({name,email}));
    //   setEmail("");
    //   setName("");

    // }


    const handleDelete= (e)=>{
      e.preventDefault();
      // dispatch(remove());
    deleteUser(dispatch)
      // })
  
    }

    const handleUpdate =(e)=>{
        e.preventDefault();
        updateUser({ name, email },dispatch);
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
<button disabled={updateUser?pending:""} className="btn btn-primary" onClick={handleUpdate}>Submit</button>
{error ? <div className='text-danger'>Something went wrong</div>:""}
{pending === false && <div className='text-success'>Successfully updated user info</div>}
</form>

<button className='btn btn-primary my-3 mx-3' onClick={handleDelete}> Delete</button>
  </div>

  </>
  )
}

export default Userupdate