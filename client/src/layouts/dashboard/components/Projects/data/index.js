// @mui material components
import MDBox from "components/MDBox";
import MDProgress from "components/MDProgress";

export default function data() {
  return {
    columns: [
      { Header: "Skills", accessor: "skills", width: "50%", align: "left" },
      { Header: "Completion", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        skills: "JavaScript",
        completion: (
          <MDBox width="25rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        skills: "JavaScript",
        completion: (
          <MDBox width="25rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
