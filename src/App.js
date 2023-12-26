import React from 'react';
import { Route } from 'react-router';
import Home from '../src/component/Home/Home';
import About from '../src/component/About/About';
import Contact from './component/ContactUs/ContactUs';
import Members23 from './component/Member/Member2023'
import Members22 from './component/Member/Member2022';
import Members24 from './component/Member/Member2024';
import Events from './component/Events/PlacementDiary';
import Events1 from './component/Events/PresentationComprtitions';
import Events2 from './component/Events/Webinar&TechnicalSession';
import Events3 from './component/Events/FlashbackFriday';
import Events4 from './component/Events/MondayMatter';
import Events5 from './component/Events/MaterialsUnlocked';
import Mritika23 from './component/IncersChapter/Mrittika2023'
import AboutIncersChapter from './component/IncersChapter/AboutIncersChapter';
import Mritika19 from './component/IncersChapter/Mrittika2019';

const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/members22" component={Members22} />
      <Route exact path="/members23" component={Members23} />
      <Route exact path="/members24" component={Members24} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/events1" component={Events1} />
      <Route exact path="/events2" component={Events2} />
      <Route exact path="/events3" component={Events3} />
      <Route exact path="/events4" component={Events4} />
      <Route exact path="/events5" component={Events5} />
      <Route exact path="/aboutincerschapter" component={AboutIncersChapter} />
      <Route exact path="/mritika" component={Mritika23} />
      <Route exact path="/mritika1" component={Mritika19} /> 
    </>);
}

export default App;

