import { useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  IoCodeSlash,
  IoLogoAndroid,
  IoLogoApple,
  IoLogoCss3,
  IoLogoFirebase,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoReact,
  IoTerminalOutline,
} from "react-icons/io5";
import "./App.css";
import TypingEffect from "./Components/TypingEffect";
import { PiDesktopLight } from "react-icons/pi";
import { CiServer, CiMobile2 } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpo, SiExpress } from "react-icons/si";

const SkillCard = ({ title, num, lista = [] }) => {
  const icons = [PiDesktopLight, CiServer, CiMobile2, IoTerminalOutline];
  const IconComp = icons[num];
  return (
    <div className="abtMe_card card">
      <IconComp size={50} color="#00F0FF" />

      <h3>{title}</h3>
      <br />
      <ol className="skillEnum">
        {lista.map((v, _) => (
          <li>{v}</li>
        ))}
      </ol>
      <br />
    </div>
  );
};

const ProjectCard = ({ title, num = 0, description, lista = [] }) => {
  const icons = [PiDesktopLight, CiServer, CiMobile2, IoTerminalOutline];
  const IconComp = icons[num];

  return (
    <div className="projectCard card">
      <div className="imgP">
        <IconComp size={100} color="#000" />
      </div>
      <div className="continut">
        <h3>title</h3>
        <br />
        <p>
          Proident velit et ullamco id. Sint deserunt qui ullamco in ex do
          voluptate sit sint est nulla. Velit mollit occaecat aliqua eiusmod do.
          Eiusmod qui qui eu laboris ad eiusmod incididunt velit qui
          exercitation. Deserunt mollit minim commodo culpa non occaecat nulla
          quis exercitation cillum dolor duis. Velit Lorem veniam Lorem aute.
          Voluptate fugiat et commodo reprehenderit amet.
        </p>
      </div>
    </div>
  );
};

const FormContact = () => {
  return (
    <form>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          required=""
        />
        <label for="name" class="form__label">
          Your Name
        </label>
      </div>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          required=""
        />
        <label for="name" class="form__label">
          Email Address
        </label>
      </div>
      <div class="form__group field">
        <textarea class="form__field" placeholder="Name" required="" />
        <label for="name" class="form__label">
          Your Message
        </label>
      </div>
      <br />
      <div className="btnContainer">
        <button class="button">
          <span class="text">send message</span>
        </button>
      </div>
    </form>
  );
};

export default function App() {
  const [init, setInit] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const homeRef = useRef(null);
  const abtMeRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setScrollPosition(position);
    console.log(position);
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      fullScreen: { enable: false },
      particles: {
        color: {
          value: "#00f0ff",
        },
        links: {
          color: "#00f0ff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
          attract: {
            enable: false,
            rotate: {
              x: 600,
              y: 1200,
            },
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },

        size: {
          value: { min: 1, max: 5 },
        },
      },

      detectRetina: true,
    }),
    []
  );

  const projects = [
    {
      title: "Online store",
      link: "flower-portofoliu-project.netlify.app",
      description:
        "A fully functional e-commerce website concept for a boutique flower shop. This project features a complete user journey, from browsing products and adding items to a cart to a simulated checkout process.",
    },
  ];

  const myWords = [
    "Website Development",
    "Web App Development",
    "Mobile App Development",
    "General Software",
  ];

  if (init) {
    return (
      <div className="App" onScroll={handleScroll}>
        <nav>
          <ol className="navList" style={{ listStyle: "none" }}>
            <li
              onClick={() =>
                homeRef.current.scrollIntoView({ block: "center" })
              }
            >
              Home
            </li>
            <li
              onClick={() =>
                abtMeRef.current.scrollIntoView({ block: "center" })
              }
            >
              About Me
            </li>
            <li
              onClick={() =>
                skillRef.current.scrollIntoView({ block: "center" })
              }
            >
              Skills
            </li>
            <li
              onClick={() =>
                projectRef.current.scrollIntoView({ block: "center" })
              }
            >
              Projects
            </li>
            <li
              onClick={() =>
                contactRef.current.scrollIntoView({ block: "center" })
              }
            >
              Contact
            </li>
          </ol>
          <div className="scrollbar">
            <div
              className="aiaDinScrollBar"
              style={{ width: `${scrollPosition}%` }}
            />
          </div>
        </nav>
        <nav className="navMobile">
          <div>
            <IoMenu size={30} onClick={() => setShowMenu((e) => !e)} />
          </div>
          <div className="scrollbar">
            <div
              className="aiaDinScrollBar"
              style={{ width: `${scrollPosition}%` }}
            />
          </div>
          {showMenu && (
            <div className="navMobileDrop">
              <ol style={{ listStyle: "none" }}>
                <li
                  onClick={() => {
                    setShowMenu((e) => !e);
                    homeRef.current.scrollIntoView({ block: "center" });
                  }}
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    setShowMenu((e) => !e);
                    abtMeRef.current.scrollIntoView({ block: "center" });
                  }}
                >
                  About Me
                </li>
                <li
                  onClick={() => {
                    setShowMenu((e) => !e);
                    skillRef.current.scrollIntoView({ block: "center" });
                  }}
                >
                  Skills
                </li>
                <li
                  onClick={() => {
                    setShowMenu((e) => !e);
                    projectRef.current.scrollIntoView({ block: "center" });
                  }}
                >
                  Projects
                </li>
                <li
                  onClick={() => {
                    setShowMenu((e) => !e);
                    contactRef.current.scrollIntoView({ block: "center" });
                  }}
                >
                  Contact
                </li>
              </ol>
            </div>
          )}
        </nav>
        <section className="hero" ref={homeRef}>
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
          <div className="titleDiv">
            <h1>
              Full Stack Developer
              <br />
              <span>Crafting Modern Web Applications</span>
            </h1>
            <div className="textAnimContainer">
              <TypingEffect
                words={myWords}
                typeSpeed={100}
                deleteSpeed={50}
                pauseTime={1500}
              />
            </div>
          </div>
          <div className="circleDiv">
            <div className="circle">
              <div className="insideCircleDiv">
                <IoCodeSlash size={90} color="#00f0ff" />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="abtMe" ref={abtMeRef}>
          <h2 className="abtMe_title">
            About <span>Me</span>
          </h2>
          <div className="line" />

          <div className="abtMe_cont">
            <div className="abtMe_para card">
              <p>
                &nbsp;&nbsp;&nbsp;I’m a programmer with four years of experience
                developing applications across web, mobile, and desktop
                environments. I specialize in JavaScript technologies, working
                extensively with Node.js, React, Express.js, and React Native
                (Expo) to build clean, scalable, and high-performing
                applications. Whether I’m creating a mobile app, designing a
                dynamic web interface, or developing a backend service, I focus
                on writing efficient code and delivering seamless user
                experiences.
                <br /> <br /> &nbsp;&nbsp;&nbsp;Beyond web and mobile
                development, I enjoy building desktop applications in C#, as
                well as creating servers and automation tools using JavaScript
                and Python. I’m passionate about crafting user-friendly
                interfaces and thoughtful design flows, ensuring that the
                software I build feels intuitive and enjoyable to use. I’m
                always exploring new technologies, refining my skills, and
                looking for opportunities to solve meaningful problems through
                code and design.
              </p>
            </div>
            <div className="abtMe_det">
              <div className="abtMe_card card">
                <PiDesktopLight size={50} color="#00F0FF" />
                <h3>Web Developement</h3>
                <p>
                  Modern, responsive websites and web applications with
                  cutting-edge technologies.
                </p>
              </div>
              <div className="abtMe_card card">
                <CiMobile2 size={50} color="#00F0FF" />
                <h3>Mobile Apps</h3>
                <p>
                  Cross-platform mobile applications with native performance and
                  UX.
                </p>
              </div>
              <div className="abtMe_card card">
                <CiServer size={50} color="#00F0FF" />
                <h3>API Developement</h3>
                <p>
                  RESTful and GraphQL APIs with proper documentation and
                  security.
                </p>
              </div>
              <div className="abtMe_card card">
                <IoTerminalOutline  size={45} color="#00F0FF" />
                <h3>Cloud Services & Databases  </h3>
                <p>
                  Firestore, Google Cloud — managing cloud-hosted databases, authentication, and scalable infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="abtMe" ref={skillRef}>
          <h2 className="abtMe_title">
            Technical <span>Skills</span>
          </h2>
          <div className="line" />

          <div className="skill_det">
            {/* <SkillCard title={"Web Frontend"} num={0} lista={["React", "Next.js", "HTML5", "Javascript", "CSS3"]} />
            <SkillCard title={"Backend/API"} num={1} lista={["Node.js", "Express", "REST", "Firebase", "Python"]} />
            <SkillCard title={"Mobile"} num={2} lista={["React Native", "Expo", "Android", "iOS"]} />
            <SkillCard title={"Cloud & DB"} num={3} lista={["Firestore", "Google Could"]} /> */}
            <div className="langCard">
              <IoLogoJavascript color="yellow" size={50} />
              <p>Javascript</p>
            </div>
            <div className="langCard">
              <IoLogoNodejs color="#00c950" size={50} />
              <p>Node.js</p>
            </div>
            <div className="langCard">
              <IoLogoReact color="#08d5fe" size={50} />
              <p>React</p>
            </div>
            <div className="langCard">
              <SiExpo color="#08d5fe" size={50} />
              <p>Expo</p>
            </div>
            <div className="langCard">
              <SiExpress color="#fff" size={50} />
              <p>Express.js</p>
            </div>
            <div className="langCard">
              <IoLogoHtml5 color="orange" size={50} />
              <p>HTML5</p>
            </div>
            <div className="langCard">
              <IoLogoCss3 color="#08d5fe" size={50} />
              <p>CSS3</p>
            </div>
            <div className="langCard">
              <IoLogoFirebase color="orange" size={50} />
              <p>Firebase</p>
            </div>
            <div className="langCard">
              <IoLogoGithub color="#fff" size={50} />
              <p>Git</p>
            </div>
            <div className="langCard">
              <IoLogoPython color="#3c79ad" size={50} />
              <p>Python</p>
            </div>
            <div className="langCard">
              <IoLogoAndroid color="green" size={50} />
              <p>Android</p>
            </div>
            <div className="langCard">
              <IoLogoApple color="#fff" size={50} />
              <p>iOS</p>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="abtMe" ref={projectRef}>
          <h2 className="abtMe_title">
            My <span>Projects</span>
          </h2>
          <div className="line" />
          <br />
          <br />
          <div className="project_det">
            <ProjectCard />
            <ProjectCard num={1} />
            <ProjectCard num={2} />
            <ProjectCard />
            <ProjectCard num={1} />
            <ProjectCard num={2} />
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="abtMe" ref={contactRef}>
          <h2 className="abtMe_title">
            Get In <span>Touch</span>
          </h2>
          <div className="line" />

          <FormContact />
        </section>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }

  return <></>;
}
