import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, AlertCircle, Send, Loader2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useIntersectionObserver();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Symulacja wysyłania formularza
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Aleje Jerozolimskie 30, Warszawa',
      link: 'https://goo.gl/maps/your-location'
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+48 798 696 119',
      link: 'tel:+48798696119'
    },
    {
      icon: Mail,
      title: 'Adresy email',
      content: null,
      emails: [
        'biuro@stolica-zarzadzanienieruchomosciami.pl',
        'kontakt@stolica-zarzadzanienieruchomosciami.pl',
        'pw@stolica-zarzadzanienieruchomosciami.pl'
      ]
    },
    {
      icon: Clock,
      title: 'Godziny pracy',
      content: 'Pon-Pt: 8:00 - 18:00',
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 relative" ref={sectionRef}>
        <div className="text-center mb-16 reveal reveal-fade-up">
          <h2 className="text-4xl font-bold mb-4">Kontakt</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami w dogodny dla Ciebie sposób.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-7xl mx-auto stagger">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg reveal reveal-fade-right">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Temat *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div className="text-sm text-gray-500">
                * Pola wymagane
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 bg-[#DAA520] hover:bg-[#FFD700] text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Wysyłanie...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Wyślij wiadomość</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>Wystąpił błąd. Prosimy spróbować ponownie później.</span>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7732074457347!2d21.012788715802582!3d52.23082897976201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97552d0017aa0!2sPalace%20of%20Culture%20and%20Science!5e0!3m2!1sen!2spl!4v1645523456789!5m2!1sen!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onTouchStart={(e) => e.currentTarget.style.pointerEvents = 'auto'}
                onTouchEnd={(e) => e.currentTarget.style.pointerEvents = 'none'}
                onWheel={(e) => e.currentTarget.style.pointerEvents = 'auto'}
                onMouseLeave={(e) => e.currentTarget.style.pointerEvents = 'none'}
              />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg grid md:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className={`flex items-start space-x-4 ${info.isEmailList ? 'md:col-span-4' : 'md:col-span-1'}`}>
                  <div className="bg-[#DAA520] bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                    <info.icon className="h-6 w-6 text-[#DAA520]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{info.title}</h4>
                    {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-[#DAA520] transition-colors duration-300 break-words"
                        >
                          {info.content}
                        </a>
                    ) : (
                      info.emails ? (
                        <div className="space-y-2 mt-2">
                          {info.emails.map((email, idx) => (
                            <a
                              key={email}
                              href={`mailto:${email}`}
                              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-[#DAA520] transition-all duration-300 group"
                            >
                              <span className="flex items-center justify-center w-6 h-6 bg-[#DAA520] bg-opacity-10 text-[#DAA520] rounded-full text-sm font-medium group-hover:bg-opacity-20 transition-all duration-300">
                                {idx + 1}
                              </span>
                              <span className="break-all">{email}</span>
                            </a>
                          ))}
                        </div>
                      ) : (
                      <p className="text-gray-600 break-words">{info.content}</p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;