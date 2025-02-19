import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StudentSubTeacherReferences.css"; 

export default function ReferenceDetail() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">References</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Predicted Grades</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Personal Statement</a></li>
              <li className="nav-item"><a className="nav-link" href="#">My Profile</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <h4 className="text-center mt-3">View your Subject Teacher References</h4>

      <div className="d-flex flex-column align-items-center">
        <div className="reference-card completed">
          <p>Tutor Name</p>
          <p>Tutor Reference</p>
        </div>

        <div className="scrollable-box">
          <p >
            I must say that a certain individual called yagiz is extremely dependent on his 'best mate', moutaz. sometimes he has just gotta respect his own boundaries.
          </p>
        </div>
      </div>
    </div>
  );
}