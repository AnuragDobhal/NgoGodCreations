import React from 'react'
import "./Error404.css"
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div className="error_body">
<h1>404 Error !</h1>
<p className="zoom-area"><b>Sorry,</b> seems you are lost. This is not the page you're looking for </p>
<section className="error-container">
  <span>4</span>
  <span><span className="screen-reader-text">0</span></span>
  <span>4</span>
</section>
<div className="link-container">
    <Link to="./">
     <a target="_blank" className="error_home">Go Back to Home</a>
  </Link>
</div>
        </div>
    )
}

export default Error404
