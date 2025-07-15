import "./DetailsSection.css";
import confidentIcon from "../../assets/confidence-icon.png";
import checkIcon from "../../assets/check-icon.png";
import investigationIcon from "../../assets/investigation-icon.png";

export default function DetailsSection() {
  return (
    <section className="details-section">
      {/* Review container */}
      <div className="review-container">
        <div className="side-text">We are here <br /> to help!</div>

        <div className="circle-container">
          <svg viewBox="0 0 200 200" className="circle-svg">
            <defs>
              <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
            </defs>
            <text fill="#F5E7DA" fontSize="20" fontFamily="sans-serif">
              <textPath href="#circlePath" startOffset="30%">
                ONLY 6 SLOTS LEFT
              </textPath>
            </text>
          </svg>
        </div>

        <div className="glassy-container">
          <h1>Free <br /> Case <br /> Review</h1>
          <ul>
            <li>
              <span className="confidence">
                <img src={confidentIcon} alt="Confidence" />
              </span>
              100% Confidential
            </li>
            <li>
              <span className="fee">
                <img src={checkIcon} alt="No win, no fee" />
              </span>
              No Win, No Fee
            </li>
            <li>
              <span className="investigation">
                <img src={investigationIcon} alt="Investigation" />
              </span>
              Free Case Evaluation
            </li>
          </ul>
        </div>

        <div className="contact-us">
          <button type="button">Contact us</button>
          <button type="button">&gt;</button>
        </div>
      </div>

      {/* Card container */}
      <div className="card-container">
        <h1 className="question">Have you or a loved one been affected by Mesothelioma?</h1>
        <p>As a woman, you've carried the weight of care, love, and resilience. Now it’s time someone stands with you.</p>
        <ul className="hero-list">
          <li>Secondary Asbestos exposure is common</li>
          <li>Misdiagnosis delays are more frequent in women</li>
          <li>Women have won significant legal settlements</li>
        </ul>
      </div>
    </section>
  );
}