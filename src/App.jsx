import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import DocumentClassification from "./pages/DocumentClassification.jsx";
import RuleCreation from "./pages/RuleCreation.jsx";
import NetworkTesting from "./pages/NetworkTesting.jsx";
import ChatbotCreation from "./pages/ChatbotCreation.jsx";
import ChatbotTesting from "./pages/ChatbotTesting.jsx";
import Reporting from "./pages/Reporting.jsx";
import Integration from "./pages/Integration.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/document-classification" element={<DocumentClassification />} />
        <Route exact path="/rule-creation" element={<RuleCreation />} />
        <Route exact path="/network-testing" element={<NetworkTesting />} />
        <Route exact path="/chatbot-creation" element={<ChatbotCreation />} />
        <Route exact path="/chatbot-testing" element={<ChatbotTesting />} />
        <Route exact path="/reporting" element={<Reporting />} />
        <Route exact path="/integration" element={<Integration />} />
      </Routes>
    </Router>
  );
}

export default App;