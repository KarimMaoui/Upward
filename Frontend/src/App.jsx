import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ServicesB2B from "./pages/ServicesB2B";
import ServicesB2C from "./pages/ServicesB2C";
import HowItWorks from "./pages/HowItWorks";
import Tutors from "./pages/Tutors";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import GDPR from "./pages/GDPR";
import BookSession from "./pages/BookSession";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services-b2b" element={<ServicesB2B />} />
          <Route path="/services-b2c" element={<ServicesB2C />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/book-session" element={<BookSession />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
