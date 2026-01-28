import { useEffect } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import AboutUsPage from "../About/About";
import AgamasTranslationsPage from "../AgamasTranslation/AgamaTranslation";
import BrickHouseProjectPage from "../BrickHouse/BrickHouse";
import ChildEducationCentresPage from "../ChildEducation/ChildEducation";
import ContactPage from "../ContactPage/ContactPage";
import FarmerEmpowermentPage from "../FarmerEmpowerment/FarmerEmpowerment";
import Footer from "../Footer/Footer";
import GalleryPage from "../Gallery/Gallery";
import CTA from "../Home/CTA";
import Home from "../Home/Home";
import ImpactStoriesPage from "../ImpactStories/ImpactStories";
import InternshipProgramsPage from "../Internship/Internship";
import JoinUs from "../JoinUs/JoinUs";
import Meditation from "../Meditation/Meditation";
import Navbar from "../Navbar/Navbar";
import ODOCPage from "../ODOC/ODOC";
import PalmLeafSutraPage from "../PalmLeafSutra/PalmLeafSutra";
import RuralHealthPage from "../RuralHealthAwareness/RuralHealth";
import WomenEmpowermentPage from "../WomenEmpowerment/WomenEmpowerment";

const AllRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/brick-house" element={<BrickHouseProjectPage />} />
          <Route path="/impact-stories" element={<ImpactStoriesPage />} />
          <Route
            path="/palm-leaf-sutra-printing"
            element={<PalmLeafSutraPage />}
          />
          <Route
            path="/agamas-translations"
            element={<AgamasTranslationsPage />}
          />
          <Route
            path="/internships-education"
            element={<InternshipProgramsPage />}
          />
          <Route path="/women-empowerment" element={<WomenEmpowermentPage />} />
          <Route
            path="/farmer-empowerment"
            element={<FarmerEmpowermentPage />}
          />
          <Route
            path="/child-education"
            element={<ChildEducationCentresPage />}
          />
          <Route path="/onedollar-onechild" element={<ODOCPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/rural-health-awareness" element={<RuralHealthPage />} />
        </Routes>
        <Outlet />
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default AllRoutes;
