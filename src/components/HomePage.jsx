import React from 'react';
import './HomePage.css';
import manaliimg from '../assets/manali.jpg';
import goaimg from '../assets/goa.jpg'; 
import ladakhimg from '../assets/ladakh.jpg';

const HomePage = () => {

    
   const trips = [
  {
    id: 1,
    name: 'Manali Getaway',
    image: manaliimg,
    location: 'Himachal Pradesh',
  },
  {
    id: 2,
    name: 'Goa Beaches',
    image: goaimg,
    location: 'Goa',
  },
  {
    id: 3,
    name: 'Leh Ladakh Adventure',
    image: ladakhimg,
    location: 'Jammu & Kashmir',
  },
];


   const features = [
  {
    title: 'Instant Booking',
    description: 'Book trips in seconds with real-time availability.',
    icon: '⚡',
  },
  {
    title: '24/7 Live Support',
    description: 'Help is always available, day or night.',
    icon: '📞',
  },
  {
    title: 'Verified Drivers',
    description: 'Ride with peace of mind — all drivers are verified.',
    icon: '🧑‍✈️',
  },
  {
    title: 'Smart Navigation',
    description: 'GPS-enabled trips with real-time tracking.',
    icon: '🧭',
  },
  {
    title: 'Flexible Payments',
    description: 'Pay via UPI, Card, Wallet — your choice.',
    icon: '💳',
  },
  {
    title: 'Eco-Friendly Fleet',
    description: 'Choose electric options and reduce your footprint.',
    icon: '🌱',
  },
 {
    title: 'Community Driven',
    description: 'Join a community of travelers and share experiences.',
    icon: '🤝',
 },
 {
    title: 'Exclusive Offers',
    description: 'Get access to special deals and discounts.',
    icon: '🎉',
 }
];



  return (
    <>
    <div className="home-hero">
      <div className="hero-content">
        <h1 className="fade-in-left">yaatriGo</h1>
        <p className="fade-in-left delay-1">Explore the open road with us</p>
        <button className="explore-button fade-in-left delay-2">Explore trips</button>
      </div>
    </div>
    <div className="LoginSection fade-in-top">
      <button className="login-btn">Log In</button>
      <button className="signin-btn">Sign In</button>
    </div>



    <div className="trending-trips-section">
      <h2 className="section-title">🔥 Trending Trips</h2>
      <div className="trip-card-container">
        {trips.map((trip, index) => (
          <div
            className="trip-card fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
            key={trip.id}
          >
            <img src={trip.image} alt={trip.name} className="trip-image" />
            <div className="trip-info">
              <h3>{trip.name}</h3>
              <p>{trip.location}</p>
              <button className="see-trip-btn">See Trip</button>
            </div>
          </div>
        ))}
      </div>
    </div>



    <div className="why-choose-us-section">
      <h2 className="section-title">🚀 Why Choose <span id='yaatriGo-title'>yaatriGo</span> ? </h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            className="feature-card pop-in"
            style={{ animationDelay: `${index * 0.2}s` }}
            key={index}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

    </>
    ); 
};

export default HomePage;
