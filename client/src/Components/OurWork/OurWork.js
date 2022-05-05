import React from 'react'
import { Link } from 'react-router-dom'
import "./OurWork.css"


function OurWork() {
    return (
        <div className="container_work">
           <h2 className="our_work">Our Work</h2> 
<div className="blog-card">
    <div className="description">
      <h1 className="first">EDUCATION</h1>
     
       <p> “Let us think of education as the means of developing our greatest abilities, because in each of us there is a private hope and dream which, fulfilled, can be translated into benefit for everyone and greater strength of the nation.”
       </p>
       <h2 className="auth">- John F. Kennedy</h2>
        <Link to="/education">
          <button className="read-more">read more</button>
        </Link>
    </div>
</div>

<div className="blog-card">
    <div className="description">
     <h1 className="second">ENVIRONMENT</h1>
       <p> “Earth provides enough to satisfy every man’s needs, but not every man’s greed.”
       </p>
       <h2 className="auth">– Mahatma Gandhi</h2>
        <Link to="/contact">
          <button className="read-more">read more</button>
        </Link>
    </div>
</div>

<div className="blog-card">
    <div className="description">
     <h1 className="third">HEALTH</h1>
       <p> ““To keep the body in good health is a duty, otherwise we shall not be able to keep our mind strong and clear.””
       </p>
       <h2 className="auth">– Buddha</h2>
        <Link to="/about">
          <button className="read-more">read more</button>
        </Link>
    </div>
</div>


<div className="blog-card">
    <div className="description">
     <h1 className="fourth">SOCIAL AWARENESS </h1>
       <p> “Earth provides enough to satisfy every man’s needs, but not every man’s greed.”
       </p>
       <h2 className="auth">– Mahatma Gandhi</h2>
        <Link to="/about">
          <button className="read-more">read more</button>
        </Link>
    </div>
</div>


<div className="blog-card">
    <div className="description">
     <h1 className="fifth">ANIMALS</h1>
       <p> “Earth provides enough to satisfy every man’s needs, but not every man’s greed.”
       </p>
       <h2 className="auth">– Mahatma Gandhi</h2>
        <Link to="/">
          <button className="read-more">read more</button>
        </Link>
    </div>
</div>

<div className="blog-card">
    <div className="description">
     <h1 className="sixth">EVENTS</h1>
       <p> “udaan , eid milan samaroh, janmastmin”
       </p>
       <h2 className="auth">– Gods Creation</h2>
        <Link to="/about">
          <button className="read-more">read more</button>
        </Link>
    </div>
</div>



        </div>
    )
}

export default OurWork
