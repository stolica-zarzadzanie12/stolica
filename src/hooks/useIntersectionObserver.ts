import { useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  onIntersect?: () => void;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px',
  onIntersect,
}: UseIntersectionObserverProps = {}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Dodaj klasę active do elementu głównego
          entry.target.classList.add('active');
          
          // Znajdź i aktywuj wszystkie elementy z klasą reveal wewnątrz sekcji
          entry.target.querySelectorAll('.reveal').forEach(el => {
            el.classList.add('active');
          });
          
          // Znajdź i aktywuj wszystkie elementy z klasą stagger wewnątrz sekcji
          entry.target.querySelectorAll('.stagger').forEach(el => {
            el.classList.add('active');
          });
          
          if (onIntersect) {
            onIntersect();
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, onIntersect]);

  return elementRef;
};