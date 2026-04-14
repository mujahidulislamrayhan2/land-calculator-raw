import React from "react";
import "./about.css"

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">

        <h1>About Land Calculator</h1>

        <p>
          Land Calculator is a simple and user-friendly web tool designed to
          help users quickly calculate land measurements with accuracy. It
          supports both Bangla (বাংলা) and English numbers, making it ideal for
          users in Bangladesh.
        </p>

        <h2>📊 Why Use This Tool?</h2>
        <ul>
          <li>✔ Fast and accurate calculations</li>
          <li>✔ Supports Bangla & English numbers</li>
          <li>✔ Easy to use for everyone</li>
          <li>✔ No complex setup required</li>
        </ul>

        <h2>📱 Works on Mobile</h2>
        <p>
          This tool is fully responsive and works smoothly on mobile phones,
          tablets, and desktops. You can use it anytime, anywhere.
        </p>

        <h2>🔐 Privacy Policy</h2>
        <p>
          We respect your privacy. This website does not store, track, or share
          any personal data. All calculations are done instantly in your browser.
        </p>

        <h2>🚀 Future Updates</h2>
        <ul>
          <li>🔹 More land unit conversion options</li>
          <li>🔹 Improved user interface</li>
          <li>🔹 Calculation history feature</li>
          <li>🔹 Additional tools for land management</li>
        </ul>

        <h2>👨‍💻 Developer</h2>
        <p>
          Developed by <strong>Mujahidul Islam Rayhan</strong>, focused on solving
          real-life problems using simple and efficient web applications.
        </p>

        <h2>📩 Contact</h2>
        <p>Feel free to reach out for suggestions or feedback:</p>

        <ul>
          <li>
            📧 Email: 
            <a href="mailto:mujahudulislamrayhan2@gmail.com">
              mujahudulislamrayhan2@gmail.com
            </a>
          </li>

          <li>
            💬 WhatsApp: 
            <a href="https://wa.me/8801882268793" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </li>

          <li>
            🌐 Facebook: 
            <a href="https://www.facebook.com/mujahidulai" target="_blank" rel="noreferrer">
              Visit Facebook Page
            </a>
          </li>
        </ul>

      </div>
    </div>
  );
}