import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useIntersectionObserver();

  const testimonials = [
    {
      text: 'Dzięki profesjonalnemu zarządzaniu udało się nam zredukować koszty utrzymania nieruchomości o 20% w ciągu pierwszego roku. Szczególnie doceniamy szybką reakcję na zgłoszenia i transparentność w rozliczeniach.',
      author: 'Krzysztof Malinowski',
      position: 'Przewodniczący Rady, Wspólnota Mieszkaniowa przy ul. Słonecznej',
    },
    {
      text: 'Przeprowadzili kompleksową termomodernizację budynku, pozyskując dofinansowanie z programów unijnych. Profesjonalne podejście i doskonała organizacja prac remontowych.',
      author: 'Barbara Witkowska',
      position: 'Członek Zarządu, Wspólnota Mieszkaniowa Osiedle Zielone',
    },
    {
      text: 'Świetna komunikacja z mieszkańcami i sprawna organizacja zebrań wspólnoty. Doceniamy regularne raporty i pełną transparentność w zarządzaniu finansami.',
      author: 'Tomasz Kowalczyk',
      position: 'Przewodniczący Rady, Wspólnota Mieszkaniowa Parkowa',
    },
    {
      text: 'Po przejęciu zarządzania uporządkowali całą dokumentację i wprowadzili system elektronicznego zgłaszania usterek. Teraz wszystko działa jak w zegarku.',
      author: 'Anna Nowicka',
      position: 'Członek Rady, Wspólnota Mieszkaniowa Spokojna',
    },
    {
      text: 'Profesjonalne doradztwo przy modernizacji wind i instalacji przeciwpożarowej. Wszystkie prace zostały wykonane zgodnie z harmonogramem i budżetem.',
      author: 'Piotr Adamski',
      position: 'Przewodniczący Rady, Wspólnota Mieszkaniowa Centrum',
    },
    {
      text: 'Doceniamy ich proaktywne podejście do zarządzania. Sami proponują rozwiązania i optymalizacje, dzięki którym nasza wspólnota oszczędza znaczące kwoty.',
      author: 'Magdalena Szymańska',
      position: 'Członek Zarządu, Wspólnota Mieszkaniowa Pogodna',
    },
    {
      text: 'Sprawnie przeprowadzili remont elewacji i wymianę instalacji. Świetna koordynacja prac i minimalne niedogodności dla mieszkańców.',
      author: 'Jan Wójcik',
      position: 'Przewodniczący Rady, Wspólnota Mieszkaniowa Radosna',
    },
    {
      text: 'Skuteczne negocjacje z dostawcami mediów i firmami sprzątającymi pozwoliły nam znacząco obniżyć koszty eksploatacyjne.',
      author: 'Elżbieta Dąbrowska',
      position: 'Członek Rady, Wspólnota Mieszkaniowa Cicha',
    },
    {
      text: 'Profesjonalne wsparcie prawne i księgowe. Zawsze można liczyć na rzeczowe wyjaśnienia i pomoc w rozwiązywaniu problemów.',
      author: 'Marek Zieliński',
      position: 'Przewodniczący Rady, Wspólnota Mieszkaniowa Kwiatowa',
    },
    {
      text: 'Świetna organizacja prac remontowych i modernizacyjnych. Doceniamy też sprawną windykację należności, która poprawiła płynność finansową wspólnoty.',
      author: 'Joanna Lewandowska',
      position: 'Członek Zarządu, Wspólnota Mieszkaniowa Przyjazna',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center mb-16 reveal reveal-fade-up">
          <h2 className="text-4xl font-bold mb-4">Opinie Klientów</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zobacz, co mówią o nas nasi klienci
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto reveal stagger">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-600 hover:text-[#DAA520] transition-colors duration-300"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div className="overflow-hidden px-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 p-8 rounded-lg relative hover:shadow-lg transition-shadow duration-300">
                    <Quote className="absolute top-4 left-4 h-8 w-8 text-[#DAA520] opacity-25" />
                    <div className="text-center">
                      <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="mt-4">
                        <p className="font-semibold text-gray-800">
                          {testimonial.author}
                        </p>
                        <p className="text-[#DAA520] text-sm font-medium">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-600 hover:text-[#DAA520] transition-colors duration-300"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index
                    ? 'bg-[#DAA520]'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;