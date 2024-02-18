import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">useEffect</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/blank">EffectDependencyBlank</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/cleanup">cleanupUseEffect</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/dep">dependency</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar