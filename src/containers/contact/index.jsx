import React from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import "./style.scss";
const Contact = () => {
    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="Contact Me" />
            <div className="contact_content">
                <h3 className="contact_content_headerText"> Let's Talk</h3>
                <div className="contact_content_form">
                    <div className="contact_content_form_control">
                        <div className="nameWrapper">
                            <input name="name" className="inputname" type="" text />
                            <label htmlFor="name" className="namelabel">Name</label>
                        </div>
                        <div className="emailWrapper">
                            <input name="email" className="inputEmail" type="" text />
                            <label htmlFor="email" className="emaillabel">Email</label>
                        </div>
                        <div className="descWrapper">
                            <textarea name="desc" className="inputdesc" type="text" cols="30" rows="5" style={{ resize: "none" }} />
                            <label htmlFor="desc" className="desclabel">Description</label>
                        </div>
                    </div>
                    <button>Submit</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;