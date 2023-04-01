import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'

const LeftSidebar = () => {
    
    return (
      <div  className="left-sidebar" >
        <nav className="side-nav">
          {/* <button onClick={() => handleSlideIn()} className="nav-btn"> */}
            <NavLink to="/" className="side-nav-links" activeclassname="active">
              <p>Home</p>
            </NavLink>
          {/* </button> */}
          <div className="side-nav-div">
            <div>
              <p>PUBLIC</p>
            </div>
            {/* <button onClick={() => handleSlideIn()} className="nav-btn"> */}
              <NavLink
                to="/Questions"
                className="side-nav-links"
                activeclassname="active"
              >
                <img src='data:image/png;base64,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' 
                alt="Globe" width='20px'/>
                <p style={{ paddingLeft: "10px" }}> Questions </p>
              </NavLink>
            {/* </button> */}
            {/* <button onClick={() => handleSlideIn()} className="nav-btn"> */}
              <NavLink
                to="/Tags"
                className="side-nav-links"
                activeclassname="active"
                style={{ paddingLeft: "40px" }}
              >
                <p>Tags</p>
              </NavLink>
            {/* </button> */}
            {/* <button onClick={() => handleSlideIn()} className="nav-btn"> */}
              <NavLink
                to="/Users"
                className="side-nav-links"
                activeclassname="active"
                style={{ paddingLeft: "40px" }}
              >
                <p>Users</p>
              </NavLink>
            {/* </button> */}
          </div>
        </nav>
      </div>
    );
  };
  
  export default LeftSidebar;
  