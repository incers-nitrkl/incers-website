import React from 'react';
import { Route } from 'react-router';
import Home from '../src/component/Home/Home';
import About from '../src/component/About/About';
import Contact from './component/ContactUs/ContactUs';
import Members from './component/Member/Member2023'
import Members1 from './component/Member/Member2022';
import Members3 from './component/Member/Member2024'
import Members2 from './Members2';
import Events from './PlacementDiary'
import Events1 from './component/Events/PresentationComprtitions'
import Events2 from './component/Events/Webinar&TechnicalSession';
import Events3 from './component/Events/FlashbackFriday';
import Events4 from './component/Events/MondayMatter';
import Events5 from './component/Events/MaterialsUnlocked';
import Blog from './Blog'
import Blog1 from './Blog1'
import Blog2 from './Blog2'
import Mritika from './Events'
import AboutIncersChapter from './AboutIncersChapter';
import Mritika1 from './Mrittika1';
import './App.css';


const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/members" component={Members} />
      <Route exact path="/members1" component={Members1} />
      <Route exact path="/members2" component={Members2} />
      <Route exact path="/members3" component={Members3} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/events1" component={Events1} />
      <Route exact path="/events2" component={Events2} />
      <Route exact path="/events3" component={Events3} />
      <Route exact path="/events4" component={Events4} />
      <Route exact path="/events5" component={Events5} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog1" component={Blog1} />
      <Route exact path="/blog2" component={Blog2} />
      <Route exact path="/aboutincerschapter" component={AboutIncersChapter} />
      <Route exact path="/mritika" component={Mritika} />
      <Route exact path="/mritika1" component={Mritika1} />
    </>);
}

export default App;

