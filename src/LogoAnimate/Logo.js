import React from 'react';
// import "./Logo.css";


const Logo = () => {
    return (
        <div>
            
            <div className="main-container">

                <div className="animate">

                    <div className="front">
                        <h1>REACT JS</h1>
                        <img src="https://www.tatvasoft.com/blog/wp-content/uploads/2022/07/Why-Use-React.jpg" />
                        <p>React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.</p>
                    </div>

                    <div className="back">
                        <h1>ABOUT REACT.JS</h1>
                        <h3> The latest stable version of "React.js is 18.3.1". </h3>
                        <p>React also known as React.js or ReactJS is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta formerly Facebook and a community of individual developers and companies.
                            React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Logo;
