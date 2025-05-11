import React, { useState } from "react";
import "./Dashboard.css"; 
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ onLogout, onSelect }) => (
  <div className="sidebar">
    <div className="sidebar-title">Patient Portal</div>
    <ul>
      <li className="active" onClick={() => onSelect('dashboard')} style={{cursor: 'pointer'}}>Dashboard</li>
      <li onClick={() => onSelect('book-appointment')} style={{cursor: 'pointer', color: '#e74c3c', fontWeight: 600}}>Book an Appointment</li>
      <li>Appointments</li>
      <li>Medical Records</li>
      <li>Profile</li>
      <li onClick={() => onSelect('find-hospitals')} style={{cursor: 'pointer', color: '#e74c3c', fontWeight: 600}}>Find Nearby Hospitals</li>
      <li onClick={() => onSelect('free-doctor')} style={{cursor: 'pointer', color: '#e74c3c', fontWeight: 600}}>Free Doctor</li>
      <li>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </li>
    </ul>
  </div>
);

export default function Dashboard({ user, onLogout }) {
  const [showFreeDoctor, setShowFreeDoctor] = useState(false);
  const [showFindHospitals, setShowFindHospitals] = useState(false);
  const [showBookAppointment, setShowBookAppointment] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    name: '', email: '', disease: '', address: '', phone: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slotAllotted, setSlotAllotted] = useState(false);
  const [loading, setLoading] = useState(false);

  const mockDoctors = [
    { name: 'Dr. A. Sharma', disease: 'Diabetes', slots: ['10:00 AM', '11:00 AM'] },
    { name: 'Dr. B. Verma', disease: 'Cardiology', slots: ['12:00 PM', '2:00 PM'] },
    { name: 'Dr. C. Gupta', disease: 'Diabetes', slots: ['1:00 PM', '3:00 PM'] },
    { name: 'Dr. D. Singh', disease: 'ENT', slots: ['9:00 AM', '4:00 PM'] },
  ];

  const safeUser = user && user.name ? user : { name: "John Doe" };
  const navigate = useNavigate();
  const handleFreeDoctor = () => {
    setLoading(true);
    setTimeout(() => {
      window.open('https://ai-doctor-voicebot-9.onrender.com/', '_blank');
      setLoading(false);
      setShowFreeDoctor(true);
      setShowFindHospitals(false);
      setShowBookAppointment(false);
    }, 1500);
  };
  const handleDashboard = () => {
    setShowFreeDoctor(false);
    setShowFindHospitals(false);
    setShowBookAppointment(false);
  };
  const handleFindHospitals = () => {
    setShowFindHospitals(true);
    setShowFreeDoctor(false);
    setShowBookAppointment(false);
  };
  const handleBookAppointment = () => {
    setShowBookAppointment(true);
    setShowFreeDoctor(false);
    setShowFindHospitals(false);
    setFormSubmitted(false);
    setSelectedDoctor(null);
    setSelectedSlot(null);
    setSlotAllotted(false);
  };

  const handleFormChange = (e) => {
    setAppointmentForm({ ...appointmentForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.open("https://razo-7t9y.onrender.com", "_blank");
  };

  const availableDoctors = mockDoctors.filter(doc => doc.disease.toLowerCase() === appointmentForm.disease.toLowerCase());

  return (
    <div className="dashboard-container">
      {loading && (
        <div className="preloader-overlay" style={{position: 'fixed', top:0, left:0, right:0, bottom:0, background:'rgba(255,255,255,0.7)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div className="spinner" style={{width:60, height:60, border:'6px solid #f3f3f3', borderTop:'6px solid #e74c3c', borderRadius:'50%', animation:'spin 1s linear infinite'}}></div>
          <style>{`@keyframes spin {0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}`}</style>
        </div>
      )}
      <Sidebar onLogout={onLogout} onSelect={(val) => {
        if (val === 'free-doctor') handleFreeDoctor();
        if (val === 'dashboard') handleDashboard();
        if (val === 'find-hospitals') handleFindHospitals();
        if (val === 'book-appointment') handleBookAppointment();
      }} />
      <div className="dashboard-main">
        <div className="dashboard-header" style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}>
            <div style={{color: '#e74c3c', fontWeight: 600, fontSize: '1.3rem'}}>
              Welcome, {safeUser.name}
            </div>
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(safeUser.name)}&background=E74C3C&color=fff&rounded=true&size=60`}
              alt="avatar"
              className="profile-avatar"
            />
          </div>
        </div>
        {showBookAppointment ? (
          <div style={{marginTop: '2rem', background: '#fff', borderRadius: '14px', padding: '2.5rem 2rem', boxShadow: '0 2px 12px rgba(44,62,80,0.08)', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto'}}>
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit}>
                <h2 style={{color: '#e74c3c', marginBottom: '1.5rem'}}>Book an Appointment</h2>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Name" value={appointmentForm.name} onChange={handleFormChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email" value={appointmentForm.email} onChange={handleFormChange} required />
                </div>
                <div className="form-group">
                  <input type="text" name="disease" placeholder="Disease" value={appointmentForm.disease} onChange={handleFormChange} required />
                </div>
                <div className="form-group">
                  <input type="text" name="address" placeholder="Address" value={appointmentForm.address} onChange={handleFormChange} required />
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone Number" value={appointmentForm.phone} onChange={handleFormChange} required />
                </div>
                <button type="submit" style={{background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 32px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', marginTop: '1rem'}}>Submit</button>
              </form>
            ) : !selectedDoctor ? (
              <div>
                <h2 style={{color: '#e74c3c', marginBottom: '1.5rem'}}>Available Doctors</h2>
                {availableDoctors.length === 0 ? (
                  <div style={{color: '#888'}}>No doctors found for this disease.</div>
                ) : (
                  <ul style={{listStyle: 'none', padding: 0}}>
                    {availableDoctors.map((doc, idx) => (
                      <li key={idx} style={{marginBottom: '1.5rem', border: '1px solid #eee', borderRadius: '8px', padding: '1rem'}}>
                        <div style={{fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem'}}>{doc.name}</div>
                        <div style={{marginBottom: '0.5rem'}}>Specialist in: {doc.disease}</div>
                        <div style={{marginBottom: '0.5rem'}}>Available Slots:</div>
                        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                          {doc.slots.map((slot, sidx) => (
                            <button key={sidx} style={{background: selectedSlot === slot && selectedDoctor === doc ? '#e74c3c' : '#fbeee7', color: selectedSlot === slot && selectedDoctor === doc ? '#fff' : '#e74c3c', border: '1px solid #e74c3c', borderRadius: '6px', padding: '8px 18px', cursor: 'pointer', fontWeight: 500}}
                              onClick={() => { setSelectedDoctor(doc); setSelectedSlot(slot); }}>
                              {slot}
                            </button>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                {selectedDoctor && selectedSlot && !slotAllotted && (
                  <button style={{background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 32px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', marginTop: '1rem'}} onClick={() => setSlotAllotted(true)}>Allot Slot</button>
                )}
                {slotAllotted && (
                  <div style={{marginTop: '1.5rem', color: '#27ae60', fontWeight: 600, fontSize: '1.1rem'}}>Slot allotted successfully with {selectedDoctor.name} at {selectedSlot}!</div>
                )}
              </div>
            ) : null}
          </div>
        ) : showFindHospitals ? (
          <div style={{marginTop: '2rem', width: '100%', height: '80vh', background: '#fff', borderRadius: '14px', boxShadow: '0 2px 12px rgba(44,62,80,0.08)', overflow: 'hidden'}}>
            <iframe
              src="https://findclinic.onrender.com/"
              title="Find Hospitals"
              style={{width: '100%', height: '100%', border: 'none'}}
              allowFullScreen
            />
          </div>
        ) : showFreeDoctor ? (
          <div className="free-doctor-section" style={{marginTop: '2rem', background: '#fff', borderRadius: '14px', padding: '2.5rem 2rem', boxShadow: '0 2px 12px rgba(231,76,60,0.10)', border: '2px solid #e74c3c'}}>
            <h2 style={{color: '#e74c3c', marginBottom: '1.5rem'}}>Free Doctor & Symptom Checker</h2>
            <ul style={{fontSize: '1.15rem', margin: '1.5rem 0 2rem 1.2rem', color: '#e74c3c', fontWeight: 500}}>
              <li style={{marginBottom: '1.2rem'}}>🔍 <b>Search by Symptom</b> – Simply enter the symptoms you're experiencing (e.g., fever, cough, headache), and our system will suggest possible diseases.</li>
              <li style={{marginBottom: '1.2rem'}}>💊 <b>Get Medicine Suggestions</b> – Based on your symptoms and potential condition, we'll recommend over-the-counter (OTC) or common medicines you might consider.</li>
              <li>📚 <b>Learn More</b> – View brief information about the disease, its causes, symptoms, and when you should see a doctor.</li>
            </ul>
            <a href="https://ai-doctor-voicebot-9.onrender.com/" target="_blank" rel="noopener noreferrer">
              <button style={{background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '8px', padding: '16px 36px', fontSize: '1.15rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px rgba(231,76,60,0.10)'}}>Go to AI Doctor Voicebot</button>
            </a>
          </div>
        ) : (
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
          <div className="dashboard-card free-doctor-card" onClick={handleFreeDoctor} style={{cursor: 'pointer', background: 'linear-gradient(135deg, #fff 0%, #fbeee7 100%)', border: '2px solid #e74c3c'}}>
            <h3 style={{color: '#e74c3c'}}>Free Doctor</h3>
            <div className="card-content" style={{color: '#e74c3c'}}>
              <span className="big-doctor">🩺</span>
              <div>Find your illness & cure by symptoms</div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}