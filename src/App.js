import React from 'react';

import './App.css';
import Heads from './Head.js'
import About from './About.js'
import Resume from './Resume.js' 
import Foot from './Foot.js'
import Portfolio from './Portfolio.js'
import Contact from './Contact.js'

class App extends React.Component{


render(){

return (

<div>  

<Heads/>
<About/>
<Resume/>

<Portfolio/>
<Contact/>
<Foot/>
</div>

  )

}


}


export default App;
