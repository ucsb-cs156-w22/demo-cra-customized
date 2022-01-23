import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import LinkPage from "main/pages/LinkPage";
import ActionOnePage from "main/pages/actions/ActionOne";
import ActionTwoPage from "main/pages/actions/ActionTwo";
import ActionThreePage from "main/pages/actions/ActionThree";
import ActionFourPage from "main/pages/actions/ActionFour";

import "bootstrap/dist/css/bootstrap.css";

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/link" element={<LinkPage />} />
          <Route path="/action/one" element={<ActionOnePage />} />
          <Route path="/action/two" element={<ActionTwoPage />} />
          <Route path="/action/three" element={<ActionThreePage />} />
          <Route path="/action/four" element={<ActionFourPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
