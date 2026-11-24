
import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div>
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;

                