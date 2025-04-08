// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import Joinus from './jsx/Joinus';

// function App() {
//   return (
//     <div className="App">
//       <Joinus />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./jsx/NavBar";
import { Banner } from "./jsx/Banner";
import { Skills } from "./jsx/Skills";
import { Projects } from "./jsx/Projects";
import { Contact } from "./jsx/Contact";
import { Footer } from "./jsx/Footer";
import Joinus from "./jsx/Joinus"; // Joinus 컴포넌트 임포트

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Joinus 페이지는 헤더와 푸터 없이 렌더링 */}
          <Route path="/joinus" element={<Joinus />} />
          
          {/* 나머지 페이지는 헤더와 푸터 포함 */}
          <Route path="/" element={
            <>
              <NavBar />
              <Banner />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
