import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";

export const ThemeContext = createContext({
  theme: "",
  setTheme: () => {},
});

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
    }
  };

  useEffect(() => {
    localStorage.setItem("mode", mode);
    document.body.className = mode;
  }, [mode]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2300);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
          <div className="App" id={mode}>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container my-4">
              <TextForm
                alert={showAlert}
                heading="TextUtils - Word Counter | Character Counter | Extra Space Remover"
              />
            </div>
            <Footer />
          </div>
        </ThemeContext.Provider>
      ),
    },
    {
      path: "/about",
      element: (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
          <div className="App" id={mode}>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container my-4">
              <About />
            </div>
            <Footer />
          </div>
        </ThemeContext.Provider>
      ),
    },
  ]);

  // Alternative way for routing:
  // const routeDefn = createRoutesFromElements (
  //   <Route>
  //     <Route exact path = '/' element = {<TextForm />} />
  //   </Route>
  // )

  // const router2 = createBrowserRouter(routeDefn)

  return <RouterProvider router={router} />;
}

export default App;
