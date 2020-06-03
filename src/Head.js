import React, { Component } from 'react';




class Heads  extends Component {



render(){


return (


      <header id="home" >
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav> 
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Vignesh Ravichandran.</h1>
            <h3 >I'm a Chennai based <span>Full stack developer</span> creating awesome and
              effective webapps. Let&apos;s <a className="smoothscroll" href="#about">start scrolling </a>
               and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
             
              
             
              <li><a href="https://www.linkedin.com/in/vignesh-ravichandrans/" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/vignesh_ravichander/" target="_blank"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://twitter.com/vignesh_ravis" target="_blank"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://github.com/vignesh-ravichandran" target="_blank"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.amazon.in/Search-Purpose-different-approach-education-ebook/dp/B071HTM4QC/ref=sr_1_1?keywords=search+for+the+purpose+vignesh+ravichandran&qid=1583662024&sr=8-1" target="_blank"><i className="fa fa-book" /></a></li>

             
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>


	)

}



}


export default Heads;