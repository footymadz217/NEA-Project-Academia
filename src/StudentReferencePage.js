import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StudentReferencePage_Options.css";
import { useState } from "react";
import SubjectReferences from "./StudentReferencePage_Status";

export default function ReferenceCards() {
  const [subject, setSubject] = useState(false)
  if (subject){

    return <SubjectReferences/>

  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">References</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Predicted Grades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Personal Statement</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">My Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <Card className="reference-card">
              <CardContent className="text-center">
                <EditIcon className="icon" />
                <Typography variant="h6" className="mt-3">
                  View Tutor Reference
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-5">
            <Card className="reference-card" onClick = {()=> setSubject(true)}>
              <CardContent className="text-center">
                <VisibilityIcon className="icon" />
                <Typography variant="h6" className="mt-3">
                  View Subject References
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
