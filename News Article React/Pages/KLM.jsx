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
        <header className="masthead" style={{backgroundImage: "url('KLM.png')" }}>
    <div className="px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                <div>
                    <h1><span className= "white">Aviation's Deadliest Mistake</span></h1>
                </div>
            </div>
        </div>
    </div>
</header>
    <br></br>
    <p><span className= "first">T</span>he misunfortunes of KLM flight 4805 and Pan Am flight 1736. Neither flight was supposed to be landing on the island Tenerife in the Canary Islands that March 27th 1977. 
      However due to a bombing at their original destination of Los Palmas in Gran Canaria both flights were redirected towards Tenerife.
      Another series of misunfortunate miscommunications happened between ATC and both flight crews leading to KLM starting takeoff with Pan Am still on the runway unseen due to the fog.
      As the KLM plane began to lift off the tarmac the lower part of the plane collided with the Pan Am flight turning off the runway.
      leading to the deaths of the entire KLM flight and a number of the Pan Am flight also losing their lives, leading to a total loss of 583 lives.
      The highest amount aviation has ever seen from one incident.</p>
    <br></br>
    <h2>How it affected the airline industry</h2>
    <p>Subsequently, sweeping changes were made to the international airline regulations to prevent this sort of horrific disaster again.
      All control towers and flight crews worldwide were now required to use standardized English phrases. Not only that but the hierarchy between crew members was deemphasized and decision making was made by mutual agreement.
      This has now become standard practice in today's age.</p>
    <br></br>
    <h2>Want to find out more?</h2>
    <p>Watch S16 E3 of Mayday(Documentary TV series) or read the transcript between the flight crews and ATC.</p>
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
