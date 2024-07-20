import CardComponent from "../components/CardComponent";
import React from "react";
import Box from "@mui/material/Box";

interface courses {
  courseId: string;
  instructorName: string;
  courseName: string;
  tags: string[];
  students: any;
}

const CourseListings = () => {
  const [courses, setCourses] = React.useState<courses[]>([]);
  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/thedevelopers-co-in/dummy-api/main/course.json"
    )
      .then((res) => res.json())
      .then((data) => setCourses(data.courses));
  }, []);
  console.log(courses);
  const courseElement = courses.map((course) => (
    <div key={course.courseId}>
      <div>
        <h2>{course.courseName}</h2>
        <p>Instructor: {course.instructorName}</p>
        <h5>
          {course.tags.map((tag) => (
            <span> {tag} , </span>
          ))}
        </h5>
      </div>
    </div>
  ));
  return (
    <>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            width: "100vw",
            gap: "20px",
          }}
        >
          <CardComponent
            id={courses[0]?.courseId}
            name={courses[0]?.courseName}
            instructor={courses[0]?.instructorName}
            tags={courses[0]?.tags}
          ></CardComponent>
          <CardComponent
            id={courses[1]?.courseId}
            name={courses[1]?.courseName}
            instructor={courses[1]?.instructorName}
            tags={courses[1]?.tags}
          ></CardComponent>
          <CardComponent
            id={courses[2]?.courseId}
            name={courses[2]?.courseName}
            instructor={courses[2]?.instructorName}
            tags={courses[2]?.tags}
          ></CardComponent>
        </Box>
      </div>
    </>
  );
};
export default CourseListings;
