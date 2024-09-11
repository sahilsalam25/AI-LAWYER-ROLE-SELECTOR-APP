import AiLawyerForm from "./AiLawyerForm";
import NextPage from "./NextPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AiLawyerForm />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </Router>
  );
}


export default App;


