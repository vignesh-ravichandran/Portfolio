import React, { Component } from 'react';

class About extends Component{




render(){


return (
<div>
      {/* About Section
   ================================================== */}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic2.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I am a full-stack web developer from Chennai. Have experience in developing and hosting RESTful APIs , full-stack webapps.  I enjoy building everything from static sites to rich interactive webapps. If you are an employer looking to hire, feel free to scroll through and have a look at some of my works. 
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Vignesh Ravichandran</span><br />
                  <span>Flat no:4, Flowers and petals investin homes,<br />
                    Medavakkam, Chennai, Tamil Nadu 600100 
                  </span><br />
                  <span>+91 7845748797</span><br />
                  <span>vigneshravichanders@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://drive.google.com/file/d/1XMwzl3hS8KiRQcmXEKkQ5p9eUny0h8f0/view?usp=sharing" target="_blank" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://docs.google.com/document/d/1OlDZl_pZ8_54Th_o4WDSCJqqW4cTXHhGkcpzJCNvnsg/edit?usp=sharing" target="_blank" className="button"><i className="fa fa-download" />Download Curriculum Vitae    </a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
      </div>
    );

}



}


export default About;