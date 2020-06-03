import React, { Component } from 'react';




class Resume  extends Component {



render(){

  return(


   

      <section id="resume">
       
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Bannari Amman Institute of Technology</h3>
                <p className="info">Bachelor of Engineering (Electrical and Electronics Engineering) <span>•</span> <em className="date">April 2018</em></p>
                <p>
                  Graduated on April 2018 with a CGPA of 7.77 from Bannari Amman Institute of Technology, Sathyamangalam. 
                </p>
              </div>
            </div> 
           
          </div> 
        </div> 
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Wipro</h3>
                <p className="info">Project Engineer <span>•</span> <em className="date">November 2018 - Present</em></p>
                <p>
                  1 year and 5 months of IT experience in analysis, design, and development &amp; implementation of Automation bots / use
cases deployed through Holmes tools, analysis and production support in SAP MMPP and SAP
SDCS.
                </p>
              </div>
            </div> 
            
          </div> 
        </div> 
        
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Others</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3> <span><a href="https://www.amazon.in/Search-Purpose-different-approach-education-ebook/dp/B071HTM4QC/ref=sr_1_1?keywords=search+for+the+purpose+vignesh+ravichandran&qid=1583662024&sr=8-1" target="_blank"><i className="fa fa-book" /></a></span></h3>
                <p className="info">Search For the Purpose <span>•</span> <em className="date">November 2018 - Present</em></p>
                <p>
                 Have authored a book called 'Search for the purpose' and have published it on Amazon Kindle. 
                </p>
              </div>
            </div> 
            
          </div> 
        </div> 
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Languages</span></h1>
          </div>
          <div className="nine columns main-col">
            <p></p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand css" /><em>JavaScript</em></li>
                <li><span className="bar-expand html5" /><em>Java</em></li>              
                <li><span className="bar-expand photoshop" /><em>C</em></li>
                
              </ul>
            </div>
          </div> {/* main-col end */}
        </div> 

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Have experience in developing and deploying full stack web apps. Have built RESTful APIs using Express, full-stack webapps using React for front-end and Express for back-end. Have deploying experience in Heroku and AWS EC2 instances. 
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand css" /><em>Node JS</em></li>
                <li><span className="bar-expand html5" /><em>React</em></li>
                <li><span className="bar-expand html5" /><em>Express</em></li>
                <li><span className="bar-expand photoshop" /><em>MongoDB</em></li>
                <li><span className="bar-expand wordpress" /><em>AWS EC2</em></li>
                <li><span className="bar-expand wordpress" /><em>BootStrap</em></li>
                <li><span className="bar-expand wordpress" /><em>CSS</em></li>
                <li><span className="bar-expand illustrator" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                
              </ul>
            </div>
          </div> {/* main-col end */}
        </div> 
      </section> 

  )


}


}


export default Resume;  
