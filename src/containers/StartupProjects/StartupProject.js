import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ReactPlayer from "react-player";

import video1 from "../../assets/videos/FallGuy.mp4"

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {/* {bigProjects.projects.map((project, i) => (
              <div style={{display:'flex',flexDirection:"column"}}>
            
              <ReactPlayer
                key={i}
                url={video1}
                controls
                width="340"
                height="1260"
                autoplay={true}
              />
              <p>1234567</p>
              <p>uygftyu</p>
              </div>
            ))} */}
            <div style={{display:'flex',flexDirection:"column"}}>
            
            <ReactPlayer
              //key={i}
              url={video1}
              controls
              width="340"
              height="1260"
              autoplay={true}
            />
            <p>FallGuy</p>
            <p>Developed a Fall Guy adventure game for iOS and Android using Unity and C#. Implemented character movement, obstacle generation, power-ups, and scoring system. Jump into the chaos and strive to be the Fall Guy standing in this fast-paced mobile experience!.Developed using the Unity game engine and C# programming language to ensure a seamless and enjoyable gaming experience.</p>
            </div>

            <div style={{display:'flex',flexDirection:"column"}}>
            
              <ReactPlayer
               // key={i}
                url={"https://www.youtube.com/watch?v=7jf6Dljb_EE"}
                controls
                width="340"
                height="62.5%"
                autoplay={true}
              />
              <p>D25 - Seperator component using unity ARCore</p>
              <p>Created a cutting-edge AR experience with Unity for Project D25. Developed a Separator component using ARCore for seamless interaction. Dive into the augmented reality world, where innovation meets functionality. #Unity #ARCore #AugmentedReality</p>
              <p></p>
              </div>

              


          </div>
        </div>
      </div>
    </Fade>
  );
}
