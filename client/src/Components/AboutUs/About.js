import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./About.css"
import Aos from 'aos';
import "aos/dist/aos.css";

function About() {
    useEffect(()=>{
		Aos.init({duration:2000});
			},[])
    return (
        <div data-aos="fade-left">
            
            <div className="about-section">
  <h1 className="heading_about">About Us</h1>
  <p className="aboutus">This whole work and initiative was first started when three young friends : Aman Singh, Siddharth Negi and Rahul Kumar joined hands with us. Soon our works and activities started drawing the attention of lots of people from different background. We never knew that our efforts will get so much of recognition later.
Right now we are a 200+ volunteers family with guidance of people like Dr. Vijay Kumar Nautiyal ji(head, Nautiyal Artificial limb centre), Shri Anoop Naudiyal ji (Counsellor, Nagar Nigam Dehradun & social activist), Shri Vimal Uniyal ji (Counsellor, Nagar Nigam Dehradun & social activist), Shri Sagar Gurung ji( a social activist and sponsor of young talents) and many other esteemed people who act as our sources of guidance.
So it all started when I was in school and I had a dream. It was a general convention that life is just about working hard, earning, living and just taking in as much as you can. But my dream was about just giving back to the society without any wish of getting something in return. I completed my schooling, joined college and soon I got some new friends. One day I shared my idea with them and we started doing small activities of serving the poor masses in our localities and educating kids etc. This small series of events led to our gaining of support from people. The very first thing we organised was a drawing competition in a government school near our university and quite contrary to our expectations we were taken aback by the creativity of the students which they showed on the drawing sheets. They wanted to become engineers, medical experts, sportsmen etc. Then we organised a free health camp with many doctors from the city. By this time we had gained a lot of support from teachers and parents as well. Soon we were a 200+ volunteers team with students from different backgrounds and also amongst them there were some of our political acquaintances who always helped as. We started free extra-curricular classNamees in government schools, introduced dance and IT classNamees and workshops and finally our biggest talent show ‘Udaan’ materialised which was a huge success.
This whole journey was possible only because of my friends, guiding partners, siblings and God as we are all his creations. 😊
</p>
<h1 className="name">-Kartikay Vishnoi</h1>
<h2 className="founder">
Founder & National President</h2>
</div>
<h2 className="team">Our Team</h2> 



<div className="container_about" data-aos="fade-right">
        <div className="card">
            <div className="content">
                <div className="imgBx">
                    <img src={"/image-kar.jpg"} alt=""/>
                </div>
                <div className="contentBx">
                    <h4>James Ford</h4>
                    <h5>Director General</h5>
                </div>
                <div className="sci">
<Link>
<i className="fa fa-facebook" aria-hidden="true"></i>
</Link>
<Link>
<i className="fa fa-instagram" aria-hidden="true"></i>
</Link>
<Link>
<i className="fa fa-twitter" aria-hidden="true"></i>
</Link>


                </div>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="imgBx">
                <img src={"/women.png"} alt=""/>
                </div>
                <div className="contentBx">
                    <h4>Ann Brown</h4>
                    <h5>Mannager</h5>
                </div>
                <div className="sci">
                <Link>
<i className="fa fa-facebook" aria-hidden="true"></i>
</Link>
<Link>
<i className="fa fa-instagram" aria-hidden="true"></i>
</Link>
<Link>
<i className="fa fa-twitter" aria-hidden="true"></i>
</Link>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="imgBx">
                <img src={"/image-kar.jpg"} alt=""/>
                </div>
                <div className="contentBx">
                    <h4>Ben Jason</h4>
                    <h5>Developer</h5>
                </div>
                <div className="sci">
                <Link>
<i className="fa fa-facebook" aria-hidden="true"></i>
</Link>
<Link>
<i className="fa fa-instagram" aria-hidden="true"></i>
</Link>
<Link>
<i className="fa fa-twitter" aria-hidden="true"></i>
</Link>
                </div>
            </div>
        </div>

    </div>

        </div>
    )
}

export default About
