import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";

const counts = [
  { name: "Trainings", value: 12 },
  { name: "Written Book", value: 1 },
  { name: "Listeners", value: 210 },
  { name: "Own Projects", value: 12 },
];

const skills = [
  { name: "Figma", value: 90, icon: "img/svg/figma.svg" },
  { name: "Nextjs", value: 70, icon: "img/svg/nextjs.svg" },
  { name: "Photoshop", value: "85", icon: "img/svg/photoshop.svg" },
  { name: "React", value: "80", icon: "img/svg/react.svg" },
  { name: "Postgresql", value: "85", icon: "img/svg/sql.svg" },
  { name: "Tailwind", value: "75", icon: "img/svg/tailwind.svg" },
];

const experiences = [
  {
    company: "Sarl Nouha Benkhaled.",
    designation: "Marketing Manager",
    time: "2023 - 2024",
  },
  {
    company: "SARL copefel.",
    designation: "ERP Developer  ",
    time: "2021 - 2023",
  },

  {
    company: "Freelance.",
    designation: "UX / Web Designer",
    time: "2020 - 2021",
  },
  {
    company: "Matrix Design agency.",
    designation: "Web Developer",
    time: "2018 - 2020",
  },

  {
    company: "SARL Polyma, Limited.",
    designation: "Software Developer",
    time: "2016 - 2018",
  },
  {
    company: "SARL CC-Engineering Design.",
    designation: "Graphic Designer",
    time: "2014 - 2016",
  },
];

const educations = [
  {
    institution: "Abou bekr Belkaid  Univercity",
    specialty: "Bdd",
    certificate: "Master Degree In Information Systems",
    time: "2011 - 1014",
  },
  {
    institution: " Moustapha Stambouli University",
    certificate: "Bachelor Degree In Computer Science",
    time: "2008 - 2011",
  },
  {
    institution: " Coursera's learning Platform",
    certificate: "Front End Development Certificate",
    time: "2020 - 2021",
  },
  {
    institution: " Coursera's learning Platform",
    certificate: "Full Stack Development Certificate",
    time: "2019 - 2020",
  },
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>
                      My expert
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                    I specialize in building responsive, user-friendly web
                    applications using React, Next.js, and Tailwind CSS. From
                    transforming Figma designs into pixel-perfect interfaces to
                    developing full-stack solutions with seamless API
                    integration, I focus on delivering high-quality, tailored
                    experiences. Whether {`you're`} launching an eCommerce
                    platform or optimizing performance,
                  </p>
                  <p>
                    I craft efficient and scalable applications that help
                    businesses succeed online.
                  </p>
                </div>
                <div className="orido_tm_boxed_button">
                  <a href="doc/cv/resume.pdf">
                    My Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <img
                                    className="svg"
                                    src={skill.icon}
                                    alt=""
                                  />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name} <span>({skill.value}%)</span>
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                                <span className="specialty">
                                  {education.specialty}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      <div className="orido_tm_section">
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ExpertAreas;
