import React, { useEffect } from 'react';
import "./Banner.css"
import { Link } from 'react-router-dom'
import Aos from 'aos';
import "aos/dist/aos.css";

function Banner() {
	useEffect(()=>{
		Aos.init({duration:2000});
			},[])
    return (
        <div data-aos="fade-up">
       <aside className="silowp-showcases site-main">
	<div className="container">
		<div className="row">
			<div className="col-xs-12 textcenter-xs flex-xs-middle">
				<h1 className="entry-title">WANT TO KNOW MORE ABOUT OUR NGO ?</h1>

				<Link to="/about">
				<button className="more-link">Learn More</button>
				</Link>
			
			</div>
		</div>
	</div>
</aside>
        </div>
    )
}

export default Banner
