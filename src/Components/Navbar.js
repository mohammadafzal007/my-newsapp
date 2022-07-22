import {Link } from 'react-router-dom';
import "../App.css";

// import React,{Component} from 'react';


  const Navbar=()=>{
    <></>
    return (
          <nav className="navbar fixed-top navbar-expand-lg bg-dark " style={{height:"80px"}}>
        <div className="container-fluid">
          
          <a className="navbar-brand text-light" href="/">
            NewsWala App
          </a>
          <button
            className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
         >
            <span className="navbar-toggler-icon "></span>
          </button>
          
          <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-4">
        
            <li className="nav-item"> <Link className="nav-link text-light " aria-current="page" to="/general">Home  </Link>
              </li>
              <li className="nav-item"> <Link className="nav-link text-light " to="/general">General   </Link>
              </li>
              <li className="nav-item border-danger"> <Link className="nav-link text-light " to="/business ">Business   </Link>
              </li>
              <li className="nav-item"> <Link className="nav-link text-light " to="/entertainment">Entertainment   </Link>
              </li>
              <li className="nav-item"> <Link className="nav-link text-light " to="/health ">Health   </Link>
              </li>
              <li className="nav-item"> <Link className="nav-link text-light " to="/science">Science   </Link>
              </li>
              <li className="nav-item"> <Link className="nav-link text-light " to="/sports">Sports   </Link>
              </li>
              <li className="nav-item"> <Link className="nav-link text-light  " to="/technology">Technology   </Link>
              </li> 



            </ul>
          </div>
        </div>
        
 

      </nav>
      

      
    );
   

  }

export default Navbar;
