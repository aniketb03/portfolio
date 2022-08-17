import React from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { skillsData } from "./utils";
import { Line } from "rc-progress";
import "./style.scss"
const Skills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText="My Skills" />
            <div className="skills_content-wrapper">
                {
                    skillsData.map((item, key) => (
                        <div key={key} className="skills_content-wrapper_incontent">
                            <h3 className="skills_content-wrapper_incontent_cat-text">{item.label}</h3>
                            <div>
                                {
                                    item.data.map((dataItem, index) => (
                                        <div className="progressbar-wrapper" key={index}>
                                            <p>
                                                {dataItem.skillName}
                                                <Line
                                                    percent={dataItem.per}
                                                    strokeWidth="2"
                                                    strokeColor="var(--selected-theme-main-color)"
                                                    strokeLinecap="square"
                                                    trailWidth="2" />
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};

export default Skills;