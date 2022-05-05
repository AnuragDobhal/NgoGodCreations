import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./OurFamily.css"

export default class OurFamily extends Component {
  render() {
    return (
<>

        <h2 className="our_fam">Our Family</h2> 
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}
      >
          
    
        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Anant Goyal</h3>
            <h4>Volunteer</h4>
            <p>
            नमस्कार, मैं अनंत गोयल, गॉड’स क्रिएशन संस्था  से लगभग 3 सालों से जुड़ा हुआ हूँ। मेरा इससे जुड़ने का कारण एसे लोगों तक सुविधाओं का पहुँचाना है जिनके पास सही ढंग से सुविधाएँ पहुँच नहीं पाती और यह काम गॉड’स क्रिएशन संस्था बख़ूबी निभा रही है। 
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Gargi Kathait</h3>
            <h4>Volunteer</h4>
            <p>
            Hello.. I am Gargi Kathait from gopeshwar pursuing bsc. It from graphic era hill university. I have joined god’s creation to help the children who are mentally able to achieve their goals but financially they can’t.. so i will help them with my team including the head kartikay vishnoi we will help them to achieve their goals
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Ankush Devrani</h3>
            <h4>Volunteer</h4>
            <p>
            Hello, I am Ayushi Goyal and I’m an active member of God’s Creation society. I have been a volunteer since 2 years. The reason, I joined this NGO is that it is working for some real causes and is doing well. It helped a lot of students in getting a better education, proper guidance and a lot more. The volunteers here are selflessly working for the betterment of the people who are in need. I’m a proud member of God’s Creation.
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Pratibha Tiwari</h3>
            <h4>Volunteer</h4>
            <p>
            Hello to the people out there, My name is Pratibha Tiwari. I am 20 years old. I am honoured to tell you that I am one of the members of NGO god’s creation. I am working for this NGO since 2019 and I’m very glad to pe a part of this. I joined this NGO because I always wanted to do some kind of social help to the needy people and our NGO does a great help. I love teaching the students and seeing them do really great and make us proud. I don’t think there is any better way than doing something productive for the better education of those students over our weekends or free time. 
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Luvish Singh</h3>
            <h4>Volunteer</h4>
            <p>
            Hey there, Lavish Singh here From Dehradun. I Am Pursuing BSC. IT from Graphic Era Hill University . I Joined Gods Creation after seeing the efforts made by my brother and classmate Kartikay Vishnoi who is the founder of this NGO . Its a chance for me to give something back to the needy society , share my skills , learn new skills , share my knowledge and gain new experiences. It’s an honour to be a part of this organisation . 
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Purnima Negi</h3>
            <h4>Volunteer</h4>
            <p>
            My name is Purnima Negi, I belong to Kotdwara, Uttarakhand. I’m a social worker and a volunteer of NGO god’s creation I like to help the needy once Specially children. Plz join and support god’s creation Thank you
            </p>
          </div>
        </div>


        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Mudit Baloni</h3>
            <h4>Volunteer</h4>
            <p>
            A TERRIBLE situation I face is when I see a gleam of hope in those eyes And try my best to hide pain from those and spend a whole day with those ‘specials’ ! Hello, My name is Mudit Baloni from Dehradun (UK). I’m student of Computer Science & Engineering from Swami Rama Himalayan University. My childhood friend Kartikay Vishnoi & Founder of God’s creation society has been working since few years. I get a golden opportunity to work with his team. It’s chance to me that i express my skills, knowledge and take a new experience from there. It’s a proud moment to me work with the society. 
            </p>
          </div>
        </div>

    
        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Ujjwal Tyagi</h3>
            <h4>Volunteer</h4>
            <p>
            I am Ujjwal Tyagi and I am an active member of God’s Creation society. I have been volunteering since 2 years. The reason behind I joined the NGO is that I want to help the person who is in need of proper education and proper guidance to achieve success. 
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Aarti</h3>
            <h4>Volunteer</h4>
            <p>
            Hey! I’m Aarti from Etawah (UP).I’m a volunteer of God’s creation(NGO), where we are contributing towards the upliftment of the community and the nation as a whole along with our founder of NGO kartikay vishnoi and team members. Last but not the least. It feels good to help others.  Thankyou
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Abhinav Balodi</h3>
            <h4>Volunteer</h4>
            <p>
            I am Abhinav Balodi. Currently I am pursuing bsc.it and I find interest in teaching children that’s y I joined god’s creation. Helping the others and upliftment of unprivileged helps in creation of a better society n I am luck that i m proud of this group. 
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Sagar Gupta</h3>
            <h4>Volunteer</h4>
            <p>
            Hi, I am Sagar Gupta and currently i am working with an NGO Gods creation. I joined the NGO with the thought of providing food ,education and care to the children’s who are deprived of it. The happiness which I see on their face due to our little efforts gives me huge amount of satisfaction which is priceless. 
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Ashok Khanduri</h3>
            <h4>Volunteer & Content writer</h4>
            <p>
            I am a content writer and have done many internships during the past two years for some NGOs. Currently I am pursuing my hons studies in French and I find my interests in creative writing, book reviewing and slam poetry. The reason I am with God’s Creation family is to devote a part of my time towards the education of underprivileged kids who don’t have access to things like music, dance, smart classes etc. I hope my interests and plans will take me to far away places. 
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Babal Punia</h3>
            <h4>Volunteer</h4>
            <p>
            My name is Babal Punia, I’m a resident of Uttarakhand , and Pursuing Graduation from Graphic Era University , my hobby is reading and getting to know about the world. I volunteered for God’s Creation NGO as it gives you a platform to do your bit for the society and people who need help , God’s creation has worked hard and continuing to do so in making the world a better place.
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Punam Rana</h3>
            <h4>Volunteer</h4>
            <p>
            Hello everyone! This is me PUNAM RANA from Doiwala. The reason I am with God’s Creation family is to devote a part of my time towards the education and overall development of underprivileged kids who don’t have access to things. I am working as a volunteer to help children to make a positive contribution in the growth and development of the society.
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Priya Chauhan</h3>
            <h4>Volunteer</h4>
            <p>
            Hey guys,this is Priya Chauhan here and I am from Dehradun, currently I am pursuing BSC IT from gehu . I am a member of god’s creation ,which is run by my friend kartikey . So , basically I joined this NGO because I see that all of them are helping children’s for no self purpose ,the reason why I am a part of this because I love to aware , educate, gaining experience,sharing knowledge to all and that’s make me really happy and I am very lucky to be a part of this NGO 
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Priyanshu Bisht</h3>
            <h4>Volunteer</h4>
            <p>
            I’m priyanshu Bisht from uttrakhand.I want to become and social influencers and do something for my state so I decide to do something for slum children who can’t full fill their dream so I take the responsibility to fulfill their dream at any cost.I join God’s creation Society it is a humanitarian organization dedicated to working with children from less privileged backgrounds to reach their full potential by tackling the causes of poverty and injustice. I strongly believe my skills are going to help the organization reach this goal.” 
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Ankush Chauhan</h3>
            <h4>Volunteer</h4>
            <p>
            मैं अंकुश चौहान देहरादून का रहने वाला और मैं काफी समय से इस संस्था से जुड़ा हु …..मैं अभी बीएससी एग्रीकल्चर का छात्र हु.. मैं इस संस्था से इसलिए जुड़ा हु ताकि मुझे अपने विचार साझा करने का मौका मिले . मुझे इस संस्था से जुड़ने का मौका मेरे साथी कार्तिके विशनोई के कारण प्राप्त हुआ। मैं इनका बहुत आभारी हूं . कार्तिकेय इस संस्था के अध्यक्ष भी है .. मुझे इस संस्था के माध्यम से अपना कौशल लोगो से साझा करने का अवसर मिलेगा … 
            </p>
          </div>
        </div>

        <div>
          <img src={"/image-kar.jpg"} alt="kar"/>
          <div className="myCarousel_fam">
            <h3>Priyanshu Kunwar</h3>
            <h4>Volunteer</h4>
            <p>
            Hello I am Priyanshu.I live in Doiwala.I have been associated with the NGO for 5 months· Working for our NGO ,it gives me the satisfaction when I see those smiling faces of children and the people I helped.I want to make a positive contribution in the growth and development of the society.I also join NGO to gain experience while working for an organisation. I want to make a significant contribution towards a better tomorrow of the society. 
            </p>
          </div>
        </div>
        
      </Carousel>
      </>
    );
  }
}
