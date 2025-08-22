import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Feed from "./pages/Feed";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/NavBar/NavBar";

function App() {
  const [user, setUser] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Router>
        <Navbar user={user} setUser={setUser} />

        <Routes>
          <Route path="/" element={<Feed user={user} setUser={setUser} />} />
          <Route
            path="/signin"
            element={
              <div className="flex justify-center items-center h-[calc(100vh-64px)]">
                <SignIn setUser={setUser} />
              </div>
            }
          />

          <Route
            path="/signup"
            element={
              <div className="flex justify-center items-center h-[calc(100vh-90px)]">
                <SignUp setUser={setUser} />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
