import React, { useState } from "react";
import "../css/Joinus.css";

const Joinus = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className={`joinus-container ${isRightPanelActive ? "right-panel-active" : ""}`} id="main">
      {/* 회원가입 */}
      <div className="joinus-sign-up">
        <form action="inc/signup.php" method="POST" className="joinus-form">
          <h1 className="joinus-h1">Create Account</h1>
          <div className="joinus-social-container">
            <a href="https://www.facebook.com" className="joinus-social"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.google.com" className="joinus-social"><i className="fab fa-google-plus-g"></i></a>
            <a href="https://www.linkedin.com" className="joinus-social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p className="joinus-p">or use your email for registration</p>
          <input className="joinus-input" type="text" name="name" placeholder="Name" required />
          <input className="joinus-input" type="email" name="email" placeholder="Email" required />
          <input className="joinus-input" type="password" name="pwd" placeholder="Password" required />
          <button className="joinus-button" type="submit">Sign Up</button>
        </form>
      </div>

      {/* 로그인 */}
      <div className="joinus-sign-in">
        <form action="inc/login.php" method="POST" className="joinus-form">
          <h1 className="joinus-h1">Sign in</h1>
          <div className="joinus-social-container">
            <a href="https://www.facebook.com" className="joinus-social"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.google.com" className="joinus-social"><i className="fab fa-google-plus-g"></i></a>
            <a href="https://www.linkedin.com" className="joinus-social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p className="joinus-p">or use your email for registration</p>
          <input className="joinus-input" type="email" name="email" placeholder="Email" required />
          <input className="joinus-input" type="password" name="pwd" placeholder="Password" required />
          <button className="joinus-button" type="submit">Sign In</button>
        </form>
      </div>

      {/* 오버레이 */}
      <div className="joinus-overlay-container">
        <div className="joinus-overlay">
          <div className="joinus-overlay-left">
            <h1 className="joinus-h1">Welcome Back!</h1>
            <p className="joinus-p">To keep connected with us please login with your personal info</p>
            <button className="joinus-button joinus-signIn" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
          </div>
          <div className="joinus-overlay-right">
            <h1 className="joinus-h1">Hello, Friend!</h1>
            <p className="joinus-p">Enter your personal details and start your journey with us</p>
            <button className="joinus-button joinus-signUp" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
