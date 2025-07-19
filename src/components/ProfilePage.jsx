import React, { useState } from "react";
import "./ProfilePage.css";

const mockTrips = [
  {
    id: 1,
    from: "Mumbai",
    to: "Pune",
    date: "2025-06-15",
    distance: 150,
    cost: 1200,
  },
  {
    id: 2,
    from: "Delhi",
    to: "Agra",
    date: "2025-05-10",
    distance: 230,
    cost: 2000,
  },
  {
    id: 3,
    from: "Bangalore",
    to: "Mysore",
    date: "2025-04-20",
    distance: 145,
    cost: 1100,
  },
];

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "+91 9876543210",
    location: "Mumbai, India",
    membershipSince: "2019",
    preferredVehicle: "Toyota Innova Crysta",
    totalSpend: 35000,
  });

  const [formData, setFormData] = useState(profile);

  const openEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };
  const closeEdit = () => setIsEditing(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveProfile = (e) => {
    e.preventDefault();
    setProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      {/* Profile Info */}
      <section className="profile-info">
        <div className="avatar-wrapper">
          <img
            src="https://i.pravatar.cc/160?img=58"
            alt="User Avatar"
            className="avatar"
          />
        </div>
        <h1 className="user-name">{profile.name}</h1>
        <p className="user-role">Premium Member</p>

        <div className="user-contact">
          <p>
            <span className="contact-label">Email:</span> {profile.email}
          </p>
          <p>
            <span className="contact-label">Phone:</span> {profile.phone}
          </p>
          <p>
            <span className="contact-label">Location:</span> {profile.location}
          </p>
          <p>
            <span className="contact-label">Member Since:</span> {profile.membershipSince}
          </p>
          <p>
            <span className="contact-label">Preferred Vehicle:</span> {profile.preferredVehicle}
          </p>
          <p>
            <span className="contact-label">Total Spend:</span> ₹{profile.totalSpend.toLocaleString()}
          </p>
        </div>

        <button onClick={openEdit} className="btn-primary edit-btn">
          Edit Profile
        </button>
      </section>

      {/* Trip History */}
      <section className="trip-history">
        <h2 className="stats-title">Trip History</h2>
        {mockTrips.length === 0 ? (
          <p className="no-trips">No trips found.</p>
        ) : (
          <table className="trips-table" aria-label="User trip history">
            <thead>
              <tr>
                <th>Date</th>
                <th>From</th>
                <th>To</th>
                <th>Distance (km)</th>
                <th>Cost (₹)</th>
              </tr>
            </thead>
            <tbody>
              {mockTrips.map((trip) => (
                <tr key={trip.id}>
                  <td>{trip.date}</td>
                  <td>{trip.from}</td>
                  <td>{trip.to}</td>
                  <td>{trip.distance}</td>
                  <td>{trip.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Edit Modal */}
      {isEditing && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="edit-profile-title">
          <div className="modal-content">
            <h2 id="edit-profile-title">Edit Profile</h2>
            <form onSubmit={saveProfile} className="edit-form">
              <label>
                Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Phone
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Location
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Member Since
                <input
                  name="membershipSince"
                  value={formData.membershipSince}
                  onChange={handleChange}
                  required
                  type="number"
                  min="1900"
                  max="2099"
                />
              </label>
              <label>
                Preferred Vehicle
                <input
                  name="preferredVehicle"
                  value={formData.preferredVehicle}
                  onChange={handleChange}
                />
              </label>
              <label>
                Total Spend (₹)
                <input
                  name="totalSpend"
                  value={formData.totalSpend}
                  onChange={handleChange}
                  type="number"
                  min="0"
                />
              </label>

              <div className="modal-buttons">
                <button type="submit" className="btn-primary">Save</button>
                <button type="button" onClick={closeEdit} className="btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
