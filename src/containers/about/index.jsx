import React from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { personalData } from "./utils";
import "./style.scss";
const About = () => {
    return (
        <div className="about" id="about">
            <PageHeaderContent
                headerText="About Me" />

            <div className="about_content">
                <h3>
                    Mern Stack Developer:
                </h3>
                <p>
                    I'm a Fresher(Engineering 2021 Batch) and a passionate Full Stack Developer cerified in both Front-End and Back-End technologies. I have developed a couple
                    of high-quality and exceptional projects using the MERN stack and all the mordern tools and techniques. <br /> Looking for job opportunities and am eager to join
                    a good company to showcase my skills,gain Experience, and excel as a Developer
                </p>
                <h3 className="personalContent">Personal Information: </h3>
                <ul>
                    {
                        personalData.map((item, key) => (
                            <li key={key}>
                                <span className="title">{item.label}</span>
                                <span className="value">{item.value}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div >
    );
};

export default About;