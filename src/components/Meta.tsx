import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  url?: string;
  keywords?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

const Meta = ({ 
  title, 
  description, 
  image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fm=webp',
  type = 'website',
  url = 'https://stolica-zarzadzanienieruchomosciami.pl',
  keywords = 'zarządzanie nieruchomościami warszawa, administrator nieruchomości warszawa, zarządca nieruchomości warszawa, obsługa wspólnot mieszkaniowych warszawa, administrowanie wspólnotami mieszkaniowymi, zarządzanie najmem warszawa, przeglądy budowlane warszawa, zarządzanie nieruchomościami komercyjnymi, optymalizacja kosztów zarządzania, profesjonalny zarządca nieruchomości, firma zarządzająca nieruchomościami, licencjonowany zarządca nieruchomości, administracja nieruchomości warszawa, zarządzanie wspólnotą mieszkaniową, zarządzanie budynkiem warszawa, administrowanie nieruchomościami warszawa, wspólnoty mieszkaniowe warszawa, zarządzanie wspólnotami mieszkaniowymi warszawa, zarządzanie nieruchomościami komercyjnymi warszawa, przeglądy techniczne budynków warszawa, przeglądy pięcioletnie warszawa, obsługa techniczna nieruchomości warszawa, administracja budynków warszawa',
  publishedTime,
  modifiedTime,
  author = 'Stolica - Zarządzanie Nieruchomościami'
}: MetaProps) => {
  const siteName = 'Stolica - Zarządzanie Nieruchomościami';
  const defaultTitle = 'Zarządzanie Nieruchomościami Warszawa | Profesjonalny Zarządca | Stolica';

  return (
    <Helmet>
      {/* Standard meta tags */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="theme-color" content="#DAA520" />
      <link rel="preload" as="image" href={image} />
      <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://vojtapksxdjvbzquheog.supabase.co" crossOrigin="anonymous" />
      
      {/* Social Media Integration */}
      <script async src="https://platform.twitter.com/widgets.js"></script>
      <script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="news_keywords" content="zarządzanie nieruchomościami, zarządca nieruchomości, administracja nieruchomości, wspólnoty mieszkaniowe, nieruchomości komercyjne, zarządzanie najmem" />
      <meta name="classification" content="business" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="coverage" content="Warszawa" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="application-name" content={siteName} />
      
      {/* Facebook Pixel Code */}
      <script type="text/javascript">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${import.meta.env.VITE_FB_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </script>
      <noscript>{`
        <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${import.meta.env.VITE_FB_PIXEL_ID}&ev=PageView&noscript=1"
        />
      `}</noscript>
      
      <meta name="generator" content="Stolica CMS" />
      <meta name="theme-color" content="#DAA520" />
      <meta name="msapplication-TileColor" content="#DAA520" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteName} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="fb:app_id" content="your-fb-app-id" />
      <meta property="og:updated_time" content={modifiedTime || new Date().toISOString()} />
      {publishedTime ? <meta property="article:published_time" content={publishedTime} /> : null}
      {modifiedTime ? <meta property="article:modified_time" content={modifiedTime} /> : null}
      {author ? <meta property="article:author" content={author} /> : null}
      {type === 'article' ? <meta property="article:section" content="Zarządzanie nieruchomościami" /> : null}
      {type === 'article' ? <meta property="article:tag" content={keywords} /> : null}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@StolicaZarzadzanie" />
      <meta name="twitter:creator" content="@StolicaZarzadzanie" />

      {/* Additional meta tags */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="pl" />
      <meta name="copyright" content={`© ${new Date().getFullYear()} ${siteName}`} />
      <meta name="geo.region" content="PL-MZ" />
      <meta name="geo.placename" content="Warszawa" />
      <meta name="geo.position" content="52.229676;21.012229" />
      <meta name="ICBM" content="52.229676, 21.012229" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="coverage" content="Worldwide" />
      
      {/* Organization Schema */}
      <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteName,
          "url": url,
          "logo": image,
          "description": description,
          "foundingDate": "2010",
          "foundingLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Aleje Jerozolimskie 30",
              "addressLocality": "Warszawa",
              "postalCode": "00-024",
              "addressCountry": "PL"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Warszawa",
            "sameAs": "https://pl.wikipedia.org/wiki/Warszawa"
          },
          "priceRange": "1500 PLN - 50000 PLN",
          "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
          "currenciesAccepted": "PLN",
          "sameAs": [
            "https://www.facebook.com/StolicaZarzadzanie",
            "https://www.linkedin.com/company/stolica-zarzadzanie"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Aleje Jerozolimskie 30",
            "addressLocality": "Warszawa",
            "postalCode": "00-024",
            "addressCountry": "PL",
            "addressRegion": "mazowieckie"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+48-798-696-119",
            "contactType": "customer service",
            "areaServed": "PL",
            "availableLanguage": "Polish",
            "email": "kontakt@stolica-zarzadzanienieruchomosciami.pl",
            "availableLanguage": ["Polish", "English"]
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Usługi zarządzania nieruchomościami",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Zarządzanie wspólnotami mieszkaniowymi",
                  "description": "Kompleksowa obsługa wspólnot mieszkaniowych, optymalizacja kosztów i profesjonalne wsparcie"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Zarządzanie nieruchomościami komercyjnymi",
                  "description": "Profesjonalne zarządzanie obiektami komercyjnymi, optymalizacja kosztów i maksymalizacja wartości"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Zarządzanie najmem",
                  "description": "Kompleksowa obsługa najmu, gwarantowany przychód i pełne bezpieczeństwo prawne"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1000",
            "bestRating": "5",
            "worstRating": "1"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          },
          "award": [
            "15 lat doświadczenia w zarządzaniu nieruchomościami",
            "Certyfikowani zarządcy nieruchomości",
            "Ubezpieczenie OC na 1 000 000 zł"
          ],
          "slogan": "Profesjonalne zarządzanie nieruchomościami w Warszawie",
          "knowsAbout": [
            "Zarządzanie nieruchomościami",
            "Administracja nieruchomości",
            "Wspólnoty mieszkaniowe",
            "Optymalizacja kosztów",
            "Przeglądy budowlane",
            "Zarządzanie najmem"
          ]
        })}</script>
      
      {/* Article Schema for blog posts */}
      {type === 'article' ? (
        <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": image,
            "author": {
              "@type": "Organization",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": siteName,
              "logo": {
                "@type": "ImageObject",
                "url": image
              }
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            }
          })}</script>
      ) : null}
      
      {/* WebSite Schema */}
      <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteName,
          "url": "https://stolica-zarzadzanienieruchomosciami.pl",
          "alternateName": "Stolica Zarządzanie Nieruchomościami",
          "description": "Profesjonalne zarządzanie nieruchomościami w Warszawie. Kompleksowa obsługa wspólnot mieszkaniowych, nieruchomości komercyjnych i prywatnych.",
          "inLanguage": "pl-PL",
          "isFamilyFriendly": true,
          "image": image,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://stolica-zarzadzanienieruchomosciami.pl/blog?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        })}</script>
      
      {/* Local Business Schema */}
      <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": siteName,
          "image": image,
          "url": "https://stolica-zarzadzanienieruchomosciami.pl",
          "telephone": "+48798696119",
          "priceRange": "1500 PLN - 50000 PLN",
          "sameAs": [
            "https://www.facebook.com/StolicaZarzadzanie",
            "https://www.linkedin.com/company/stolica-zarzadzanie",
            "https://www.youtube.com/@StolicaZarzadzanie",
            "https://www.instagram.com/stolica.zarzadzanie/"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Aleje Jerozolimskie 30",
            "addressLocality": "Warszawa",
            "postalCode": "00-024",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.229676",
            "longitude": "21.012229"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification", 
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00", 
            "closes": "18:00"
          }
        })}</script>
      <link rel="canonical" href={url} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="theme-color" content="#DAA520" />
      <link rel="preload" as="image" href={image} />
      <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://vojtapksxdjvbzquheog.supabase.co" crossOrigin="anonymous" />
      
      {/* Social Media Integration */}
      <script async src="https://platform.twitter.com/widgets.js"></script>
      <script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="news_keywords" content="zarządzanie nieruchomościami, zarządca nieruchomości, administracja nieruchomości, wspólnoty mieszkaniowe, nieruchomości komercyjne, zarządzanie najmem" />
      <meta name="classification" content="business" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="coverage" content="Warszawa" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="application-name" content={siteName} />
      
      {/* Facebook Pixel Code */}
      <script type="text/javascript">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${import.meta.env.VITE_FB_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </script>
      <noscript>{`
        <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${import.meta.env.VITE_FB_PIXEL_ID}&ev=PageView&noscript=1"
        />
      `}</noscript>
      
      <meta name="generator" content="Stolica CMS" />
      <meta name="theme-color" content="#DAA520" />
      <meta name="msapplication-TileColor" content="#DAA520" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteName} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="fb:app_id" content="your-fb-app-id" />
      <meta property="og:updated_time" content={modifiedTime || new Date().toISOString()} />
      {publishedTime ? <meta property="article:published_time" content={publishedTime} /> : null}
      {modifiedTime ? <meta property="article:modified_time" content={modifiedTime} /> : null}
      {author ? <meta property="article:author" content={author} /> : null}
      {type === 'article' ? <meta property="article:section" content="Zarządzanie nieruchomościami" /> : null}
      {type === 'article' ? <meta property="article:tag" content={keywords} /> : null}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@StolicaZarzadzanie" />
      <meta name="twitter:creator" content="@StolicaZarzadzanie" />

      {/* Additional meta tags */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="pl" />
      <meta name="copyright" content={`© ${new Date().getFullYear()} ${siteName}`} />
      <meta name="geo.region" content="PL-MZ" />
      <meta name="geo.placename" content="Warszawa" />
      <meta name="geo.position" content="52.229676;21.012229" />
      <meta name="ICBM" content="52.229676, 21.012229" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="coverage" content="Worldwide" />
      
      {/* Organization Schema */}
      <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteName,
          "url": url,
          "logo": image,
          "description": description,
          "foundingDate": "2010",
          "foundingLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Aleje Jerozolimskie 30",
              "addressLocality": "Warszawa",
              "postalCode": "00-024",
              "addressCountry": "PL"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Warszawa",
            "sameAs": "https://pl.wikipedia.org/wiki/Warszawa"
          },
          "priceRange": "1500 PLN - 50000 PLN",
          "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
          "currenciesAccepted": "PLN",
          "sameAs": [
            "https://www.facebook.com/StolicaZarzadzanie",
            "https://www.linkedin.com/company/stolica-zarzadzanie"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Aleje Jerozolimskie 30",
            "addressLocality": "Warszawa",
            "postalCode": "00-024",
            "addressCountry": "PL",
            "addressRegion": "mazowieckie"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+48-798-696-119",
            "contactType": "customer service",
            "areaServed": "PL",
            "availableLanguage": "Polish",
            "email": "kontakt@stolica-zarzadzanienieruchomosciami.pl",
            "availableLanguage": ["Polish", "English"]
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Usługi zarządzania nieruchomościami",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Zarządzanie wspólnotami mieszkaniowymi",
                  "description": "Kompleksowa obsługa wspólnot mieszkaniowych, optymalizacja kosztów i profesjonalne wsparcie"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Zarządzanie nieruchomościami komercyjnymi",
                  "description": "Profesjonalne zarządzanie obiektami komercyjnymi, optymalizacja kosztów i maksymalizacja wartości"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Zarządzanie najmem",
                  "description": "Kompleksowa obsługa najmu, gwarantowany przychód i pełne bezpieczeństwo prawne"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1000",
            "bestRating": "5",
            "worstRating": "1"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          },
          "award": [
            "15 lat doświadczenia w zarządzaniu nieruchomościami",
            "Certyfikowani zarządcy nieruchomości",
            "Ubezpieczenie OC na 1 000 000 zł"
          ],
          "slogan": "Profesjonalne zarządzanie nieruchomościami w Warszawie",
          "knowsAbout": [
            "Zarządzanie nieruchomościami",
            "Administracja nieruchomości",
            "Wspólnoty mieszkaniowe",
            "Optymalizacja kosztów",
            "Przeglądy budowlane",
            "Zarządzanie najmem"
          ]
        })}</script>
      
      {/* Article Schema for blog posts */}
      {type === 'article' ? (
        <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": image,
            "author": {
              "@type": "Organization",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": siteName,
              "logo": {
                "@type": "ImageObject",
                "url": image
              }
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            }
          })}</script>
      ) : null}
      
      {/* WebSite Schema */}
      <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteName,
          "url": "https://stolica-zarzadzanienieruchomosciami.pl",
          "alternateName": "Stolica Zarządzanie Nieruchomościami",
          "description": "Profesjonalne zarządzanie nieruchomościami w Warszawie. Kompleksowa obsługa wspólnot mieszkaniowych, nieruchomości komercyjnych i prywatnych.",
          "inLanguage": "pl-PL",
          "isFamilyFriendly": true,
          "image": image,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://stolica-zarzadzanienieruchomosciami.pl/blog?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        })}</script>
      
      {/* Local Business Schema */}
      <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": siteName,
          "image": image,
          "url": "https://stolica-zarzadzanienieruchomosciami.pl",
          "telephone": "+48798696119",
          "priceRange": "1500 PLN - 50000 PLN",
          "sameAs": [
            "https://www.facebook.com/StolicaZarzadzanie",
            "https://www.linkedin.com/company/stolica-zarzadzanie",
            "https://www.youtube.com/@StolicaZarzadzanie",
            "https://www.instagram.com/stolica.zarzadzanie/"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Aleje Jerozolimskie 30",
            "addressLocality": "Warszawa",
            "postalCode": "00-024",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.229676",
            "longitude": "21.012229"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification", 
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00", 
            "closes": "18:00"
          }
        })}</script>
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Meta;