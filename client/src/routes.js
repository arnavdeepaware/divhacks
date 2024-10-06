import React from "react";
import { Route } from "react-router-dom"; // Make sure to import Route
import Dashboard from "layouts/dashboard/index";
import Career from "layouts/dashboard/career/career";
import Icon from "@mui/material/Icon";
import SkillsNavbar from "SkillsNavbar"; // Ensure this path is correct
import "./styles.css"; // Import your CSS file for styles
import Skills from "layouts/dashboard/skill/skills"; // Ensure this path is correct

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "CSS", level: 70 },
  { name: "HTML", level: 75 },
  { name: "Python", level: 60 },
  { name: "SQL", level: 65 },
  { name: "C++", level: 50 },
  { name: "Git", level: 80 },
  { name: "APIs", level: 75 },
];

const recommendedSkills = [
  { name: "Machine Learning", level: 60 },
  { name: "Docker", level: 70 },
  { name: "RESTful Services", level: 75 },
  { name: "GraphQL", level: 65 },
  { name: "Cloud Computing", level: 70 },
  { name: "Agile Methodologies", level: 80 },
  { name: "TypeScript", level: 60 },
  { name: "Data Structures & Algorithms", level: 70 },
  { name: "UI/UX Design", level: 65 },
  { name: "Cybersecurity", level: 70 },
];

// Define routes as an array of objects
const routes = [
  {
    type: "collapse",
    name: "Career Selection",
    key: "career-selection",
    icon: <Icon fontSize="small">star</Icon>,
    route: "/career", // Assuming this route should lead to the Career component
    component: <Career />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">star</Icon>,
    route: "/dashboard", // Assuming this route should lead to the Dashboard component
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Skills",
    key: "skills",
    icon: <Icon fontSize="small">star</Icon>,
    route: "/skills", // Route for Skills
    component: <Skills />, // Render Skills component
  },
  {
    type: "collapse",
    name: "Recommended Skills",
    key: "recommended-skills",
    icon: <Icon fontSize="small">star</Icon>,
    component: (
      <div className="recommended-skills-box">
        <h4>Recommended Skills</h4>
        {/* Optionally render recommended skills data */}
        {recommendedSkills.map((skill) => (
          <div key={skill.name}>
            {skill.name}: {skill.level}%
          </div>
        ))}
      </div>
    ),
  },
];

// Export routes and additional components if needed
export default routes;
