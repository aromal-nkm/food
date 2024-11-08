import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Food Saver App</h1>
      <div style={styles.navLinks}>
        {["Home", "Donor", "Collection", "Login"].map((link, index) => (
          <Link
            key={index}
            to={link.toLowerCase()}
            style={
              hoveredLink === link
                ? { ...styles.link, ...styles.linkHover }
                : styles.link
            }
            onMouseEnter={() => handleMouseEnter(link)}
            onMouseLeave={handleMouseLeave}
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw", // Ensure full width
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between", // Space between logo and links
    alignItems: "center", // Center vertically
    padding: "0.8rem 2rem", // Padding inside the navbar
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    overflowX: "hidden", // Prevent content overflow
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  navLinks: {
    display: "flex",
    gap: "1.5rem", // Space between each link
    flexWrap: "wrap", // Wrap links if the screen is too small
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "600",
    padding: "0.6rem 1rem",
    borderRadius: "10px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  linkHover: {
    backgroundColor: "#fff",
    color: "#e52e71",
    transform: "scale(1.1)",
  },
};

export default Navbar;
