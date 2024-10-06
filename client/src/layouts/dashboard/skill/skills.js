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
    <MDBox ml={40} mt={6} mr={3}>
      <Card sx={{ ml: 4 }}>
        {" "}
        {/* Added left margin to the Card */}
        <MDBox display="flex" justifyContent="center" alignItems="flex-start" p={3}>
          {/* Title */}
          <MDTypography variant="h5" gutterBottom>
            AI Skill Selection
          </MDTypography>
        </MDBox>
        {/* Checkboxes for AI Skills */}
        <MDBox p={3}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedSkills.skill1}
                    onChange={handleCheckboxChange}
                    name="skill1"
                  />
                }
                label="Skill 1: AI Content Recognition"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedSkills.skill2}
                    onChange={handleCheckboxChange}
                    name="skill2"
                  />
                }
                label="Skill 2: AI Data Analysis"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedSkills.skill3}
                    onChange={handleCheckboxChange}
                    name="skill3"
                  />
                }
                label="Skill 3: AI Decision Making"
              />
            </Grid>
          </Grid>
        </MDBox>
        {/* Back Button */}
        <MDBox display="flex" justifyContent="center" mb={4}>
          <Button variant="contained" color="primary" onClick={handleBackClick}>
            Back
          </Button>
        </MDBox>
      </Card>
    </MDBox>
  );
}

export default Skills;
