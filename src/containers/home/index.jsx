import React from "react";
import { Animate } from "react-simple-animate"
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./style.scss";
const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home_text-wrapper">
                <h1>
                    Hello, I'm Aniket.
                    <br />
                    MERN Stack Developer.
                </h1>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: "translateY(600px)"
                }}
                end={{
                    transform: "translateX(0px)"
                }}
            >
                <div className="contact-me">
                    <div className="contact-me_buttons">
                        <button>Hire Me</button>
                        <a>Download Resume</a>
                    </div>
                    <div className="contact-me_socialButtons">
                        <FaLinkedin size={32} />
                        <FaFacebook size={32} />
                        <FaTwitter size={32} />
                        <FaInstagram size={32} />
                    </div>
                </div>
            </Animate>
        </section >
    );
};

export default Home;