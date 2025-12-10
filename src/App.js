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
import { getProiecte } from "./firebase";
import { MdOutlineOpenInNew } from "react-icons/md";

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

const con = `&ensp;This project is a sophisticated e-commerce webstore built as a robust Single Page Application (SPA). 
  It serves as a comprehensive portfolio piece demonstrating the full range of skills required for modern online retail development. 
  Hosted on Netlify, the application delivers a seamless and highly responsive user experience, allowing customers to easily browse 
  a product catalog, utilize a dynamic shopping cart, and complete a secure checkout process. The project focuses on handling complex 
  transactional logic and providing an aesthetically pleasing, nature-inspired design.
          <br/>&ensp;
          +*Key Features:*+
          <ol>
            <li>*Dynamic Product Catalog:* Implements data-driven display of various floral categories and arrangements, featuring detailed product pages and high-resolution imagery.</li>
            <li>*Full Shopping Cart Flow:* Provides complete transactional logic for adding, removing, and updating product quantities before purchase finalization.</li>
            <li>*Responsive Checkout:* Features a clear, multi-step process for secure order placement, capturing customer and shipping information reliably.</li>
            <li>*Intuitive UI/UX:* A clean, flower-themed design optimized for easy navigation, product visualization, and smooth interactivity across all devices.</li>
          </ol>
          `;
const techT = [
  "*Deployment:* Netlify for fast, globally distributed hosting and Continuous Integration/Continuous Deployment (CI/CD).",
  "*Frontend:* Modern JavaScript Framework/Library (React)",
  "*Backend & Database:* Google Firebase (specifically Firestore for data persistence and Authentication for user management).",
  "*Deployment & Hosting:* Netlify (Leverages CI/CD for reliable and high-speed global delivery).",
];

const TranslateIntoHtml = ({ c }) => {
  let regexBold = /\*(.*?)\*/g;
  let regexH3 = /\+(.*?)\+/g;

  const htmlString = c
    .replace(regexH3, "<h3>$1</h3>")
    .replace(regexBold, "<b>$1</b>");

  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

const ProjectCard = ({ data, num = 0 }) => {
  const icons = [PiDesktopLight, CiServer, CiMobile2, IoTerminalOutline];
  const IconComp = icons[num];

  return (
    <div className="projectCard card">
      <div className="imgP" >
        <IconComp size={100} color="#000" />
      </div>
      <div className="continut">
        <h2>{data.title}</h2>
        <br />
        {<TranslateIntoHtml c={data.description} />}
        <h3>
          <b>Technical Highlights:</b>
        </h3>
        <ol>
          {data?.tehno?.map((v, i) => {
            return <li key={i}>{<TranslateIntoHtml c={v} />}</li>;
          })}
        </ol>
      </div>
      <div
        style={{
          display: "flex",
          gap: 20,
          position: "absolute",
          bottom: 30,
          left: 30,
        }}
      >
        <a
          href={data.link}
          style={{
            color: "#00F0FF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            gap: 5,
            fontWeight: 900,
            fontSize: 20,
          }}
        >
          <MdOutlineOpenInNew />
          Live Demo
        </a>
        <a
          style={{
            color: "#919191ff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            gap: 5,
            fontWeight: 900,
            fontSize: 20,
          }}
          href={data.github}
        >
          <IoLogoGithub />
          Github
        </a>
      </div>
    </div>
  );
};

const FormContact = () => {
  return (
    <form>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          required=""
        />
        <label for="name" className="form__label">
          Your Name
        </label>
      </div>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          required=""
        />
        <label for="name" className="form__label">
          Email Address
        </label>
      </div>
      <div className="form__group field">
        <textarea className="form__field" placeholder="Name" required="" />
        <label for="name" className="form__label">
          Your Message
        </label>
      </div>
      <br />
      <div className="btnContainer">
        <button className="button">
          <span className="text">send message</span>
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

  const [proiecte, setProiecte] = useState(null);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setScrollPosition(position);
    // console.log(position);getProiecte
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  useEffect(() => {
    getProiecte()
      .then((v) => {
        setProiecte(v);
        console.log({ v });
      })
      .catch((v) => console.error(v));
  }, []);

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
              <h2>
                Full-Stack Developer & UX-Focused Engineer
              </h2>
              <p>
                I am a highly versatile programmer with <b>four years of dedicated experience</b> in building clean, scalable, and intuitive applications across web, mobile, and desktop environments.
              </p>

              <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                Core Specializations
              </h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>
                  <b>Full-Stack JavaScript:</b> Node.js, Express.js, and React for high-performing APIs and dynamic web interfaces.
                </li>
                <li>
                  <b>Cross-Platform Mobile:</b> React Native (Expo) for efficient delivery of high-quality mobile applications.
                </li>
                <li>
                  <b>Versatile Engineering:</b> Extending my skills to develop robust desktop applications using <b>C#</b> and custom automation tools and server maintenance with <b>Node.js</b>.
                </li>
              </ul>

              <p style={{ marginTop: '1.5rem' }}>
                My focus is always on <b>thoughtful design flows and optimizing performance</b>, ensuring that the software I build is intuitive and genuinely enjoyable to use. I am constantly exploring new technologies and committed to solving meaningful problems through code and design.
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
                <IoTerminalOutline size={45} color="#00F0FF" />
                <h3>Cloud Services & Databases </h3>
                <p>
                  Firestore, Google Cloud — managing cloud-hosted databases,
                  authentication, and scalable infrastructure.
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
        {proiecte && (
          <section className="abtMe" ref={projectRef}>
            <h2 className="abtMe_title">
              My <span>Projects</span>
            </h2>
            <div className="line" />
            <br />
            <br />
            <div className="project_det">
              {proiecte.map((v, i) => {
                return <ProjectCard data={v} />;
              })}
            </div>
          </section>
        )}
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
