import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css"

export default class Testimonials extends Component {
  render() {
    return (
<>

        <h2 className="testimonials">Testimonials</h2> 
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={1000}
      >
          
    
        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel">
            <h3>Kartikey</h3>
            <h4>Owner</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
        <img src={"/logo.png"} alt="image2" />
          <div className="myCarousel">
            <h3>God's Creation Team</h3>
            <h4>Team</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
        <img src={"/women.png"} alt="image3" />
          <div className="myCarousel">
            <h3>Arvind</h3>
            <h4>User</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>


        <div>
        <img src={"/women.png"} alt="image3" />
          <div className="myCarousel">
            <h3>Arvind</h3>
            <h4>User</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>

        <div>
        <img src={"/women.png"} alt="image3" />
          <div className="myCarousel">
            <h3>Arvind</h3>
            <h4>User</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>

        <div>
        <img src={"/women.png"} alt="image3" />
          <div className="myCarousel">
            <h3>Arvind</h3>
            <h4>User</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
      </>
    );
  }
}
