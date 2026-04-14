// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import "./contact.css"

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.send(
//       "YOUR_SERVICE_ID",
//       "YOUR_TEMPLATE_ID",
//       {
//         from_name: form.name,
//         from_email: form.email,
//         message: form.message,
//       },
//       "YOUR_PUBLIC_KEY"
//     )
//     .then(() => {
//       alert("✅ Message sent successfully!");
//       setForm({ name: "", email: "", message: "" });
//     })
//     .catch(() => {
//       alert("❌ Failed to send message");
//     });
//   };

//   return (
//     <form onSubmit={sendEmail}>
//       <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
//       <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
//       <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required />
//       <button type="submit">Send Message</button>
//     </form>
//   );
// }



















import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY  
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      alert("❌ Failed to send message");
      console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    });
    
  };
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Message sent! (Demo only)");
  // };

  return (
    <div className="contact-page">
      <div className="contact-container">

        <h1>Contact Us</h1>
        <p>Feel free to reach out anytime 👇</p>

        {/* Contact Form */}
        <form onSubmit={sendEmail}>
       <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
     <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </form>

        {/* Direct Contact Info */}
        <div className="contact-info">
          <h2>Or contact directly:</h2>

          <p>
            📧 Email:{" "}
            <a href="mailto:mujahudulislamrayhan2@gmail.com">
              mujahudulislamrayhan2@gmail.com
            </a>
          </p>

          <p>
            💬 WhatsApp:{" "}
            <a href="https://wa.me/8801882268793" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </p>

          <p>
            🌐 Facebook:{" "}
            <a href="https://www.facebook.com/mujahidulai" target="_blank" rel="noreferrer">
              Visit Facebook Page
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}