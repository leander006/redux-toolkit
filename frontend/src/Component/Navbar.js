import React from 'react'
import { useSelector } from 'react-redux';
import { Link} from "react-router-dom";
function Navbar() {
  const user = useSelector(state =>state.user.userInfo);
  return (
    <div>
          <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/update">update</Link>
        </li>
        <li className="nav-item d-flex justify-content-end' ">
          <a className="nav-link" >{user.name}</a>
        </li> 
        <li className="nav-item d-flex">
          <a className="nav-link" >{user.email}</a>
        </li> 
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar