import React from 'react'
import './App.css';
import ImageSlider1 from './component/ImageSlider1';
import { SliderData } from './component/SliderData';

function App1() {
  return <ImageSlider1 slides={SliderData} />;
}

export default App1
