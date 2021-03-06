import React from 'react';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <About />
      <Team />
      <Gallery />
      <Location />
      <Footer/>
    </div>
  );
};

export default App;