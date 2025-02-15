import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import Meta from './components/Meta';
import Header from './components/Header';
import Hero from './components/Hero';
import CostCalculator from './components/CostCalculator';
import About from './components/About';
import ServiceArea from './components/ServiceArea';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FAQ from './pages/FAQ';
import ContactPage from './pages/Contact';
import Blog from './pages/Blog';
import DeveloperServices from './pages/developers/DeveloperServices';
import DeveloperBenefits from './pages/developers/DeveloperBenefits';
import DeveloperProcess from './pages/developers/DeveloperProcess';
import ConsultingOptimization from './pages/services/ConsultingOptimization';
import BuildingInspections from './pages/services/BuildingInspections';
import RentalManagement from './pages/services/RentalManagement';
import FiveYearInspections from './pages/services/FiveYearInspections';
import PropertyManagement from './pages/services/PropertyManagement';
import CommunityManagement from './pages/services/CommunityManagement';
import BuildingAdministration from './pages/services/BuildingAdministration';
import CommunityServices from './pages/communities/CommunityServices';
import PrivateServices from './pages/clients/PrivateServices';
import CommercialServices from './pages/clients/CommercialServices';
import BusinessServices from './pages/clients/BusinessServices';
import DeveloperOffer from './pages/DeveloperOffer';
import BlogPost from './pages/BlogPost';
import AdminBlog from './pages/admin/AdminBlog';
import Login from './pages/admin/Login';
import EditPost from './pages/admin/EditPost';
import MediaManager from './pages/admin/MediaManager';
import Settings from './pages/admin/Settings';
import Users from './pages/admin/Users';
import AuthGuard from './components/AuthGuard';
import AdminLayout from './components/AdminLayout';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Meta 
        title="Zarządzanie Nieruchomościami Warszawa | Profesjonalny Zarządca | Stolica"
        description="Profesjonalne zarządzanie nieruchomościami w Warszawie. 15 lat doświadczenia, redukcja kosztów do 20%. Certyfikowani zarządcy, wsparcie 24/7. Darmowa wycena ➤"
      />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Header />
              <Hero />
              <About />
              <Services />
              <ServiceArea />
              <WhyUs />
              <CostCalculator />
              <Testimonials />
              <Footer />
            </div>
          }
        />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cennik" element={<Pricing />} />
        <Route path="/regulamin" element={<Terms />} />
        <Route path="/polityka-prywatnosci" element={<Privacy />} />
        <Route path="/oferta/deweloperzy" element={<DeveloperOffer />} />
        <Route path="/oferta/deweloperzy/uslugi" element={<DeveloperServices />} />
        <Route path="/oferta/deweloperzy/korzysci" element={<DeveloperBenefits />} />
        <Route path="/oferta/deweloperzy/proces" element={<DeveloperProcess />} />
        <Route path="/uslugi/zarzadzanie-nieruchomosciami" element={<PropertyManagement />} />
        <Route path="/uslugi/obsluga-wspolnot-mieszkaniowych" element={<CommunityManagement />} />
        <Route path="/uslugi/administrowanie-budynkami" element={<BuildingAdministration />} />
        <Route path="/uslugi/zarzadzanie-najmem" element={<RentalManagement />} />
        <Route path="/uslugi/doradztwo-i-optymalizacje" element={<ConsultingOptimization />} />
        <Route path="/uslugi/przeglady-budowlane" element={<BuildingInspections />} />
        <Route path="/uslugi/przeglady-piecioletnie" element={<FiveYearInspections />} />
        <Route path="/oferta/wspolnoty-mieszkaniowe" element={<CommunityServices />} />
        <Route path="/oferta/dla-osob-prywatnych" element={<PrivateServices />} />
        <Route path="/oferta/dla-komercji" element={<CommercialServices />} />
        <Route path="/oferta/dla-biznesu" element={<BusinessServices />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/blog" element={
          <AuthGuard>
            <AdminLayout>
              <AdminBlog />
            </AdminLayout>
          </AuthGuard>
        } />
        <Route path="/admin/blog/new" element={
          <AuthGuard>
            <AdminLayout>
              <EditPost />
            </AdminLayout>
          </AuthGuard>
        } />
        <Route path="/admin/blog/edit/:id" element={
          <AuthGuard>
            <AdminLayout>
              <EditPost />
            </AdminLayout>
          </AuthGuard>
        } />
        <Route path="/admin/media" element={
          <AuthGuard>
            <AdminLayout>
              <MediaManager />
            </AdminLayout>
          </AuthGuard>
        } />
        <Route path="/admin/settings" element={
          <AuthGuard>
            <AdminLayout>
              <Settings />
            </AdminLayout>
          </AuthGuard>
        } />
        <Route path="/admin/users" element={
          <AuthGuard>
            <AdminLayout>
              <Users />
            </AdminLayout>
          </AuthGuard>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
    </Router>
  );
};

export default App;