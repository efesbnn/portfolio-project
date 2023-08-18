import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const fullName = 'Name and surname';
  const aboutText = 'Hello! I am name surname. Lorem ipsum dolor sit amet...';
  const projects = [
    { title: 'Proje 1', description: 'Lorem ipsum dolor sit amet...' },
    { title: 'Proje 2', description: 'Lorem ipsum dolor sit amet...' },
    { title: 'Proje 3', description: 'Lorem ipsum dolor sit amet...' },
    { title: 'Proje 4', description: 'Lorem ipsum dolor sit amet...' },
  ];

  return (
    <div className="App">
      <Header name="Name" surname="Surname" />
      <div className="container">
        <About aboutText={aboutText} />
        <Projects projects={projects} />
      </div>
      <Footer fullName={fullName} />
    </div>
  );
}

export default App;
