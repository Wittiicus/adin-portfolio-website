import React from 'react';
import "../about.css";

function About() {
    return (
        <section id="about">
            <div className="body-container">
                <div className="text-background">
                <div className="text-container">
                    <div className="header-container">
                        <h1 className="about-title">
                            About Me!
                        </h1>
                    </div>
                    <p className="about-description">
                        I am a computer Science and Economics student form McMaster University.
                        I am in my third year, love to solve problems and am always interested in learning about new technologies.
                        This year I 
                    </p>
                    <br></br>
                    <p className='about-description'>
                        I have completed internships at a healthcare startup, Scotiabank, CPP Investments and Citibank. You can find me studying on campus, playing 
                        drop in basketball and travelling to our games this season with the varsity tennis team.
                    </p>
                </div>
            </div>
            <div className="image-container">
                    <div className="right-picture">
                    </div>
                </div>
            </div>
        </section>
    );
}


export default About;