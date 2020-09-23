import React, {Component}from 'react';
class Navbar extends Component {

    render() { 
        return ( <div className=' navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className="navbar-brand" href="#">
                Dog App
            </a>
            <button className="navbar-toggler" 
            type="button" data-toggle="collapse"
             data-target="#navbarNav"
              aria-controls="navbarNav" 
              aria-expanded="false"
               aria-label="Toggle navigation">
               
               <span className='navbar-toggler-icon'>
                  
               </span>
               <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                       <li className="nav-item">
                           Home
                       </li>
                       <li className="nav-item">
                           Back
                       </li>
                   </ul>
               </div>
               </button>
        </div> );
    }
}
 
export default Navbar;