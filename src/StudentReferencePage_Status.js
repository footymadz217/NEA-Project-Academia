import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StudentReferencePage_Status.css"; 
import ReferenceDetail from "./StudentSubTeacherReferences";

export default function SubjectReferences() {
  const [references, setReferences] = useState([]);
  const [individual,setindividual] = useState(false)

  useEffect(() => {
    
    const fetchData = async () => {
      
      const data = [
        { id: 1, teacher: "Teacher 1", subject: "Computer", status: "Completed" },
        { id: 2, teacher: "Teacher 2", subject: "English", status: "Ongoing" },
        { id: 3, teacher: "Teacher 3", subject: "General Knowledge", status: "Incomplete" },
      ];
      setReferences(data);
    };
    fetchData();
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "completed";
      case "Ongoing":
        return "ongoing";
      case "Incomplete":
        return "incomplete";
      default:
        return "";
    }
  };
  if (individual){
    return <ReferenceDetail/>
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">References</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
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
      
      <div className="container mt-4">
        <h3 className="text-center">Subject Reference Status</h3>
        <div className="d-flex flex-column align-items-center" onClick={()=> setindividual(true)}>
          {references.map((ref) => (
            <div key={ref.id} className={`reference-card ${getStatusClass(ref.status)}`}>
              <p>{ref.teacher}</p>
              <p>{ref.subject}</p>
            </div>
          ))}
        </div>
        <div className="legend text-center mt-3">
          <span className="legend-item completed">Completed</span>
          <span className="legend-item ongoing">Ongoing</span>
          <span className="legend-item incomplete">Incomplete</span>
        </div>
      </div>
    </div>
  );
}
