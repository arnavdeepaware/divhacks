import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete"; // Import Autocomplete

// Material Dashboard 2 React components
import MDBox from "components/MDBox"; // Optional, for layout purposes
import MDTypography from "components/MDTypography"; // Typography component for consistent styling

function Career() {
  const navigate = useNavigate(); // Navigation function
  const [selectedCareer, setSelectedCareer] = useState(null); // To track the selected career

  // Career options
  const careers = [
    "Cybersecurity",
    "Product Management",
    "Software Engineering",
    "Business Analyst",
    "Machine Learning",
    "Quantum Developer",
    "Investment Banking",
    "Data Scientist",
    "Data Analyst",
    "Artificial Intelligence",
    "Sales Analyst",
    "Human Resources",
    "Human Resources Manager",
    "Civil Engineering",
    "Biomedical Engineering",
    "Stock Broker",
    "Financial Analyst",
    "Tax Auditor",
    "Quantitative Analyst",
    "Mechanical Engineering",
    "Computer Engineering",
  ];

  // Handle career selection
  const handleCareerSelect = (event, career) => {
    setSelectedCareer(career); // Update the selected career
    console.log(`Selected Career: ${career}`);
  };

  // Handle next button click
  const handleNextClick = () => {
    if (selectedCareer) {
      // Navigate to the Dashboard page only if a career is selected
      navigate("/dashboard/"); // Change the path as needed to your Dashboard route
    } else {
      alert("Please select a career before proceeding."); // Alert if no career is selected
    }
  };

  // Go back to the previous page
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <MDBox ml={40} mt={6} mr={3}>
      <Card>
        <MDBox display="flex" justifyContent="center" alignItems="flex-start" p={3}>
          <MDTypography variant="h5" gutterBottom>
            Select your Career
          </MDTypography>
        </MDBox>

        {/* Career Input with Autocomplete */}
        <MDBox p={3}>
          <Autocomplete
            options={careers}
            onChange={handleCareerSelect} // Handle selection
            renderInput={(params) => (
              <TextField {...params} label="Choose a Career" variant="outlined" />
            )}
            fullWidth
            value={selectedCareer} // Show the selected career in the input
          />
        </MDBox>

        {/* Next Button */}
        <MDBox display="flex" justifyContent="center" mb={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleBackClick} // Navigate to the next page
            style={{ color: "white", marginRight: "10px" }} // Add margin for spacing
          >
            Back
          </Button>
          {/* Back Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextClick}
            style={{ color: "white" }}
          >
            Next
          </Button>
        </MDBox>
      </Card>
    </MDBox>
  );
}

export default Career;
