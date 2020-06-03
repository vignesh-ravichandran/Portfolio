import React, { Component } from 'react';




class Foot  extends Component {



render(){

  return(

 <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.linkedin.com/in/vignesh-ravichandrans/" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/vignesh_ravichander/" target="_blank"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://twitter.com/vignesh_ravis" target="_blank"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://github.com/vignesh-ravichandran" target="_blank"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.amazon.in/Search-Purpose-different-approach-education-ebook/dp/B071HTM4QC/ref=sr_1_1?keywords=search+for+the+purpose+vignesh+ravichandran&qid=1583662024&sr=8-1" target="_blank"><i className="fa fa-book" /></a></li>

            </ul>
            <ul className="copyright">
              <li>Last updated on May 2020</li>
                 
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>



  	)}}

export default Foot;