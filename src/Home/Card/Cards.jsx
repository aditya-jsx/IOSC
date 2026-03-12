import React, { useState, useEffect } from "react";
import "../../index.css";
import "./Cards.css";
import AOS from "aos";
import "aos/dist/aos.css";

import TechGenesis2025Front from "../../Assets/TechGenesis2025Front.jpg";
import TechGenesis2025Back from "../../Assets/TechGenesis2025Back.png";
import TechGenesisFront from "../../Assets/TechGenesisFront.jpg";
import TechGenesisBack from "../../Assets/TechGenesisBack.jpg";
import IdeateFront from "../../Assets/IdeateFront.jpg";
import IdeateBack from "../../Assets/IdeateBack.jpg";
import ai_event_front from "../../Assets/AI_Workshop_home.jpg";
import ai_event_back from "../../Assets/AI_ws_home_card_bg.jpg";
import WebD_front from "../../Assets/WebD_front.jpg";
import WebD_back from "../../Assets/WebD_back.png";
import ExpertTalkFront from "../../Assets/ExpertTalkBack.jpg";
import ExpertTalkBack from "../../Assets/ExpertTalkBack.jpg";
import WinterHackFront from "../../Assets/WinterHackFront.jpg";
import WinterHackBack from "../../Assets/WinterHackBack.jpg";

const events = [
  {
    id: 1,
    title: "ExpertTalk: FutureTech Workshop",
    shortDesc:
      "Led by Akarsh Jaiswal, Software Developer at Infosys, the workshop offered valuable insights into how projects are built in the tech industry, skill pathways for students, and the mindset required to thrive in modern software roles.",
    cardDesc:
      "An engaging session giving students practical exposure to real industry practices and emerging technology trends, led by a Software Developer at Infosys.",
    cardBackDesc:
      "Students gained clarity on industry expectations, workflow patterns, and real-world applications of the technologies they study — making the session highly informative and impactful.",
    frontImg: ExpertTalkFront,
    backImg: ExpertTalkBack,
  },
  {
    id: 2,
    title: "WinterHack 2026",
    shortDesc:
      "WinterHack is IOSC BVP's annual intra-society hackathon that gives students a hands-on experience of real-world hackathons. It serves as a platform to learn, experiment, and grow through teamwork and technology.",
    cardDesc:
      "IOSC BVP's annual intra-society hackathon — collaborate, innovate, build projects, and pitch your solutions while being guided by senior mentors.",
    cardBackDesc:
      "Participants collaborate, innovate, build projects, and pitch their solutions while being guided by senior mentors, gaining real-world hackathon experience.",
    frontImg: WinterHackFront,
    backImg: WinterHackBack,
  },
  {
    id: 1,
    title: "Tech Genesis 2025",
    shortDesc:
      "TechGenesis 2.0 by IOSC-BVP is a hybrid hackathon featuring a bootcamp on April 10th, an online Devयुद्ध hackathon on April 11th with an offline round on 12th April, and an offline pitch event HardwareX on April 12th, with prizes totaling $400.",
    cardDesc:
      "TechGenesis 2.0, a hybrid hackathon with expert sessions, coding battles, hardware showcases, mentorship, and exciting prizes!",
    cardBackDesc: null,
    frontImg: TechGenesis2025Front,
    backImg: TechGenesis2025Back,
  },
  {
    id: 2,
    title: "Tech Genesis 2024",
    shortDesc:
      "Techgenesis 2024 by IOSC-BVP featured a 24-hour hackathon, DevFusion, fostering innovation. Projexon highlighted student projects, while Hire Harbour simulated job placements, enhancing skills and teamwork among aspiring tech leaders.",
    cardDesc:
      "Embark on a journey through innovation, creativity, and real-world challenges with our flagship event featuring DevFusion, Projexon, and Hire Harbour.",
    cardBackDesc:
      "So many participants, along with mentorship from tech industry experts. Hands-on project demonstrations and awards in Projexon. Placement simulator experience through Hire Harbour for career readiness. Techgenesis set the foundation for future flagship events with high engagement, technical achievements, and industry interactions.",
    frontImg: TechGenesisFront,
    backImg: TechGenesisBack,
  },
  {
    id: 3,
    title: "Ideate",
    shortDesc:
      "Ideate, IOSC-BVP's first ideathon, challenged 100+ students to creatively solve modern issues, fostering teamwork, mentorship, and innovation. Top ideas received awards, establishing IOSC-BVP as a problem-solving hub.",
    cardDesc:
      "The first major ideathon of IOSC-BVP: A challenge to brainstorm solutions. Expert mentorship sessions guiding ideation. Awards for top ideas with development opportunities.",
    cardBackDesc:
      "High participation with a collaborative and competitive spirit. Successful presentations of unique ideas with real-world applications. Recognition for top-performing teams, opening doors for future development. Ideate was a success in sparking innovative thinking and showcasing the creative potential of our students.",
    frontImg: IdeateFront,
    backImg: IdeateBack,
  },
  {
    id: 4,
    title: "AI for Everyone",
    shortDesc:
      "AI for Everyone, a beginner-friendly bootcamp, introduced students to Python, data analysis, and ML projects with hands-on guidance from mentors, building a solid foundation in AI through practical application",
    cardDesc:
      "A week-long bootcamp exploring AI/ML fundamentals: Beginner-friendly sessions from Python basics to ML models. Hands-on AI and ML project work. Guidance from industry mentors.",
    cardBackDesc:
      "Covered foundational concepts and advanced applications in AI/ML. Hands-on project experience applying machine learning skills. Industry networking and mentorship that supported learning.",
    frontImg: ai_event_front,
    backImg: ai_event_back,
  },
  {
    id: 5,
    title: "WebD Workshop",
    shortDesc:
      "The WebD Workshop was a week-long bootcamp teaching web development fundamentals to advanced JavaScript. Participants built portfolio-ready projects, gained practical skills, and connected with fellow aspiring developers.",
    cardDesc:
      "A week-long bootcamp for aspiring web developers: Basics of HTML, CSS, and JavaScript. Hands-on projects for practical experience. Portfolio building and networking opportunities.",
    cardBackDesc:
      "Engaging sessions covering essential web dev skills. Practical projects to build a strong development portfolio. Collaboration and mentorship to guide progress. The WebD Workshop was a success, establishing solid web foundations for many students and encouraging further exploration in development.",
    frontImg: WebD_front,
    backImg: WebD_back,
  },
];

const Cards = () => {
  const [flipped, setFlipped] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div
        id="Events"
        className="flex flex-col gap-8 justify-center bg-[#000029] h-full p-4 pt-12"
      >
        <div className="h-[5rem]" data-aos="fade-up">
          <h1 className="text-6xl text-center text-white">Our Events</h1>
        </div>

        <div className="event-container h-full w-full flex flex-col">
          {events.map((event, index) => {
            const cardOnLeft = index % 2 !== 0; // odd index: card left, text right
            return (
              <div
                key={event.id}
                className={`event-wrapper ${cardOnLeft ? "" : "event-wrapper2"} flex items-center gap-60 h-[28rem] m-16`}
                data-aos="fade-up"
              >
                {/* Info block — left side (even index: text left, card right) */}
                {!cardOnLeft && (
                  <div className="flip-card-event-info-container flex flex-col justify-center gap-16 h-[20rem] w-[47rem]">
                    <div className="flip-card-event-heading text-6xl text-white">
                      <h1>{event.title}</h1>
                    </div>
                    <div className="flip-card-event-info flex flex-col gap-10 text-2xl justify-center text-white">
                      <p>{event.shortDesc}</p>
                    </div>
                  </div>
                )}

                {/* Flip Card */}
                <div>
                  <div
                    className={`card flip-card w-[23rem] h-[28rem] hover:scale-110 transition-all duration-500 ${flipped[event.id] ? "flipped" : ""}`}
                    onClick={() => toggleFlip(event.id)}
                  >
                    <div className="flip-card-inner w-[100%] h-[100%]">
                      <div
                        className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover bg-center border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                        style={{ backgroundImage: `url(${event.frontImg})` }}
                      >
                        <h1 className="flip-card-h1 text-center text-2xl my-[1.5rem]">
                          {event.title}
                        </h1>
                        <p className="flip-card-p text-center text-xl">
                          {event.cardDesc}
                        </p>
                      </div>

                      <div
                        className="flip-card-back flex items-center justify-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover bg-center border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                        style={{ backgroundImage: `url(${event.backImg})` }}
                      >
                        {event.cardBackDesc && (
                          <p className="text-center text-xl">
                            {event.cardBackDesc}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info block — right side (odd index: card left, text right) */}
                {cardOnLeft && (
                  <div className="flip-card-event-info-container flex flex-col justify-center gap-16 h-[20rem] w-[47rem]">
                    <div className="flip-card-event-heading text-6xl text-end text-white">
                      <h1>{event.title}</h1>
                    </div>
                    <div className="flip-card-event-info flex justify-center text-end text-2xl text-white">
                      <p>{event.shortDesc}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
