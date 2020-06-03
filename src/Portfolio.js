import React, { Component } from 'react';




class Portfolio  extends Component {



render(){

  return(

     
      
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">


            <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt="" src="images/portfolio/aroundme.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Around-Me</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> 


            <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/c.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Contact Keeper</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> 


              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/g.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>GitHub Finder</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> 



              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/sa.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Secret Crush</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> 
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/yelp.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Yelp Camp</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> 
              
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/snakegame.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Snake Game</h5>
                        <p>Simple React App</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> 
              
              
              
               
            </div> {/* portfolio-wrapper end */}
          </div> 
          
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/aroundme.jpg" alt="" />
            <div className="description-box">
              <h4>Around-Me</h4>
              <p>This is a location based web app, to take part in discussion around your locality. It allows to post questions and take part in discussions that are posted around you within 5 Kms radius. It is built using REACT for front-end using Context api for state management. The RESTful API is built using Express and MongoDB as database. Authentication is done using JWT</p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/vignesh-ravichandran/Around-me" target="_blank">Code</a>
               
               <span class="gitlive"></span>
              <a href="https://secure-everglades-29436.herokuapp.com/" target="_blank">Live App</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>




          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/c.jpg" alt="" />
            <div className="description-box">
              <h4>Contact Keeper</h4>
              <p>This is a simple web app to store contacts with all CRUD functionalities. It is built using REACT for front-end using Context api for state management. The RESTful API is built using Express and MongoDB as database. Authentication is done using JWT</p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/vignesh-ravichandran/Contact-Keeper" target="_blank">Code</a>
               
               <span class="gitlive"></span>
              <a href="https://tranquil-inlet-16182.herokuapp.com/" target="_blank">Live App</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>


          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/g.png" alt="" />
            <div className="description-box">
              <h4>GitHub Finder</h4>
              <p>Static web app built using REACT and APIs from GitHub to search for users in GitHub. </p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/vignesh-ravichandran/GitHub-finder" target="_blank">Code</a>
               
               <span class="gitlive"></span>
              <a href="https://git-hubfinder-vignesh-ravichandran.netlify.app/" target="_blank">Live App</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>





          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/sa.jpg" alt="" />
            <div className="description-box">
              <h4>Secret Crush</h4>
              <p>This is a simple dating app based on Facebook friends. I have used Boot Strap for fron-end, Express for back-end, MongoDB for database and have hosted it on AWS EC2 instance. Please contact vigneshravichanders@gmail.com to get test user credentials.</p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/vignesh-ravichandran/SecretCrush-v1" target="_blank">Code</a>
               
               <span class="gitlive"></span>
              <a href="https://www.secretcrush.co.in/" target="_blank">Live App</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/yelp.jpg" alt="" />
            <div className="description-box">
              <h4>Yelp Camp</h4>
              <p>This is a simple Node.js web application built with RESTful routing and hosted on Heroku server. </p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
             <a href="https://github.com/vignesh-ravichandran/YelpCamp" target="_blank">Code</a>
               
               <span class="gitlive"></span>
              <a href="https://whispering-caverns-49331.herokuapp.com/" target="_blank">Live App</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/snakegame.jpg" alt="" />
            <div className="description-box">
              <h4>Snake Game using React</h4>
              <p>This is a simple implementation of the classic snake game through React framework. </p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
            <a href="https://github.com/vignesh-ravichandran/React-Snake-Game" target="_blank">Code</a>
               
               <span class="gitlive"></span>
              <a href="https://vignesh-ravichandran.github.io/React-Snake-Game/" target="_blank">Live App</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          
        </div> {/* row End */}
      </section> 


  	)}}

export default Portfolio;