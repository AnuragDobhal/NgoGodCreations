
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from './Components/ImageSlider/Imageslider/Slider';
import Cards from './Components/Cards/Cards';
import OurBrief from './Components/Our Brief/OurBrief';
import Banner from './Components/Banner/Banner';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import About from './Components/AboutUs/About';
import Scroll from './Components/ScrollTop/Scroll';
import Contactus from './Components/Contact/Contactus';
import OurWork from './Components/OurWork/OurWork';
import OurFamily from './Components/OurFamily/OurFamily';
import Education from './Components/OurWork/Pages/Education/Education';
import Donation from './Components/Donations/Donation';
import Careers from './Components/Careers/Careers';
import Faq from './Components/FAQ/Faq';
import News from './Components/News/News';
import Error404 from './Components/404Page/Error404';


function App() {
  return (
    <>
      <Router>
   
          <Switch>
          <Route path="/about">
          <Navbar/>
            <About/>
            <Footer/>
              </Route>
    
              <Route path="/contact">
          <Navbar/>
          <Contactus/>
            <Footer/>
              </Route>


              <Route path="/work">
          <Navbar/>
          <OurWork/>
            <Footer/>
              </Route>

              <Route path="/family">
          <Navbar/>
          <OurFamily/>
            <Footer/>
              </Route>

              <Route path="/education">
          <Navbar/>
         <Education/>
            <Footer/>
              </Route>

              <Route path="/donation">
          <Navbar/>
        <Donation/>
            <Footer/>
              </Route>

              <Route path="/careers">
          <Navbar/>
        <Careers/>
            <Footer/>
              </Route>

              <Route path="/faq">
          <Navbar/>
        <Faq/>
            <Footer/>
              </Route>

              <Route path="/news">
          <Navbar/>
        <News/>                   
            <Footer/>
              </Route>

              <Route exact path="/">
                <Navbar/>
                <Slider/>
                <Cards/>
                <OurBrief/>
                <Banner/>
                <Testimonials/>
                <Footer/>
              </Route>

              <Route path="*">
              <Error404/>
              </Route>
          </Switch>
          <Scroll showBelow={250}/>
      </Router>
    </>
  );
}

export default App;
