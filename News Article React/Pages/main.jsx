import React from 'react';


export default function Main() {

  const mainContent = (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="/" >Home</a>
                <button style = {{color: "black" }}className = "navbar-toggler" type="button">Contact</button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/Contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header className="masthead" style={{backgroundImage: `url('./plane-bg.jpg')` }}>
    <div className="px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                <div>
                    <h1>Fateful Flights</h1>
                    <h3 className= "text-center">Plan crashes that shaped <span className= "white">the skies</span> </h3>
                </div>
            </div>
        </div>
    </div>
  </header>
  <div className="container px-4 px-lg-5">
    <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="post-preview">
                <a href="/MH370" >
                    <h2>The dissapearance of MH370</h2>
                    <h4>Where is it now?</h4>
                </a>
                <p>Posted by Fateful Flights on December 28th, 2023</p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
                <a href="/KLM">
                    <h2>Aviation's Deadliest Mistake</h2>
                    <h4>How miscommunication claimed the lives of 583.</h4></a>
                <p>Posted by Fateful Flights on January 3rd, 2024</p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
                <a href="/TW2UA">
                    <h2>Collision over the Grand Canyon</h2>
                    <h4>The chance of crashing midair is low, but not zero.</h4></a>
                <p>Posted by Fateful Flights on January 7th, 2024</p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
                <a href="/Random">
                    <h2>Surprise me.</h2>
                    <h4>Feeling indecisive? Click me and get a random crash report.</h4></a>
                <p>Posted by Fateful Flights on ???</p>
            </div>
            <hr className="my-4" />
        </div>
    </div>
  </div>

  
  <footer className="border-top">
            <br></br>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="https://en-gb.facebook.com/people/Muhammad-Rajab/pfbid02McpG8Yj1nQJey8KBEvQYY7htdHuaHsWuEx7yoQ5cXHf8zkjrtTMGD3VTSKZcgLWzl/">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/muhammad-rajab-ahsen-9421bb299/">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/mrajabkh">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div className ="network">Have a story? Get in touch.</div>
                        <div className="copyright">Copyright &copy; The Durham Times 2023</div>
                    </div>
                </div>
            </div>
        </footer>
  </div>
  );

  return mainContent;
}
