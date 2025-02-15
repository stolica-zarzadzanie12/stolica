import React from 'react';
import { ClipboardList, Building2, Users2, FileCheck, Settings, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

const DeveloperProcess = () => {
  const stages = [
    {
      icon: ClipboardList,
      title: 'Analiza i planowanie',
      description: `Etap 1: Szczegółowa analiza inwestycji
        • Audyt techniczny budynku
        • Analiza dokumentacji
        • Identyfikacja potrzeb
        • Planowanie budżetu
        • Określenie zakresu usług
        • Przygotowanie harmonogramu`,
      duration: '2-3 tygodnie'
    },
    {
      icon: Building2,
      title: 'Przejęcie nieruchomości',
      description: `Etap 2: Organizacja procesu zarządzania
        • Przejęcie dokumentacji
        • Inwentaryzacja majątku
        • Uruchomienie systemów
        • Organizacja służb
        • Przygotowanie procedur
        • Szkolenie personelu`,
      duration: '3-4 tygodnie'
    },
    {
      icon: Users2,
      title: 'Organizacja wspólnoty',
      description: `Etap 3: Utworzenie struktury zarządzania
        • Przygotowanie dokumentów
        • Organizacja zebrania
        • Wybór zarządu
        • Ustalenie regulaminów
        • Plan gospodarczy
        • System komunikacji`,
      duration: '4-6 tygodni'
    },
    {
      icon: FileCheck,
      title: 'Wdrożenie procesów',
      description: `Etap 4: Implementacja systemów zarządzania
        • Portal mieszkańca
        • System zgłoszeń
        • Procedury obsługi
        • Harmonogramy prac
        • Rozliczenia mediów
        • Raporty i analizy`,
      duration: '2-3 miesiące'
    },
    {
      icon: Settings,
      title: 'Optymalizacja',
      description: `Etap 5: Doskonalenie procesów
        • Audyty efektywności
        • Optymalizacja kosztów
        • Modernizacje
        • Ankiety satysfakcji
        • Programy ulepszeń
        • Raporty wyników`,
      duration: 'Proces ciągły'
    },
    {
      icon: Shield,
      title: 'Stabilizacja',
      description: `Etap 6: Zapewnienie jakości
        • Monitoring KPI
        • Regularne przeglądy
        • Aktualizacje procedur
        • Szkolenia zespołu
        • Rozwój usług
        • Planowanie długoterminowe`,
      duration: 'Proces ciągły'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">
              Proces przejęcia i zarządzania
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Poznaj szczegółowy proces implementacji usług zarządzania nieruchomościami 
              dla nowych inwestycji deweloperskich. Każdy etap jest starannie zaplanowany 
              i profesjonalnie realizowany.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {stages.map((stage, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <stage.icon className="h-12 w-12 text-[#DAA520] mb-6" />
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">{stage.title}</h2>
                    <span className="text-sm text-[#DAA520] font-medium px-3 py-1 bg-[#DAA520]/10 rounded-full">
                      {stage.duration}
                    </span>
                  </div>
                  <div className="text-gray-600 whitespace-pre-line">
                    {stage.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default DeveloperProcess;