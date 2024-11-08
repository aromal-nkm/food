import React, { useState } from "react";
import axios from "../services/api";

const CollectionForm = () => {
  const [formData, setFormData] = useState({
    donorId: "",
    teamId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/collection/complete/${formData.donorId}`, {
        teamId: formData.teamId,
      });
      alert(response.data.message);
    } catch (error) {
      alert("Error completing collection!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input type="text" name="donorId" placeholder="Donor ID" onChange={handleChange} required />
      <input type="text" name="teamId" placeholder="Team ID" onChange={handleChange} required />
      <button type="submit">Mark as Collected</button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
    margin: "auto",
  },
};

export default CollectionForm;
