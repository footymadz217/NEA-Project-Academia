import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { School, Person, Group } from "@mui/icons-material";
import './Admin_Dashboard.css';
import Student from "./Student_Dashboard"; 
import SubjectTeacher from "./SubTeacher_Dashboard";
import FormTutor from "./FormTutor_Dashboard";

export default function Admin() {
  const [showStudentScreen, setShowStudentScreen] = useState(false);
  const [showSubjectTeacherScreen, setShowSubjectTeacherScreen] = useState(false);
  const [showFormTutorScreen, setShowFormTutorScreen] = useState(false);

  return (
    <Container fluid className="home-container">
      {showStudentScreen ? (
        <Student /> // Show Student Screen when state is updated
      ) : showSubjectTeacherScreen ? (
        <SubjectTeacher /> // Show Subject Teacher Screen when state is updated
      ) : showFormTutorScreen ? (
        <FormTutor /> // Show Form Tutor Screen when state is updated
      ) : (
        <>
          <h2 className="text-center mt-3">Welcome to Academia360</h2>
          <p className="text-center">Home Page</p>

          <div className="role-box">
            <p>Role: XY</p>
            <p>Name</p>
          </div>

          <Row className="justify-content-center mt-4">
            <Col md={4} sm={12} className="mb-3">
              <Card className="view-card" onClick={() => setShowStudentScreen(true)}>
                <Card.Body>
                  <h4>View as Student</h4>
                  <School fontSize="large" />
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={12} className="mb-3">
              <Card className="view-card" onClick={() => setShowSubjectTeacherScreen(true)}>
                <Card.Body>
                  <h4>View as Subject Teacher</h4>
                  <Person fontSize="large" />
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={12} className="mb-3">
              <Card className="view-card" onClick={() => setShowFormTutorScreen(true)}>
                <Card.Body>
                  <h4>View as Form Tutor</h4>
                  <Group fontSize="large" /> {/* Use Group icon for Form Tutor */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}