import React, { useState } from "react";
import "./ContactUs.css"; // Assuming you have a CSS file for styling

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!form.phone.trim() || !/^\d{10,12}$/.test(form.phone)) errs.phone = "Valid phone number required";
    if (!form.message.trim()) errs.message = "Message cannot be empty";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Here you can integrate API call or email sending logic
    setSuccess(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="cg-contact-container">
      <h1 className="cg-title">Contact YaatriGo</h1>
      <p className="cg-desc">
        We’d love to hear from you! Whether you’re planning a trip or have questions, reach out anytime.
      </p>

      <div className="cg-info-wrapper">
        <div className="cg-contact-info">
          <h2>Our Office</h2>
          <address>
            123 Yaatri Street,<br />
            Mumbai, Maharashtra 400001<br />
            India
          </address>
          <p><strong>Phone:</strong> <a href="tel:+911234567890">+91 123 456 7890</a></p>
          <p><strong>Email:</strong> <a href="mailto:contact@yaatrigo.in">contact@yaatrigo.in</a></p>
          <div className="cg-social-links">
            <a href="https://facebook.com/yaatrigo" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
            <a href="https://twitter.com/yaatrigo" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
            <a href="https://instagram.com/yaatrigo" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          </div>
        </div>

        <div className="cg-map-wrapper">
          <iframe
            title="YaatriGo Location"
            src="https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>

      <form className="cg-contact-form" onSubmit={handleSubmit} noValidate>
        {success && <div className="cg-success-msg">Thank you for reaching out! We'll get back soon.</div>}

        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? "cg-input-error" : ""}
            placeholder="Your full name"
          />
          {errors.name && <span className="cg-error-text">{errors.name}</span>}
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "cg-input-error" : ""}
            placeholder="you@example.com"
          />
          {errors.email && <span className="cg-error-text">{errors.email}</span>}
        </label>

        <label htmlFor="phone">
          Phone Number
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={errors.phone ? "cg-input-error" : ""}
            placeholder="10-12 digit number"
          />
          {errors.phone && <span className="cg-error-text">{errors.phone}</span>}
        </label>

        <label htmlFor="message">
          Message
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className={errors.message ? "cg-input-error" : ""}
            placeholder="Write your message here..."
          ></textarea>
          {errors.message && <span className="cg-error-text">{errors.message}</span>}
        </label>

        <button type="submit" className="cg-submit-btn">Send Message</button>
      </form>
    </section>
  );
}
