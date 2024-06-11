import Texteditor from "./Texteditor";
import {
  BrowserRouter as Router,
  Routes, //Routes are the replacement of the Switch
  Route,
  Navigate, // replacemrnt of the Red
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} />} />
        <Route path="/documents/:id" element={<Texteditor />} />
      </Routes>
    </Router>
  );
}

export default App;
