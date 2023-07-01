import "./App.css";
import AddTestimonials from "./components/Testimonials/AddTestimonials";
import TestimonialContent from "./components/Testimonials/TestimonialContent";
import AboutContent from "./components/about/AboutContent";
import AddAbout from "./components/about/AddAbout";
import AddFAQs from "./components/faqs/AddFAQs";
import FAQsContent from "./components/faqs/FAQsContent";
import HomeContent from "./components/home/HomeContent";
import MiniDrawer from "./components/miniDrawer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <MiniDrawer>
      {/* All Routes are included in this compoonent */}
      <Routes>
        <Route path="/home" element={<HomeContent />} />
        <Route path="/about" element={<AboutContent />} />
        <Route path="/testimonials" element={<TestimonialContent />} />
        <Route path="/faqs" element={<FAQsContent />} />
        <Route path="/faqs/add" element={<AddFAQs />} />
        <Route path="/testimonials/add" element={<AddTestimonials />} />
        <Route path="/about/add" element={<AddAbout />} />
      </Routes>
    </MiniDrawer>
  );
}

export default App;
