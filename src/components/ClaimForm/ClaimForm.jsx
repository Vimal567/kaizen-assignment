import { useState } from "react";
import "./ClaimForm.css";

export default function ClaimForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    jobTitle: "",
    diagnosisDate: "",
    diagnosis: "",
    story: "",
    consent: false,
    verifyPerson: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Auto-resize the textarea after user types
    if (name === "story") {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data:", JSON.stringify(formData, null, 2));
  };

  return (
    <section className="claim-form">
      <div className="container">
        <h1>Claim Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              First Name *
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name *
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number *
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email ID *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="date-label">
              Date of Birth *
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Job Title *
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </label>
            <label className="date-label">
              Date of Diagnosis *
              <input
                type="date"
                name="diagnosisDate"
                value={formData.diagnosisDate}
                onChange={handleChange}
                required
              />
            </label>
            <div className="dropdown-wrapper">
              <label htmlFor="diagnosis">Type of Diagnosis*</label>
              <select
                id="diagnosis"
                name="diagnosis"
                value={formData.diagnosis}
                onChange={handleChange}
                required
              >
                <option value="">Select a diagnosis</option>
                <option value="mesothelioma">Mesothelioma</option>
                <option value="lung_cancer">Lung Cancer</option>
                <option value="asbestosis">Asbestosis</option>
                <option value="other">Other</option>
              </select>
            </div>
            <label className="form-full">
              Tell us your story (optional)
              <textarea
                name="story"
                rows="4"
                value={formData.story}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="consent">
            <input
              type="checkbox"
              id="policy"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <label htmlFor="policy">
              I agree to the <span> privacy policy</span> and <span> disclaimer</span> and give my express
              written consent to be contacted regarding my case options. I
              understand that I may be contacted using automatic dialing
              equipment. Message and data rates may apply. My consent does not
              require purchase. This is Legal advertising.
            </label>
          </div>

          <div className="consent">
            <input
              type="checkbox"
              id="verifyPerson"
              name="verifyPerson"
              checked={formData.verifyPerson}
              onChange={handleChange}
              required
            />
            <label htmlFor="verifyPerson">
              Please check this box to verify you’re a person.
            </label>
          </div>

          <button type="submit">Start your claim now</button>
        </form>
      </div>
    </section>
  );
}
