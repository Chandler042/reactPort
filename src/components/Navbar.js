import React from 'react';

import '../styles/Header.css';


function Navbar() {
  return (
    <body>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1" style={{fontSize:"xx-large"}}>Chandler Organ</span>
                <div className="btn-group">
                    <button className="btn btn-secondary btn-lg dropdown-toggle mr-auto" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Search
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#About-Myself">About Myself</a></li>
                        <li><a className="dropdown-item" href="#Work">Work</a></li>
                        <li><a className="dropdown-item" href="#contact-info">Contact Info</a></li>
                    </ul>
                </div>
            </div>
            
        </nav>
            <div id="portImage">
                <img src="images/dancing.jpg" className="rounded float-left mx-auto" alt="Picture of myself dancing at a wedding"/>
            </div>
        <main>
            <section id="About-Myself" className="myself"></section>
                <h1>About Myself</h1>
                <p className="text-left">
                    I am a 25 year old full-stack web developer living in Atlanta, GA. My efficiency, ability to adapt, and be coached are qualities that help me to excel at building and maintaining websites.
                    I started my education as a Chemist, completing a Bachelor's of Fermentation Science from Appalachian State University in 2019. After university, I worked at an Environmental Company called Pace Analytical, which I currently work and have been here for the past one and half years.
                    I will receive my certificate in full-stack web development fjrom a coding bootcamp at Georgia Tech in July 2021 and want to explore and further enhance my abilities learned in coding. I enjoyed the bootcamp and now ready to start a new journey/career in the industry.
                    My other interests include: playing Basketball and Soccer, video games, and always cheering on my favorite teams to push for a Finals Championship.
                </p>
            <section id="Work" className="work"></section>
                <h2>Work</h2>
                <section>
                    <div className="row">
                        <div className="column100">
                            {/* <!-- 100% width--> */}
                            <p>CSS/HTML</p>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="column50">
                            {/* <!-- 50%--> */}
                            <p>Jagex Script</p>
                        </div>
                        <div className="column51">
                            {/* <!-- 50% --> */}
                            <p>LED Column</p>
                        </div>
                    </div>
                  </section>
        </main>

        <footer id="contact-info">
            <h4>Contact Information</h4>
            <p>
                Chandler042@gmail.com
            </p>
            <p>
                404-556-2416
            </p>
        </footer>


    </body>
  );
}

export default Navbar;
