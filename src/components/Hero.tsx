

import React from "react";


function Hero() {
  return (
    <div className="w-full h-[100dvh] relative overflow-hidden">
      <img src="/star-bg-freepik.jpg" id="star-bg" className="unselectable"></img>
      <div className="relative wrapper flex flex-row max-md:flex-col-reverse justify-between max-md:justify-end items-center h-[85%] p-4">
        <div className="flex justify-start flex-col max-w-[60%] [text-shadow:_6px_6px_12px_#000] text-white">
          <h1 className="text-5xl font-bold tracking-wider mt-8">
            Refki Alfarizi
          </h1>
          <p className="text-lg   mt-6">
            
            A Computer Science student at ITB <br/>
            Driven by a passion for software engineering
          </p>

          <h2 className="text-xl mt-3">
            <q><i>Building the future with code</i></q>
          </h2>
        </div>
        <div className="flip-card min-h-[300px]">
          <div className="absolute scale-125 transition-all rounded-full duration-1000 opacity-50 -inset-px bg-gradient-to-r from-blue-950  to-blue-400 blur-2xl group-hover:opacity-75 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <div className="flip-card-inner">
            <div className="flip-card-front">
            </div>
            <div className="flip-card-back">
            </div>
          </div>
        </div>
        <div className="socialCard">
          <a className="socialContainer containerOne" href="https://www.instagram.com/_repkyzzz/" target="_blank">
            <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
            </svg>
          </a>

          <a className="socialContainer containerTwo" href="https://github.com/l0stplains" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="socialSvg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>

          <a className="socialContainer containerThree" href="https://www.linkedin.com/in/refki-alfarizi/" target="_blank">
            <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </a>

          <a className="socialContainer containerFour" href="mailto:refkialfarizi46@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="socialSvg"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            
          </a>
        </div>
        <div id="dark-center"></div>
      </div>
      <img
        src="homepage-wave.svg"
        alt=""
        className="min-h-[100px] min-w-[1150px] w-full absolute -bottom-4 left-0 unselectable"
      />
    </div>
  );
}

export default Hero;
