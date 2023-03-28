import React from 'react';
import { Switch,Route,Redirect, Routes } from 'react-router';
import Apps from './Apps';
import About from './About';
import Contact from './Contact';
import Members from './Members'
import Members1 from './Members1';
import Members2 from './Members2';
import Events from './PlacementDiary'
import Events1 from './PresentationCompetetions'
import Events2 from './Events2';
import Events3 from './Events3';
import Events4 from './Events4';
import Events5 from './Events5';
import Navbar from './Navbar';
import Blog from './Blog'
import Blog1 from './Blog1'
import Blog2 from './Blog2'
import Mritika from './Events'
import AboutIncersChapter from './AboutIncersChapter';
import Mritika1 from './Mrittika1';
// import Alumni from './Alumni';


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
              <Route exact path="/events5" component={Events5}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/blog1" component={Blog1}/>
              <Route exact path="/blog2" component={Blog2}/>
              <Route exact path="/aboutincerschapter" component={AboutIncersChapter}/>
              <Route exact path="/mritika" component={Mritika}/>
              <Route exact path="/mritika1" component={Mritika1}/>
              {/* <Route exact path="/Alumni" component={Alumni}/> */}
          {/* </Switch> */}
      </>);
}

export default Routing;