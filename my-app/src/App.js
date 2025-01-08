// src/App.js
// src/App.js
import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
