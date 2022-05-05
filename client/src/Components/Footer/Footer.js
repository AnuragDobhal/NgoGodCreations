import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
    return (
        <div>
          

  <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Our NGO</h4>
  	 			<ul>
  	 			   <li>
					  <Link to="/about"> <h6> about us</h6> </Link>
				   </li>
				   <li>
					 <Link to="/"> <h6> Our Services</h6> </Link>
				   </li>
				   <li>
					 <Link to="/contact"> <h6> Contact us</h6> </Link>
				   </li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
				   <li>
					 <Link to="/careers"> <h6> Career</h6> </Link>
				   </li>
				   <li>
					 <Link to="/work"> <h6> Our Work</h6> </Link>
				   </li>
				   <li>
					 <Link to="/donation"> <h6> Donation Options</h6> </Link>
				   </li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Know Us</h4>
  	 			<ul>
				   <li>
					 <Link to="/news"> <h6> News</h6> </Link>
				   </li>
				   <li>
					 <Link to="/family"> <h6> Our Family</h6> </Link>
				   </li>
				   <li>
					 <Link to="/"> <h6> Home</h6> </Link>
				   </li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
					   <Link to={{ pathname:"https://github.com/AnuragDobhal" }} target="_blank">
					       <i className="fab fa-facebook-f"></i>
					   </Link>
					   <Link to={{ pathname:"https://github.com/AnuragDobhal" }} target="_blank">
					       <i className="fab fa-twitter"></i>
					   </Link>
					   <Link to={{ pathname:"https://github.com/AnuragDobhal" }} target="_blank">
					   <i className="fab fa-instagram"></i>
					   </Link>
					   <Link to={{ pathname:"https://github.com/AnuragDobhal" }} target="_blank">
					   <i className="fab fa-linkedin-in"></i>
					   </Link>
  	 				{/* <a href="#"><i className="fab fa-facebook-f"></i></h6>
  	 				<a href="#"><i className="fab fa-twitter"></i></h6>
  	 				<a href="#"><i className="fab fa-instagram"></i></h6>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></h6> */}
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
       <p className="copy_right">&#169; 2021-2025 copyright. all right are reserved by God creation </p>
  </footer>
        </div>
    )
}

export default Footer
