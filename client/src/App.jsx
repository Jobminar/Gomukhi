import React, { Suspense, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Import your Header component
import Footer from "./components/Footer";
import StickyFooter from "./components/StickyFooter";
import "./App.css"; // Ensure your CSS is correctly imported

// Lazy load the pages (optional for performance optimization)
const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const About = React.lazy(() => import("./pages/About"));
const NarsampallyLayoutPage = React.lazy(() =>
  import("./pages/NarsampallyLayoutPage"),
);
const PochannapetLayoutPage = React.lazy(() =>
  import("./pages/PochannapetLayoutPage"),
);

const NotFound = () => {
  // Display a message or redirect to the main route as needed
  return (
    <div>
      <h1>404: Not Found</h1>
      <p>The page you requested could not be found.</p>
      <a href="/">Go to Home Page</a>
    </div>
  );
};

const App = () => {
  const routeComponents = useMemo(
    () => [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/narsampally-layout", element: <NarsampallyLayoutPage /> },
      { path: "/pochannapet-layout", element: <PochannapetLayoutPage /> },
    ],
    [],
  );

  return (
    <Router>
      <Header /> {/* No need to pass navigate prop */}
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routeComponents.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route path="*" element={<NotFound />} /> {/* Fallback route */}
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <StickyFooter />
    </Router>
  );
};

export default App;
