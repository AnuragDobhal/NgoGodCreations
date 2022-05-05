import React, { useEffect } from 'react';
import "./OurBrief.css"
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

function OurBrief() {
   useEffect(()=>{
      Aos.init({duration:2000});
          },[])
    return (
      <div data-aos="fade-up">
           	<h2 className="underline">brief description</h2> 

  <div className="section-container">
         <div className="columns image" >
             <img src={"/women.png"} alt="logo"/>
            &nbsp;
         </div>
         <div className="columns content">
            <div className="content-container">
               <h5>Where we started ?</h5>
               <p>
               God's creation has got a small story that initiated the idea of forming a society which can promote humanity. God’s Creation initially started its journey on 23rd July 2017 and the purpose behind that was social welfare of the society, education, environment. It got nationally registered on 29th August 2018 under the society registration act 1860. The whole sole effort are made by the entire team of gods creation . Various events are organised under this NGO which turn out to be beneficial for all the members of NGO & as well as for the society. 
               </p>
               <label className="children">800+ CHILDREN
               <i className="child_icon fas fa-user-graduate"></i>
               {/* <i class="fa fa-heart w3-margin-bottom w3-jumbo"></i> */}

               </label><br/>
               <label className="children">200+ VOLUNTEER
               <i className=" vol_icon fas fa-hands-helping"></i>
               </label>
               <br/><br/>
               <p>&#187; Anyone could join us and be a part of our family, we welcome them who are ready to invest their time with us.
                 </p>
               <p>&#187; We do provide certificate based internships, for more check our  
                   <Link to="/careers">
                    <span className="redirect"> &#187; careers section</span>
                  </Link>.</p>
            </div>
         </div>
      </div>

     
        </div>
    )
}

export default OurBrief
