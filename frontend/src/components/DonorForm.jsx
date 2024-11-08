import React, { useState } from "react";
import axios from "../services/api";

const DonorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    currentLocation: "",
    cookedTime: "",
    expireTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/donor/donate", formData);
      alert(response.data.message);
    } catch (error) {
      alert("Error donating food!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        margin: 0,
      }}
    >
      <div
        style={{
          padding: "30px",
          maxWidth: "400px",
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#ffffff",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            textAlign: "center",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Donate Food
        </h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {/** Name Field */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "14px", color: "#666", fontWeight: "500" }}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "all 0.3s ease",
                fontFamily: "'Roboto', sans-serif",
              }}
              placeholder="Enter your name"
              required
            />
          </div>

          {/** Contact Number Field */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "14px", color: "#666", fontWeight: "500" }}>Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "all 0.3s ease",
                fontFamily: "'Roboto', sans-serif",
              }}
              placeholder="Enter your contact number"
              required
            />
          </div>

          {/** Current Location Field */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "14px", color: "#666", fontWeight: "500" }}>Current Location</label>
            <input
              type="text"
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "all 0.3s ease",
                fontFamily: "'Roboto', sans-serif",
              }}
              placeholder="Enter your current location"
              required
            />
          </div>

          {/** Cooked Time Field */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "14px", color: "#666", fontWeight: "500" }}>Cooked Time</label>
            <input
              type="datetime-local"
              name="cookedTime"
              value={formData.cookedTime}
              onChange={handleChange}
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "all 0.3s ease",
                fontFamily: "'Roboto', sans-serif",
              }}
              required
            />
          </div>

          {/** Expire Time Field */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "14px", color: "#666", fontWeight: "500" }}>Expire Time</label>
            <input
              type="datetime-local"
              name="expireTime"
              value={formData.expireTime}
              onChange={handleChange}
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "all 0.3s ease",
                fontFamily: "'Roboto', sans-serif",
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "12px 20px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: "#ff8a00",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              textAlign: "center",
              transition: "background-color 0.3s ease",
            }}
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonorForm;
