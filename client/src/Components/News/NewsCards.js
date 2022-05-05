import React from 'react'
import "./News.css"

function NewsCards() {
    return (
        <div>
              <div className="cards_news">
              <div className="card_news_title">
      <h4 className="heading-4">Our Mission</h4>
      <p>Our first and the primary mission is to create a certain belief in the society that ‘Everything is possible’. We wish to achieve great feats in the field of education, health care, environment and social welfare. </p>
    </div>

   <div className="card_news_title">
      <h4 className="heading-4">Our Vision</h4>
      <p>We have been actively educating poor kids, organising free healthcare check camps and providing workshops in different government schools since last three years. We have this vision in our plans to create this impact on a national level soon with our whole team.</p>
    </div>

    <div className="card_news_title">
      <h4 className="heading-4">Our Background</h4>
      <p>So it all started when I was in school and I had a dream. It was a general convention that life is just about working hard, earning , living and just taking in as much as you can. But my dream was about just giving back to the society without any wish of getting something in return.</p>
    </div>
  </div>
        </div>
    )
}

export default NewsCards
