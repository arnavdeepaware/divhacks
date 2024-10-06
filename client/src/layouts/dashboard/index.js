import { useNavigate } from "react-router-dom"; // Import useNavigate
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { useState } from "react";
import Projects from "layouts/dashboard/components/Projects";
import MDTypography from "components/MDTypography"; // Ensure this path is correct
import Skills from "./skill/skills"; // Adjust this path if needed

function Dashboard() {
  const navigate = useNavigate(); // Initialize navigate
  const [open, setOpen] = useState(false);
  const [skill, setSkill] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [timeToComplete, setTimeToComplete] = useState("");
  const [skills, setSkills] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const handleCompletionDateChange = (e) => {
    setCompletionDate(e.target.value);
  };

  const handleTimeToCompleteChange = (e) => {
    setTimeToComplete(e.target.value);
  };

  const handleInsert = () => {
    if (skill) {
      const newSkill = {
        name: skill,
        completion: 0,
        completionDate: completionDate,
        timeToComplete: timeToComplete,
      };
      setSkills([...skills, newSkill]);
      setSkill("");
      setCompletionDate("");
      setTimeToComplete("");
      setOpen(false);
    }
  };

  const handleSkillClick = (skillName) => {
    console.log("Clicked skill:", skillName);
    navigate("/skills"); // Navigate to the Skills route
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a New Skill</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="skill"
            label="Enter Skill"
            type="text"
            fullWidth
            variant="standard"
            value={skill}
            onChange={handleSkillChange}
          />
          <TextField
            margin="dense"
            id="completionDate"
            label="Complete By Date"
            type="date"
            fullWidth
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={completionDate}
            onChange={handleCompletionDateChange}
          />
          <TextField
            margin="dense"
            id="timeToComplete"
            label="Time to Complete (hours)"
            type="number"
            fullWidth
            variant="standard"
            value={timeToComplete}
            onChange={handleTimeToCompleteChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleInsert} color="primary">
            Insert
          </Button>
        </DialogActions>
      </Dialog>

      <DashboardLayout>
        <DashboardNavbar />
        <Grid container spacing={4} justifyContent="flex-end">
          <Grid item xs={12} md={6} lg={2}>
            <Button
              variant="contained"
              disableElevation
              onClick={handleClickOpen}
              sx={{
                color: "white",
                backgroundColor: "navyblue",
                "&:hover": {
                  backgroundColor: "lightblue",
                  color: "white",
                },
              }}
              style={{ color: "white" }}
            >
              Learn a Skill!
            </Button>
          </Grid>
        </Grid>
        <MDBox py={7}>
          <Grid container spacing={4}>
            {skills.map((skillObj, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <MDBox mb={1.5}>
                  <div
                    onClick={() => handleSkillClick(skillObj.name)}
                    style={{ cursor: "pointer" }}
                  >
                    <ComplexStatisticsCard
                      icon="leaderboard"
                      title={skillObj.name}
                      count={skillObj.completion}
                      timeToComplete={skillObj.timeToComplete}
                      completionDate={skillObj.completionDate}
                    />
                  </div>
                </MDBox>
              </Grid>
            ))}
          </Grid>
          <MDBox mt={4.5}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Projects />
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
        <Footer />
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
