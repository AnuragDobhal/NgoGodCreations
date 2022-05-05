import React, { useEffect } from 'react';
import "./Cards.css"
import Aos from 'aos';
import "aos/dist/aos.css";

function Cards() {
  useEffect(()=>{
    Aos.init({duration:2000});
        },[])
    return (
        <div data-aos="fade-up">
<ul className="cards">
  <li className="cards__item">
    <div className="card">
      <div className="card__image card__image--fence"></div>
      <div className="card__content">
        <div className="card__title">Our Mission</div>
        <p className="card__text">Our first and the primary mission is to create a certain belief in the society that ‘Everything is possible’. We wish to achieve great feats in the field of education, health care, environment and social welfare. </p>
        <button className="btn btn--block card__btn">Know More</button>
      </div>
    </div>
  </li>
  <li className="cards__item">
    <div className="card">
      <div className="card__image card__image--river"></div>
      <div className="card__content">
        <div className="card__title">Our Vision</div>
        <p className="card__text">We have been actively educating poor kids, organising free healthcare check camps and providing workshops in different government schools since last three years. We have this vision in our plans to create this impact on a national level soon with our whole team.</p>
        <button className="btn btn--block card__btn">Know More</button>
      </div>
    </div>
  </li>
  <li className="cards__item">
    <div className="card">
      <div className="card__image card__image--record"></div>
      <div className="card__content">
        <div className="card__title">Our Background</div>
        <p className="card__text">So it all started when I was in school and I had a dream. It was a general convention that life is just about working hard, earning , living and just taking in as much as you can. But my dream was about just giving back to the society without any wish of getting something in return.</p>
        <button className="btn btn--block card__btn">Know More</button>
      </div>
    </div>
  </li>

</ul>
        </div>
    )
}

export default Cards
