import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const SkillsNavbar = ({ skills }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <h3>Skills</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {skills.map((skill, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>{skill.name}</strong>
            <div
              style={{
                height: "10px",
                width: "100%",
                backgroundColor: "#e0e0e0",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  height: "10px",
                  width: `${skill.level}%`,
                  backgroundColor: "#3f51b5",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add PropTypes validation
SkillsNavbar.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // name must be a string
      level: PropTypes.number.isRequired, // level must be a number
    })
  ).isRequired, // skills prop is required
};

export default SkillsNavbar;
