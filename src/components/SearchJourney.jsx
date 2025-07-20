import React, { useState } from "react";
import "./SearchJourney.css";
import {
  FaMapMarkerAlt,
  FaCarSide,
  FaUserFriends,
  FaRupeeSign,
  FaFilter,
} from "react-icons/fa";
import suvimg from "../assets/suv.jpg";
import sedanimg from "../assets/sedan.jpg";
import convertibleimg from "../assets/convertible.jpg";

import { NavLink } from "react-router-dom";

const tripsData = [
  {
    id: 1,
    destination: "Manali",
    price: 4500,
    carType: "SUV",
    people: 5,
    image: suvimg, // Assuming you have an image for SUV
  },
  {
    id: 2,
    destination: "Jaipur",
    price: 3800,
    carType: "Sedan",
    people: 4,
    image: sedanimg, // Assuming you have an image for SUV
  },
  {
    id: 3,
    destination: "Goa",
    price: 6000,
    carType: "Convertible",
    people: 2,
    image: convertibleimg, // Assuming you have an image for SUV
  },
  // Add more trips as needed
];

function SearchTrips() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    carType: "",
    price: "",
    people: "",
  });

  const toggleFilters = () => setShowFilters(!showFilters);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    setShowFilters(false);
  };

  const filteredTrips = tripsData.filter((trip) => {
    const matchesSearch = trip.destination
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCar = !filters.carType || trip.carType === filters.carType;
    const matchesPrice =
      !filters.price || trip.price <= parseInt(filters.price);
    const matchesPeople =
      !filters.people || trip.people >= parseInt(filters.people);
    return matchesSearch && matchesCar && matchesPrice && matchesPeople;
  });

  return (
    <div className="page-container">
      <div className="search-container">
        <div className="search-bar">
          <div className="input-group">
            <FaMapMarkerAlt className="icon" />
            <input
              type="text"
              placeholder="Search your destination..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="search-btn">Search</button>
          <button className="filter-btn" onClick={toggleFilters}>
            <FaFilter className="icon" />
            Filter
          </button>
        </div>
      </div>

      <div className={`filters-drawer ${showFilters ? "open" : ""}`}>
        <div className="filters-header">
          <h2>Filters</h2>
          <button className="close-btn" onClick={toggleFilters}>
            ×
          </button>
        </div>
        <div className="filter-item">
          <label>
            <FaCarSide className="input-icon" /> Car Type
          </label>
          <select
            name="carType"
            onChange={handleFilterChange}
            value={filters.carType}
          >
            <option value="">All</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Convertible">Convertible</option>
          </select>
        </div>
        <div className="filter-item">
          <label>
            <FaRupeeSign className="input-icon" /> Max Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="₹ Max"
            onChange={handleFilterChange}
            value={filters.price}
          />
        </div>
        <div className="filter-item">
          <label>
            <FaUserFriends className="input-icon" /> People
          </label>
          <input
            type="number"
            name="people"
            placeholder="Min people"
            onChange={handleFilterChange}
            value={filters.people}
          />
        </div>
        <button className="apply-filters" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>

      <div className="results-section">
        {filteredTrips.length === 0 ? (
          <div className="no-results">No trips found.</div>
        ) : (
          <div className="cards-container">
            {filteredTrips.map((trip) => (
              <div className="trip-card" key={trip.id}>
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="trip-image"
                />
                <div className="card-content">
                  <h3>{trip.destination}</h3>
                  <p>₹{trip.price} / person</p>
                  <div className="trip-details">
                    {trip.carType} | Up to {trip.people} people
                  </div>
                </div>
                <NavLink to="/book" className="book-car-btn">
  <span className="icon">🚗</span>
  <span className="label">Book</span>
</NavLink>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchTrips;
