import React from 'react'
import "./Careers.css"
import { Link } from 'react-router-dom'
function Careers() {
    return (
        <div>
            <div class="pagecontainer">
  <div class="headerimagecontainer">
    <div class="headercontent">
      <h1>do what you 
        <img src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/1345984533_love_360.png" alt="Love" class="img-responsive"/>
        {/* <img src={"/women.png"} alt="Love" class="img-responsive"/> */}
         everyday</h1>
      <p>Want to join the God's Creation team? If you have a passion for helping & want to work for the NGO , check out the listings below or send your resume to<br/>
      <Link to={{ pathname:"https://gmail.com" }} target="_blank" >
        <span>godcreationcareers@gmail.com</span>
        </Link>
        </p>
      {/* <a href="#joblistings">view job openings</a> */}
    </div>
  </div>
  <div class="benefitscontainer">
    <h2>benefits in God's Creation</h2>
    <ul>
      <li>
      <i class="career_icons fas fa-home"></i>

        <h3>community</h3>
        <p>We host happy hours, employee appreciation events, and some awesome team building events.</p>
      </li>
      <li>
      <i class="career_icons fas fa-people-carry"></i>
        <h3>Helping Hands</h3>
        <p>We believe that if you work hard, you get to play hard too. Enjoy time off in addition to all main holidays.</p>
      </li>
      <li>
      <i class="career_icons fas fa-smile"></i>
        <h3>Make people smile</h3>
        <p>We try our best to make children smile with our small efforts for them we care about there needs.</p>
      </li>
      <li>
      <i class="career_icons fas fa-tshirt"></i>
        <h3>casual attire</h3>
        <p>We keep it classy yet casual, so feel free to wear what you feel comfortable in!</p>
      </li>
     </ul>
   </div>


<Link to="/">
   <div class="col-md-3 col-sm-3 col-xs-6">
      <a href="#" class="btn btn-sm animated-button victoria-one">Internship</a> 
    </div>
  </Link>

  <Link to="/contact">
    <div class="col-md-3 col-sm-3 col-xs-6">
       <a href="#" class="btn btn-sm animated-button victoria-two">Volunteering</a>
    </div>
  </Link>


  </div>
</div>
    )
}

export default Careers























































































