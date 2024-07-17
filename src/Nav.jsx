import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { fireContext } from "./firebase/AuthContext";



const Nav = () => {

   const ship = <>
   
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/sea">Sea</NavLink></li>
      <li><NavLink to="/ship">Ship</NavLink></li>
     
   
   
   </>

   const {user, logOut} = useContext(fireContext)

   const handleOut = () => {
    logOut()
    .then(() => console.log('logOut successfully'))
    .catch( error => 
      console.error(error)
    )
  
   }


    return (
        <div>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {ship}
      </ul>
    </div>
    
    <div className=" flex items-center gap-1">
    <img className=" h-[80px]" src="https://img.freepik.com/premium-vector/cruise-ship-blue-sea-waves-sun-design_261524-3309.jpg?w=740" alt="" />
    <a className=" font-bold text-4xl"><span className=" text-[#0eb9ff]">Sea</span> Eye</a>

    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {ship}
    </ul>
  </div>
  <div className="navbar-end">


  { user ? <>
    
    <button onClick={handleOut} className=" btn">SignOut</button>
  </>:

  <Link to="/login" ><a className="btn">SignIn</a></Link>   

  }






    {/* <Link to='/login' >
    <a className="btn">Sign In</a>
    </Link> */}

    
    
   
  </div>
</div>
            
        </div>
    );
};

export default Nav;