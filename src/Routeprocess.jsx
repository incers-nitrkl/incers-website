import React from 'react';
import { Switch,Route,Redirect } from 'react-router';
import Apps from './Apps';
import About from './About';
import Contact from './Contact';
import Members from './Members'
import Events from './PlacementDiary'
import Events1 from './PresentationCompetetions'
import Navbar from './Navbar';
// import Navbar from './Navbar';
import Blog from './Blog'
import Blog1 from './Blog1'
import Blog2 from './Blog2'
import Mritika from './Events'


const Routing = ()=>{
      return(<>
          {/* <Switch> */}
              <Route exact path="/" component={Apps}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/members" component={Members}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/events" component={Events}/>
              <Route exact path="/events1" component={Events1}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/blog1" component={Blog1}/>
              <Route exact path="/blog2" component={Blog2}/>
              <Route exact path="/mritika" component={Mritika}/>
          {/* </Switch> */}
      </>);
}

export default Routing;