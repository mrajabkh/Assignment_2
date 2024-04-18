import React from 'react';


export default function Main() {

let x = 10;
 let mainContent = (
    <p>placeholder</p>
 );
  while(x>3 || x < 1){
      x = Math.random();
      x*=10;
      x = Math.trunc(x);
  }
  console.log(x);
  if(x == 1){
     mainContent = (
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
        <header className="masthead" style={{backgroundImage: "url('AF447.jpg')" }}>
        <div className="px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    <div>
                        <h1>AF447<span className = "white"></span></h1>
                    </div>
                </div>
            </div>
        </div>
      </header>
  
  
      
          <br></br>
          <p><span className = "first">A</span>ir France 447 was once aviation's biggest mysteries as it just seemingly vanished during it's flight from Rio to Paris.
             However, 2 years later it's wreckage was finally found bringing the mystery to a close and finally revealing the unfortunate cause of 228 deaths.</p>
          <br></br>
          <h2>Cause</h2>
          <p>The flight entered an area of sever thunderstorm activity causing it's speed sensors to become iced over leading to the autopilot disengaing.
            The pilots proceeded to react incorrectly leading to the flight nosediving into the water. 
            While the flight was a state of the art no amount of machinery can account for human error.
          </p>
          <br></br>
          <h2>How it affected the airline industry</h2>
          <p>This crash led to a lot of questions about the pilots training and thus Pilots were retrained and taught not to rely too much on automation in case it goes awry.</p>
          <br></br>
          <h2>Want to find out more?</h2>
          <p>Watch S12 E13 of Mayday(Documentary TV series)</p>
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
  }
  else if(x == 2){
    mainContent = (
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
        <header className="masthead" style={{backgroundImage: "url('AC797.png')"}}>
        <div className="px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    <div>
                        <h1>Air Canada 797<span className = "white"></span></h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
  
  
      
          <br></br>
          <p><span className = "first">A</span>ir Canada 797, a DC-9 carring 46 people flying at 33,000 feet on what was supposed to be a routine flight from Dallas to Toronto on June 2nd 1983 till things turned awry.
             First signs of trouble were when wisps of smoke slithered out the rear lavatory which soon turned into black smoke that started to fill the cabin.
             The plane had to begin its emergency descent but things were getting tough for the pilot who was struggling to see the measurements on his instruments due to the smoke.
             Thankfully, skilled as he is he still managed to make the landing in Cincinatti. Unfortunately, the opening of the cabin doors caused a flashfire in which 23 lives were lost and
             the origin of the fire could not be determmined due to the flashover.
          </p>
          <br></br>
          <h2>How it affected the airline industry</h2>
          <p>As a result of this unfortunate accident, the FAA mandated that lavatories now have smoke detectors and automatic fire extuingishers.
            Planes were then equipped with floor lighting so passengers could find their way to the exit even in dense smoke. 
            Planes built after 1988 are also built to be more resistant to flames thankfully.
          </p>
          <br></br>
          <h2>Want to find out more?</h2>
          <p>Watch S4 E3 of Mayday(Documentary TV series)</p>
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
  }
  else if(x == 3){
    mainContent = (
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
        <header className="masthead" style={{backgroundImage: "url('DHL.webp')"}}>
          <div className="px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-md-10 col-lg-8 col-xl-7">
                      <div>
                          <h1><span className = "white">Complacency at Air Traffic Control</span></h1>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    
        <br></br>
        <p><span className = "first">D</span>HL flight 611 took off from Bahrain heading to Brusells and Bashkirian Airlines Flight 2973 from Moscow to Barcelona.
           It would be unfortunate mistake that the fate of these two flights intertwined in Germain airspace over Überlingen. The collision killed all members of both flights reaching a total of 71 lives lost, thankfull DHL is a cargo shipping company and thus was not carrying as many passengers as commercial airlines.
          The two flights were heading towards each other, one needed to move. Flight 611 followed their traffic collision avoidance system, TCAS for short and began to descend. However, Flight 2973 folled instructions from ATC ignoring their TCAS and also began to descend. At the time there was only one air traffic controller on duty as his co-worker had taken a coffee break. Truly unfortuntate.</p>
        <br></br>
        <h2>How it affected the airline industry</h2>
        <p>There wasn't as much of an effect as other crashes however it did serve as a not so gentle reminder that in the Aviation industry, mistakes or complacency leads to the loss of life.</p>
        <br></br>
        <h2>Want to find out more?</h2>
        <p>Watch S2 E4 of Mayday(Documentary TV series).</p>
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
  }

  return mainContent;
}
