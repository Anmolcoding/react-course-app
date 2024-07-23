import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";

interface courses {
  courseId: string;
  instructorName: string;
  courseName: string;
  tags: string[];
  students: student[];
}

interface student {
  name: string;
}

interface studentType {
  enrolledList: student[];
}

const EditcourseDetail = () => {
  const { id } = useParams();
  const [courses, setCourses] = React.useState<courses[]>([]);
  const [tags, settags] = React.useState([]);
  const params = useParams();
  const [Name, setName] = useState("");
  const [Instructor, setInstructor] = useState("");
  const [students, setStudents] = useState<string[]>([]);

  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/thedevelopers-co-in/dummy-api/main/course.json"
    )
      .then((res) => res.json())
      .then((data) => setCourses(data.courses));
  }, []);

  const C = courses.find((course) => course.courseId === id);
  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/thedevelopers-co-in/dummy-api/main/tags.json"
    )
      .then((res) => res.json())
      .then((data) => settags(data.tags));
  }, []);

  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/thedevelopers-co-in/dummy-api/main/students.json"
    )
      .then((res) => res.json())
      .then((data: studentType) => {
        const arrOfObject = data.enrolledList;

        const arrOfString = arrOfObject.map((obj) => {
          return obj.name;
        });

        return setStudents(arrOfString);
      });
  }, []);

  useEffect(() => {
    if (C) {
      setName(C.courseName);
      setInstructor(C.instructorName);
    }
  }, [C?.courseId]);

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(Name, Instructor, students);
  }

  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: "98vw",
        gap: "20px",
      }}
    >
      <React.Fragment>
        <h1 style={{ textAlign: "center" }} className="Course-List">
          Edit Course Detail:{params.id}
        </h1>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            value={Name}
            required
            fullWidth
            sx={{
              mb: 4,
              "& .MuiInputLabel-outlined": {
                color: "secondary",
              },
              "& .Mui-focused.MuiInputLabel-outlined": {
                color: "black",
              },
            }}
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Instructor"
            onChange={(e) => setInstructor(e.target.value)}
            value={Instructor}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
          <Autocomplete
            multiple
            limitTags={3}
            id="multiple-limit-tags"
            options={tags}
            getOptionLabel={(option) => option}
            defaultValue={tags[1]}
            renderInput={(params) => (
              <TextField {...params} placeholder="Press Space to add tag" />
            )}
            sx={{ mb: 4 }}
          />
          <Autocomplete
            multiple
            limitTags={3}
            id="multiple-limit-students"
            options={students}
            renderInput={(params) => (
              <TextField {...params} placeholder="Press Space to add tag" />
            )}
            sx={{ mb: 4 }}
          />

          <Button variant="contained" color="warning" type="submit">
            UPDATE COURSE
          </Button>
        </form>
        <small>
          Already Update? <Link to="/CourseListings">GO BACK</Link>
        </small>
      </React.Fragment>
    </Box>
  );
};

export default EditcourseDetail;
