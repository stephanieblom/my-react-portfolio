import React, { useState } from 'react';
import "../style.css";
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import { Button } from "./Button"


function NavBar() {

const [clicked, setClicked] = useState(false)
  

  function handleClick() {
    console.log("Clicked on burger state", clicked)
    if(clicked == false){
      setClicked(true);
    } else {
      setClicked(false);
    }

    console.log("...Clicked on burger state", clicked)

  }

  return(
        <nav className="NavbarItems">
          <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
          <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={clicked ? 'nav-menu active': 'nav-menu'}>
            {MenuItems.map((item,index)=>{
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
          <Button>Sign Up</Button>
        </nav>
      )
}


export default NavBar; 





/* activePage  | changePage-call-back */
// function NavBar() {
//   const location = useLocation();

//   return (

//     <div className="header">
//       <div className="row">
//         <div className="col-12">
//         <nav className="navbar">
//               <div className="nav-item">
//                 <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
//                   Home
//                 </Link>
//               </div>  
//               <div className="nav-item">
//                 <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
//                   Portfolio
//                 </Link>
//               </div>         
//               <div className="nav-item">
//                 <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
//                   Contact
//                 </Link>
//               </div>                  
//           </nav>
//           <hr></hr>
//         </div>
//       </div>
//     </div>

//   );
// }

// export default NavBar;