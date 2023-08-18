import React from 'react';

const About = ({ aboutText }) => {
  return (
    <section className="section">
      <h2>About me</h2>
      <p>{aboutText}</p>
    </section>
  );
}

export default About;
