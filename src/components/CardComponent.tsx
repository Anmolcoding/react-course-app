import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
interface props {
  name: string;
  instructor: string;
  tags: string[];
  id: string;
}
export default function CardComponent(props: props) {
  const navigate = useNavigate();
  return (
    <Box
      sx={
        {
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // minHeight: "30h",
        }
      }
    >
      <Card
        sx={{
          width: "750px",
          border: "1px solid #000",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <Avatar
          sx={{
            bgcolor: deepOrange[500],
            alignSelf: "start",
            marginTop: "1rem",
          }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          B
        </Avatar>
        <Box
          sx={{
            // minWidth: "500px",
            minWidth: "500px",
          }}
        >
          <h2>{props.name}</h2>
          <p>Instructor: {props.instructor}</p>
          <h5>{props.tags}</h5>
        </Box>
        <CardActions
          sx={{
            alignSelf: "start",
            marginTop: "1rem",
          }}
        >
          <Button
            onClick={() => navigate("/EditcourseDetail" + "/" + props.id)}
            variant="contained"
            color="warning"
          >
            Edit Course
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
