export default function ClaimForm() {
  return (
    <section className="claim-form">
      <div className="container">
        <h2>Claim Form</h2>
        <form>
          <div className="form-grid">
            <label>
              First Name *
              <input type="text" name="firstName" required />
            </label>
            <label>
              Last Name *
              <input type="text" name="lastName" required />
            </label>
            <label>
              Phone Number *
              <input type="tel" name="phone" required />
            </label>
            <label>
              Email ID *
              <input type="email" name="email" required />
            </label>
            <label>
              Date of Birth *
              <input type="date" name="dob" required />
            </label>
            <label>
              Job Title *
              <input type="text" name="jobTitle" required />
            </label>
            <label>
              Type of Diagnosis *
              <input type="text" name="diagnosisType" required />
            </label>
            <label>
              Date of Diagnosis *
              <input type="date" name="diagnosisDate" required />
            </label>
            <label className="form-full">
              Tell us your story (optional)
              <textarea name="story" rows="4" />
            </label>
          </div>
          <label>
            <input type="checkbox" name="consent" required /> I agree to the privacy policy and disclaimer and give my express written consent to be contacted regarding my case options.
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}