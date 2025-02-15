import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/Contact';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Meta
        title="Kontakt | Stolica - Zarządzanie Nieruchomościami"
        description="✓ Profesjonalne zarządzanie nieruchomościami w Warszawie ✓ Bezpłatna wycena usług ✓ Szybka reakcja na zgłoszenia ✓ Indywidualne podejście ✓ Umów spotkanie już dziś!"
      />
      <Header />
      <div className="pt-20">
        <div className="bg-[#DAA520] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Kontakt z zarządcą nieruchomości</h1>
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;