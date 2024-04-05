import React from "react";
import styles from "./Skills.module.css";
import { FaSquareJs, FaReact, FaSass, FaGitAlt, FaNode } from "react-icons/fa6";
import { Tilt } from "react-tilt";

const settingTilt = {
  reverse: true,
  scale: 1.2,
  speed: 2000,
  transition: true
};

function Skills() {
  return (
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title}>My Skill Set</h3>
      <ul className={styles.skills_list}>
        <li>
          <Tilt options={settingTilt}>
            <FaSquareJs />
          </Tilt>
        </li>
        <li>
          <Tilt options={settingTilt}>
            <FaReact />
          </Tilt>
        </li>
        <li>
          <Tilt options={settingTilt}>
            <FaSass />
          </Tilt>
        </li>
        <li>
          <Tilt options={settingTilt}>
            <FaGitAlt />
          </Tilt>
        </li>
        <li>
          <Tilt options={settingTilt}>
            <FaNode />
          </Tilt>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
