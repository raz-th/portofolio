import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { IoCodeSlash } from "react-icons/io5";
import "./App.css"
import TypingEffect from "./Components/TypingEffect";
import { PiDesktopLight } from "react-icons/pi";
import { CiServer, CiMobile2 } from "react-icons/ci";
import { IoTerminalOutline } from "react-icons/io5";



const SkillCard = ({ title, num, lista = [] }) => {
  const icons = [PiDesktopLight, CiServer, CiMobile2, IoTerminalOutline]
  const IconComp = icons[num]
  return (
    <div className="abtMe_card card">
      <IconComp size={50} color="#00F0FF" />

      <h3>{title}</h3>
      <br/>
      <div className="skillEnum">
        {
          lista.map((v, _) => <p>{v}</p>)
        }
      </div>
            <br/>
    </div>
  )
}


export default function App() {
  const [init, setInit] = useState(false);
  const [typingValue, setTypingValue] = useState("")

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
      fpsLimit: 120,
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
              y: 1200
            }
          }
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
    [],
  );

  const text = "Website Development"
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypingValue(text.slice(0, text + 1));
      index++;
      if (index === text.length) clearInterval(interval)
    }, 100);
    return () => clearInterval(interval)
  }, [text])

  const myWords = [
    "Website Development",
    "Web App Development",
    "Mobile App Development",
    "General Software"
  ];

  if (init) {
    return (
      <div className="App">
        <nav>
          <div>
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </nav>
        <section className="hero">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}

          />
          <div className="titleDiv">
            <h1>Full Stack Developer<br /><span>Crafting Modern Web Applications</span></h1>
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
        <br /><br /><br /><br /><br />
        <section className="abtMe">
          <h2 className="abtMe_title">About <span>Me</span></h2><div className="line" />
          <br /><br />
          <div className="abtMe_cont">
            <div className="abtMe_para card">
              <p>Proident tempor excepteur quis occaecat laborum veniam adipisicing velit. Fugiat officia tempor amet ad aute dolore ut tempor enim adipisicing minim cillum nostrud ipsum. Proident magna anim ut consectetur ea nostrud cupidatat dolore esse dolore. Nulla sunt voluptate culpa nisi consequat sint eu nulla fugiat Lorem.

                Incididunt id sunt et labore ut eiusmod mollit fugiat do eu quis veniam mollit ex. Exercitation aliqua nostrud sint consectetur sunt eiusmod. Dolor nulla eiusmod ut fugiat duis exercitation pariatur laborum officia sunt consectetur aliquip. Laboris elit tempor consectetur enim ipsum. Nostrud Lorem commodo minim esse consectetur officia do ea officia. Sunt exercitation duis ex laboris. Ea id magna culpa velit in exercitation cillum adipisicing do veniam qui cillum.

                Aliquip aliquip velit ad amet ipsum Lorem enim sint. Eu officia duis excepteur dolore laborum ea occaecat sint in ipsum elit aute amet minim. Nulla ex cupidatat cillum Lorem deserunt et ea adipisicing commodo voluptate tempor.

                Veniam cupidatat incididunt amet anim dolore occaecat exercitation id exercitation. Duis ea enim aliquip excepteur voluptate aliquip sint voluptate qui. Consectetur duis velit elit culpa magna proident non laboris duis nostrud occaecat. Consequat sint voluptate deserunt irure aute.</p>
            </div>
            <div className="abtMe_det">
              <div className="abtMe_card card">
                <PiDesktopLight size={50} color="#00F0FF" />
                <h3>Web Developement</h3>
                <p>Modern, responsive websites and web applications with cutting-edge technologies.</p>
              </div>
              <div className="abtMe_card card">
                <CiMobile2 size={50} color="#00F0FF" />
                <h3>Mobile Apps</h3>
                <p>Cross-platform mobile applications with native performance and UX.</p>
              </div>
              <div className="abtMe_card card">
                <CiServer size={50} color="#00F0FF" />
                <h3>API Developement</h3>
                <p>RESTful and GraphQL APIs with proper documentation and security.</p>
              </div>

            </div>
          </div>
        </section>
        <br /><br /><br /><br /><br />
        <section className="abtMe">
          <h2 className="abtMe_title">Technical <span>Skills</span></h2><div className="line" />
          <br /><br />
          <div className="skill_det">
            <SkillCard title={"Web Frontend"} num={0} lista={["React", "Next.js", "HTML5", "Javascript", "CSS3"]} />
            <SkillCard title={"Backend/API"} num={1} lista={["Node.js", "Express", "REST", "Firebase", "Python"]} />
            <SkillCard title={"Mobile"} num={2} lista={["React Native", "Expo", "Android", "iOS"]} />
            <SkillCard title={"Cloud & DB"} num={3} lista={["Firestore", "Google Could"]} />


          </div>
        </section>
        <br /><br /><br /><br />
      </div>
    );
  }

  return <></>;
};