import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-heading">
                    <h1>hi, i like to build things and teach others</h1>
                </div>
                <div className="about-image">
                    <img src="https://placehold.co/400" alt="Portrait picture" />
                </div>
                <div className="about-subheading">
                    <h2>full stack engineer</h2>
                </div>
            </div>
        </section>
    );
};

export default About;