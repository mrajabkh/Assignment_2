import React from 'react';
//import "./styling.css";


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
        <header className="masthead" style= {{backgroundImage: "url('MH370.png')" }}>
    <div className="px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                <div>
                    <h1>The <span className = "white">My</span>sterious Disapearance of the MH370 </h1>
                </div>
            </div>
        </div>
    </div>
        </header>
    <br></br>
    <p><span className = "first">M</span>alaysian airlines flight 370 set off on March 8th 2014 for what was supposed to be just another routine flight from Kuala Lampur to Beijing. The flight was unremarkable for the first 40 minutes while still in Malaysian airspace, however right before leaving Malaysian airspace.
         The flight had one last communication with Malaysian ATC, with ATC radioing in to pass off the flight to Vietnamese ATC. The captain then responded with "Good night Malaysian three-seven-zero" which isn't that unusual. 
         However, right after entering Vietnamese airspace the flight suddenly dissapeared off the radar. It was later found out that the flight had never made contact with Vietnamese ATC. 
         Not only that but using satellites it was found out that they suddenly veered off course and started to head South, with the reason remaining unknown to this day. Some say it could have been a system failure however according to the Malaysian Government's safety report
        it was likely deliberate. </p>
    <br></br>
    <h2>Possible explanations</h2>
    <p>There have been hundered upon hundered of theories of the explanation of the disapearance of the MH370 with some being more credible than others. Yet, experts cannot seem to agree on a single one as none come close to explaining what happened.
        Some experts believe it was a terrorist attack but with no wreckage of the plain only small debris that washed up 1-2 years later it is hard to say. Some say it was hypoxia from rapid decompression similar to what Helios 522 suffered in Greece. But without the plane's wreckage 
        it is hard to confirm one specific theory. Some people say it was aliens, what proof they have? Seemingly just a simple fear of the unknown.
    </p>
    <br></br>
    <h2>How it affected the airline industry</h2>
    <p>After this myterious incident, the International Civil Aviation Organisation ordered all airlines to install live tracking equipment in order to keep track of these planes in such events, espescially those over the ocean. 
        It is said that aircraft manufacturers are also developing black boxes that eject and float automatically when the plane hits water.</p>
    <br></br>
    <h2>Want to find out more?</h2>
    <p>Watch S14 E11 of Mayday(Documentary TV series)</p>
    

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
