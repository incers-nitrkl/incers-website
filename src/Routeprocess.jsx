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
import Members1 from './Members1';
import Members2 from './Members2';
import Mritika1 from './Mrittika1';
import Events2 from './Events2';
import Events3 from './Events3';
import Events4 from './Events4';


const Routing = ()=>{
      return(<>
          {/* <Switch> */}
              <Route exact path="/" component={Apps}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/members" component={Members}/>
              <Route exact path="/members1" component={Members1}/>
              <Route exact path="/members2" component={Members2}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/events" component={Events}/>
              <Route exact path="/events1" component={Events1}/>
              <Route exact path="/events2" component={Events2}/>
              <Route exact path="/events3" component={Events3}/>
              <Route exact path="/events4" component={Events4}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/blog1" component={Blog1}/>
              <Route exact path="/blog2" component={Blog2}/>
              <Route exact path="/mritika" component={Mritika}/>
              <Route exact path="/mritika1" component={Mritika1}/>
          {/* </Switch> */}
      </>);
}

export default Routing;