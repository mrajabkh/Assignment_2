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
        <header className="masthead" style= {{backgroundImage: "url('TW2UA.jpg')" }}>
    <div className="px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                <div>
                    <h1>Collision over the<span className = "white"> Grand Canyon</span></h1>
                </div>
            </div>
        </div>
    </div>
        </header>


    <br></br>
    <p><span className = "first">T</span>wo flights. TWA 2 and United Airlines 718. Both had just taken off from Los Angeles international airport on June 30th 1956. One headed to Chicago the other to Kansas city until their unfortunate paths crossed and the planes collided over the Grand Canyon killing all 128 passengers on both planes.
       Unfortunately, this was the early days of aviation, we had nowhere near as much safety measures as we do today so fear not as an accident of this sort is next to impossible in this day and age.</p>
    <br></br>
    <h2>How it affected the airline industry</h2>
    <p>This crash led to the monumental decision to from an FAA in order to oversee aerial safety. Also leading to a $250 million upgrade of the ATC system which was a huge upgrade as this isn't accounting for inflation.
      The FAA was crucial in overseeing air safety as for example their decision to require small aircraft to carry transponders and position/altitude broadcasters after an incident where a small aircraft wandered into the wrong area striking another plane killing 86 people.
       Since the FAA decision no small aircraft has ever collided with an Airliner in the US.
    </p>
    <br></br>
    <h2>Want to find out more?</h2>
    <p>Watch S12 E6 of Mayday(Documentary TV series)</p>
    
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
