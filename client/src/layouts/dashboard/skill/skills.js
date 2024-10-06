import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For back button navigation

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

// Material Dashboard 2 React components
import MDBox from "components/MDBox"; // Optional, for layout purposes
import MDTypography from "components/MDTypography"; // Typography component for consistent styling

function Skills() {
  const navigate = useNavigate(); // Back button navigation
  const [selectedSkills, setSelectedSkills] = useState({
    skill1: false,
    skill2: false,
    skill3: false,
  });

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    setSelectedSkills({
      ...selectedSkills,
      [event.target.name]: event.target.checked,
    });
  };

  // Go back to the previous page
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <MDBox mt={6} mr={9} ml={35}>
      {" "}
      {/* Added significant left margin */}
      <Card sx={{ p: 3 }}>
        <MDBox display="flex" justifyContent="center" alignItems="flex-start" mb={3}>
          {/* Title */}
          <MDTypography variant="h5">AI Skill Selection</MDTypography>
        </MDBox>
        {/* Main Layout */}
        <Grid container spacing={3}>
          {/* Left Section: Reminders */}
          <Grid item xs={4}>
            <MDBox mb={2}>
              <MDTypography variant="h6">Reminders</MDTypography>
              <MDBox>
                <MDTypography variant="body1">Skill: AI Content Recognition</MDTypography>
                <MDTypography variant="body2">Date: YYYY-MM-DD</MDTypography>
              </MDBox>
              <MDBox>
                <MDTypography variant="body1">Skill: AI Data Analysis</MDTypography>
                <MDTypography variant="body2">Date: YYYY-MM-DD</MDTypography>
              </MDBox>
              <MDBox>
                <MDTypography variant="body1">Skill: AI Decision Making</MDTypography>
                <MDTypography variant="body2">Date: YYYY-MM-DD</MDTypography>
              </MDBox>
            </MDBox>
          </Grid>

          {/* Center Section: Tutorials */}
          <Grid item xs={4}>
            <MDBox>
              <MDTypography variant="h6">Tutorials / Guidance</MDTypography>
              <MDBox p={2} sx={{ border: "1px solid #ccc", height: "200px" }}>
                {/* Placeholder for AI-rendered content */}
                <MDTypography variant="body1">Tutorials will be rendered here...</MDTypography>
              </MDBox>
            </MDBox>
          </Grid>

          {/* Right Section: Skills */}
          <Grid item xs={4}>
            <MDBox>
              <MDTypography variant="h6">Skills</MDTypography>
              <MDBox>
                <Card sx={{ mb: 1 }}>
                  <MDTypography variant="body1">Skill 1: AI Content Recognition</MDTypography>
                </Card>
                <Card sx={{ mb: 1 }}>
                  <MDTypography variant="body1">Skill 2: AI Data Analysis</MDTypography>
                </Card>
                <Card sx={{ mb: 1 }}>
                  <MDTypography variant="body1">Skill 3: AI Decision Making</MDTypography>
                </Card>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
        {/* Back Button */}
        <MDBox display="flex" justifyContent="center" mb={4} mt={4}>
          <Button variant="contained" color="primary" onClick={handleBackClick}>
            Back
          </Button>
        </MDBox>
      </Card>
    </MDBox>
  );
}

export default Skills;
