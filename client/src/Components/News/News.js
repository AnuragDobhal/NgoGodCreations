import React from 'react'
import Cards from '../Cards/Cards'
import "./News.css"
// import NewsCards from './NewsCards'

function News() {
    return (
        <div className="news">
            <div className="container_news">
    <header>
    <h1 className="heading-1">Events and News</h1>
    <div className="sub-heading">
      {/* <p>Saterday, <span>june 26, 2021</span></p> */}
      <p className="importent">God's Creation</p>
    </div>
    </header>

    <div className="main">
      <div className="home">
        <div className="left">
          <img src={"/covid.jpg"} className="home-img" alt="Paper"/>

          <h2 className="heading-2">
         Latest News of Gods Creation
          </h2>
        </div>

        <div className="right">
          <h3 className="heading-3">latest Events</h3>
          <div className="lists">
            <div className="list">
            <img src={"/edu.jpg"} className="home-img" alt="Paper"/>

              <p>Let us think of education as the means of developing our greatest abilities, because in each of us there is a private hope and dream which, fulfilled, can be translated into benefit for everyone and greater strength of the nation.</p>
            </div>

            <div className="list">
            <img src={"/udaan.jpg"} className="home-img" alt="Paper"/>

              <p>Udaan the event where our team organized an event for the slum children to make them familiar with us and gifted them exciting gifts </p>
            </div>

            <div className="list">
            <img src={"/events.jpg"} className="home-img" alt="Paper"/>
              <p>Our team always try to celebrate every festival with the kids who can't afford things like (colors, sweets, crackers,etc). 
              </p>
            </div>

            <div className="list">
            <img src={"/covid.jpg"} className="home-img" alt="Paper"/>
              <p>In the time of pandamic (covid-19) our team provide food and all the necessary things to the people lives in slum area</p>
            </div>
          </div>
        </div>
      </div>

      <article>
       
        <p>This whole work and initiative was first started when three young friends : Aman Singh, Siddharth Negi and Rahul Kumar joined hands with us. Soon our works and activities started drawing the attention of lots of people from different background.
        
        We never knew that our efforts will get so much of recognition later.Right now we are a 200+ volunteers family with guidance of people like Dr. Vijay Kumar Nautiyal ji(head, Nautiyal Artificial limb centre),  

        Shri Anoop Naudiyal ji (Counsellor, Nagar Nigam Dehradun & social activist), Shri Vimal Uniyal ji (Counsellor, Nagar Nigam Dehradun & social activist), Shri Sagar Gurung ji( a social activist and sponsor of young talents) and many other esteemed people who act as our sources of guidance.  It all started when I was in school and I had a dream. It was a general convention that life is just about working hard, earning, living and just taking in as much as you can. But my dream was about just giving back to the society without any wish of getting something in return.</p>

      </article>
    </div>
  </div>

  <blockquote>
  Money is not the only commodity that is fun to give. We can give time, we can give our expertise, we can give our love, or simply give a smile. What does that cost? The point is, none of us can ever run out of something worthwhile to give
  </blockquote>
  
  <Cards/>
        </div>
    )
}

export default News
