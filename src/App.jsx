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
import UserManagement from "./pages/UserManagement.jsx";
import DocumentManagement from "./pages/DocumentManagement.jsx";
import ExtractionResults from "./pages/ExtractionResults.jsx";

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-grow p-4">
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
            <Route exact path="/user-management" element={<UserManagement />} />
            <Route exact path="/document-management" element={<DocumentManagement />} />
            <Route exact path="/extraction-results" element={<ExtractionResults />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;