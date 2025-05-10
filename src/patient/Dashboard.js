import React from "react";
import "./Dashboard.css"; 

const Sidebar = ({ onLogout }) => (
  <div className="sidebar">
    <div className="sidebar-title">Patient Portal</div>
    <ul>
      <li className="active">Dashboard</li>
      <li>Appointments</li>
      <li>Medical Records</li>
      <li>Profile</li>
      <li>Settings</li>
      <li>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </li>
    </ul>
  </div>
);

export default function Dashboard({ user = { name: "John Doe" }, onLogout }) {
  return (
    <div className="dashboard-container">
      <Sidebar onLogout={onLogout} />
      <div className="dashboard-main">
        <div className="dashboard-header">
          <div className="profile-info">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=E74C3C&color=fff&rounded=true&size=60`}
              alt="avatar"
              className="profile-avatar"
            />
            <div>
              <div className="user-name-row">
                <span className="user-icon" role="img" aria-label="user">👤</span>
                <h2>Welcome, {user.name}</h2>
              </div>
              <span className="dashboard-date">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Next Appointment</h3>
            <div className="card-content">
              <span className="big-date">May 15, 2025</span>
              <div>Dr. Sarah Johnson - Cardiology</div>
            </div>
          </div>
          <div className="dashboard-card">
            <h3>Prescription Refills</h3>
            <div className="card-content">
              <span className="big-number">2</span>
              <div>Due in next 7 days</div>
            </div>
          </div>
          <div className="dashboard-card">
            <h3>Medical Tests</h3>
            <div className="card-content">
              <span className="big-number">3</span>
              <div>Blood, X-Ray, ECG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}