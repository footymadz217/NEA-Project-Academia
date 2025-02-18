import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Student_Dashboard.css";
import Grades from "./StudentPredGrades";
import ReferenceCards from "./StudentReferencePage"; // Import the StudentReferencePage component

export default function Student() {
  const [gradesScreen, setGradesScreen] = useState(false);
  const [referenceScreen, setReferenceScreen] = useState(false); // State for reference screen

  const goToHome = () => {
    setGradesScreen(false);
    setReferenceScreen(false);
  };

  if (gradesScreen) {
    return <Grades goToHome={goToHome} />;
  }

  if (referenceScreen) {
    return <ReferenceCards goToHome={goToHome} />; // Render StudentReferencePage
  }

  return (
    <Container className="text-center academia-container">
      <Typography variant="h4" className="mt-4 academia-title">
        Welcome to <span className="brand">Acadamia360</span>
      </Typography>
      <Typography variant="subtitle1" className="home-page">
        Home Page
      </Typography>
      <div className="role-box">
        <Typography variant="h6">Role: XY</Typography>
        <Typography variant="h6">Name</Typography>
      </div>
      <Row className="mt-4">
        <Col md={3} sm={6} xs={12} className="mb-3">
          <Card className="option-card" onClick={() => setGradesScreen(true)}>
            <Card.Body>
              <SchoolIcon className="icon" />
              <Card.Title>Predicted Grades</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12} className="mb-3">
          <Card className="option-card" onClick={() => setReferenceScreen(true)}>
            <Card.Body>
              <AssignmentIcon className="icon" />
              <Card.Title>References</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12} className="mb-3">
          <Card className="option-card">
            <Card.Body>
              <DescriptionIcon className="icon" />
              <Card.Title>Personal Statement</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12} className="mb-3">
          <Card className="option-card">
            <Card.Body>
              <PersonIcon className="icon" />
              <Card.Title>My Profile</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}