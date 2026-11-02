
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

// LMS Components
import Sidebar from "./components/LMS/Sidebar";
import Header from "./components/LMS/Header";
import Dashboard from "./components/LMS/Dashboard";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  // LMS states
  const [showLMS, setShowLMS] = React.useState(true);
  const [activePage, setActivePage] = React.useState("Dashboard");

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // LMS Portal
  if (showLMS) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex items-center justify-between bg-indigo-950 px-5 py-3 text-white">
          <span className="text-xl font-bold">LearnHub</span>

          <button
            onClick={() => setShowLMS(false)}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium hover:bg-indigo-500"
          >
            View Shopsy
          </button>
        </div>

        <div className="flex min-w-0 flex-col md:flex-row">
          <Sidebar
            activePage={activePage}
            onNavigate={setActivePage}
          />

          <div className="min-w-0 flex-1">
            <Header />
            <Dashboard activePage={activePage} />
          </div>
        </div>
      </div>
    );
  }

  // Original Shopsy UI — preserved
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="flex justify-end bg-indigo-950 px-5 py-3">
        <button
          onClick={() => setShowLMS(true)}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
        >
          Open LMS Portal
        </button>
      </div>

      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
      />
    </div>
  );
};

export default App;
