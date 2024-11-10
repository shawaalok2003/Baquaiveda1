// // import 'bootstrap/dist/js/bootstrap.bundle.min';
// // import React, { useEffect } from 'react';
// // import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
// // import Header from './components/Header';
// // import Banner from './components/Banner';
// // import './App.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import AboutProducts from './components/AboutProducts';
// // import ServicesPage from './components/Experts';
// // import ProductGallery from './components/ProductGallery';
// // import Footer from './components/footer';
// // import 'bootstrap-icons/font/bootstrap-icons.css';
// // import VideoPage from './components/VideoPage';
// // import ContactPage from './components/ContactPage';
// // import ReviewSection from './components/ReviewSection';
// // import AOS from 'aos';
// // import 'aos/dist/aos.css'; // AOS styles
// // import ProductsPage from './components/ProductPage'; // The product page
// // import CartPage from './components/CartPage'; // The cart page
// // import ServicesGrid from './components/Page';
// // import WishlistPage from './components/wishlistPage';
// // import BlogPage from './components/BlogPage';
// // import SignUp from './components/frontend-login/src/pages/Signup';
// // import Login from './components/frontend-login/src/pages/Login';
// // import Products from './components/Product';
// // import ServiceFeatures from './components/Providers';
// // import AppointmentForm from './components/Form';
// // import DropdownMenu from './components/menu';
// // import HealthAndWellness from './components/Health_Page';
// // import PrivacyPolicy from './components/Privacy';
// // import Specialties from './components/Specialities';
// // import Gallery from './components/Gallery';
// // import AboutUs from './components/extra';
// // import TermsAndConditions from './components/condition';
// // import AyurvedicSolutionsPage from './components/AyurvedaTreatment';

// // // New imports for account section
// // import ProfileDetails from './components/Profile Section/ProfileDetails';
// // import Orders from './components/Profile Section/Orders';
// // import HelpCentre from './components/Profile Section/HelpCenter';
// // import './components/Profile Section/ProfilePage.css';
// // import { CartProvider } from './components/cart/cartContext';
// // import { WishlistProvider } from './components/wishlist/wishlistContext'; // Import WishlistProvider


// // function App() {
// //   const token = localStorage.getItem('token');

// //   useEffect(() => {
// //     AOS.init({
// //       duration: 1000, // Animation duration in ms
// //       easing: 'ease-in-out',
// //       once: false,
// //     });
// //   }, []);

// //   const Layout = ({ children }) => {
// //     const location = useLocation();
// //     const hideHeaderPaths = ['/signup', '/login']; // Paths where Header should be hidden

// //     return (
// //       <>
// //         {!hideHeaderPaths.includes(location.pathname) && <Header />}
// //         {children}
// //         {!hideHeaderPaths.includes(location.pathname) && <Footer />}
// //       </>
// //     );
// //   };

// //   const AccountLayout = ({ children }) => (
// //     <div style={{ display: 'flex', height: '100vh' }}>
// //       <div className="sidebar">
// //         <h2>Account</h2>
// //         <ul>
// //           <li><Link to="/profile-details">My Details</Link></li>
// //           <li><Link to="/wishlist">Wishlist</Link></li>
// //           <li><Link to="/cart">Cart</Link></li>
// //           <li><Link to="/orders">Orders</Link></li>
// //           <li><Link to="/help">Help Centre</Link></li>

// //         </ul>
// //       </div>
// //       <div style={{ width: '70%', padding: '20px' }}>
// //         {children}
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <WishlistProvider token={token}> {/* Wrap with WishlistProvider */}
// //       <CartProvider token={token}> {/* Wrap with CartProvider */}
// //         <div className="App">
// //           <Routes>
// //             <Route path="/" element={<Layout><Banner /><AboutProducts /><ServicesPage /><DropdownMenu /><ServiceFeatures /><Products /><ProductGallery /><VideoPage/><ServicesGrid /><ContactPage /><ReviewSection /></Layout>} />
// //             <Route path="/products" element={<Layout><ProductsPage /></Layout>} />
// //             <Route path="/privacy-policy" element={<Layout><PrivacyPolicy/></Layout>} />
// //             <Route path="/extra" element={<Layout><AboutUs/></Layout>} />
// //             <Route path="/specialities" element={<Layout><Specialties/></Layout>} />
// //             <Route path="/wishlist" element={<Layout><WishlistPage /></Layout>} />
// //             <Route path="/termsandcondition" element={<Layout><TermsAndConditions /></Layout>} />
// //             <Route path="/cart" element={<Layout><CartPage /></Layout>} />
// //             <Route path="/appointmentForm" element={<AppointmentForm />} />
// //             <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
// //             <Route path="//ayurveda-treatment" element={<Layout><AyurvedicSolutionsPage /></Layout>} />
// //             <Route path="/gallery" element={<Layout><Gallery/></Layout>} />
// //             <Route path="/healthpage" element={<Layout><HealthAndWellness /></Layout>} />
// //             <Route path="/product-gallery" element={<Layout><ProductGallery /></Layout>} />
// //             <Route path="/video" element={<Layout><VideoPage /></Layout>} />
// //             <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
// //             <Route path="/review" element={<Layout><ReviewSection /></Layout>} />
// //             <Route path="/profile-details" element={<Layout><AccountLayout><ProfileDetails /></AccountLayout></Layout>} />
// //             <Route path="/orders" element={<Layout><AccountLayout><Orders /></AccountLayout></Layout>} />
// //             <Route path="/help" element={<Layout><AccountLayout><HelpCentre /></AccountLayout></Layout>} />
// //             <Route path="/signup" element={<SignUp />} />
// //             <Route path="/login" element={<Login />} />
// //           </Routes>
// //         </div>
// //       </CartProvider>
// //     </WishlistProvider>
// //   );
// // }

// // export default App;








// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import React, { useEffect } from 'react';
// import { Route, Routes, Link, useLocation } from 'react-router-dom';
// import Header from './components/Header';
// import Banner from './components/Banner';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AboutProducts from './components/AboutProducts';
// import ServicesPage from './components/Experts';
// import ProductGallery from './components/ProductGallery';
// import Footer from './components/footer';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import VideoPage from './components/VideoPage';
// import ContactPage from './components/ContactPage';
// import ReviewSection from './components/ReviewSection';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // AOS styles
// import ProductsPage from './components/ProductPage'; // The product page
// import CartPage from './components/CartPage'; // The cart page
// import { MainDiseases } from './components/Page'; // Corrected import
// import WishlistPage from './components/wishlistPage';
// import BlogPage from './components/BlogPage';
// import SignUp from './components/frontend-login/src/pages/Signup';
// import Login from './components/frontend-login/src/pages/Login';
// import Products from './components/Product';
// import ServiceFeatures from './components/Providers';
// import AppointmentForm from './components/Form';
// import DropdownMenu from './components/menu';
// import HealthAndWellness from './components/Health_Page';
// import PrivacyPolicy from './components/Privacy';
// import Specialties from './components/Specialities';
// import Gallery from './components/Gallery';
// import AboutUs from './components/extra';
// import TermsAndConditions from './components/condition';
// import AyurvedicSolutionsPage from './components/AyurvedaTreatment';

// // New imports for account section
// import ProfileDetails from './components/Profile Section/ProfileDetails';
// import Orders from './components/Profile Section/Orders';
// import HelpCentre from './components/Profile Section/HelpCenter';
// import './components/Profile Section/ProfilePage.css';
// import { CartProvider } from './components/cart/cartContext';
// import { WishlistProvider } from './components/wishlist/wishlistContext'; // Import WishlistProvider

// function App() {
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration in ms
//       easing: 'ease-in-out',
//       once: false,
//     });
//   }, []);

//   const Layout = ({ children }) => {
//     const location = useLocation();
//     const hideHeaderPaths = ['/signup', '/login']; // Paths where Header should be hidden

//     return (
//       <>
//         {!hideHeaderPaths.includes(location.pathname) && <Header />}
//         {children}
//         {!hideHeaderPaths.includes(location.pathname) && <Footer />}
//       </>
//     );
//   };

//   const AccountLayout = ({ children }) => (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <div className="sidebar">
//         <h2>Account</h2>
//         <ul>
//           <li><Link to="/profile-details">My Details</Link></li>
//           <li><Link to="/wishlist">Wishlist</Link></li>
//           <li><Link to="/cart">Cart</Link></li>
//           <li><Link to="/orders">Orders</Link></li>
//           <li><Link to="/help">Help Centre</Link></li>
//         </ul>
//       </div>
//       <div style={{ width: '70%', padding: '20px' }}>
//         {children}
//       </div>
//     </div>
//   );

//   return (
//     <WishlistProvider token={token}> {/* Wrap with WishlistProvider */}
//       <CartProvider token={token}> {/* Wrap with CartProvider */}
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Layout><Banner /><AboutProducts /><ServicesPage /><DropdownMenu /><ServiceFeatures /><Products /><ProductGallery /><VideoPage/><MainDiseases /><ContactPage /><ReviewSection /></Layout>} />
//             <Route path="/products" element={<Layout><ProductsPage /></Layout>} />
//             <Route path="/privacy-policy" element={<Layout><PrivacyPolicy/></Layout>} />
//             <Route path="/extra" element={<Layout><AboutUs/></Layout>} />
//             <Route path="/specialities" element={<Layout><Specialties/></Layout>} />
//             <Route path="/wishlist" element={<Layout><WishlistPage /></Layout>} />
//             <Route path="/termsandcondition" element={<Layout><TermsAndConditions /></Layout>} />
//             <Route path="/cart" element={<Layout><CartPage /></Layout>} />
//             <Route path="/appointmentForm" element={<AppointmentForm />} />
//             <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
//             <Route path="/ayurveda-treatment" element={<Layout><AyurvedicSolutionsPage /></Layout>} /> {/* Fixed the double slashes */}
//             <Route path="/gallery" element={<Layout><Gallery/></Layout>} />
//             <Route path="/healthpage" element={<Layout><HealthAndWellness /></Layout>} />
//             <Route path="/product-gallery" element={<Layout><ProductGallery /></Layout>} />
//             <Route path="/video" element={<Layout><VideoPage /></Layout>} />
//             <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
//             <Route path="/review" element={<Layout><ReviewSection /></Layout>} />
//             <Route path="/profile-details" element={<Layout><AccountLayout><ProfileDetails /></AccountLayout></Layout>} />
//             <Route path="/orders" element={<Layout><AccountLayout><Orders /></AccountLayout></Layout>} />
//             <Route path="/help" element={<Layout><AccountLayout><HelpCentre /></AccountLayout></Layout>} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </div>
//       </CartProvider>
//     </WishlistProvider>
//   );
// }

// export default App;






// App.js
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import React, { useEffect } from 'react';
// import { Route, Routes, Link, useLocation } from 'react-router-dom';
// import Header from './components/Header';
// import Banner from './components/Banner';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AboutProducts from './components/AboutProducts';
// import ServicesPage from './components/Experts';
// import ProductGallery from './components/ProductGallery';
// import Footer from './components/footer';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import VideoPage from './components/VideoPage';
// import ContactPage from './components/ContactPage';
// import ReviewSection from './components/ReviewSection';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import ProductsPage from './components/ProductPage';
// import CartPage from './components/CartPage';
// import MainDiseases from './components/Page'; // Updated import
// import WishlistPage from './components/wishlistPage';
// import BlogPage from './components/BlogPage';
// import SignUp from './components/frontend-login/src/pages/Signup';
// import Login from './components/frontend-login/src/pages/Login';
// import Products from './components/Product';
// import ServiceFeatures from './components/Providers';
// import AppointmentForm from './components/Form';
// import DropdownMenu from './components/menu';
// import HealthAndWellness from './components/Health_Page';
// import PrivacyPolicy from './components/Privacy';
// import Specialties from './components/Specialities';
// import Gallery from './components/Gallery';
// import AboutUs from './components/extra';
// import TermsAndConditions from './components/condition';
// import AyurvedicSolutionsPage from './components/AyurvedaTreatment';
// import ProfileDetails from './components/Profile Section/ProfileDetails';
// import Orders from './components/Profile Section/Orders';
// import HelpCentre from './components/Profile Section/HelpCenter';
// import './components/Profile Section/ProfilePage.css';
// import { CartProvider } from './components/cart/cartContext';
// import { WishlistProvider } from './components/wishlist/wishlistContext';
// import DiseaseDetailPage from './components/DiseaseDetailPage'; // Import the new component
// import StickyAppointmentButton from './components/StickyAppointmentButton';


// function App() {
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: false,
//     });
//   }, []);

//   const Layout = ({ children }) => {
//     const location = useLocation();
//     const hideHeaderPaths = ['/signup', '/login'];

//     return (
//       <>
//         {!hideHeaderPaths.includes(location.pathname) && <Header />}
//         {children}
//         {!hideHeaderPaths.includes(location.pathname) && <Footer />}
//       </>
//     );
//   };

//   const AccountLayout = ({ children }) => (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <div className="sidebar">
//         <h2>Account</h2>
//         <ul>
//           <li><Link to="/profile-details">My Details</Link></li>
//           <li><Link to="/wishlist">Wishlist</Link></li>
//           <li><Link to="/cart">Cart</Link></li>
//           <li><Link to="/orders">Orders</Link></li>
//           <li><Link to="/help">Help Centre</Link></li>
//         </ul>
//       </div>
//       <div style={{ width: '70%', padding: '20px' }}>
//         {children}
//       </div>
//     </div>
//   );

//   return (
//     <WishlistProvider token={token}>
//       <CartProvider token={token}>
//         <div className="App">
//           <Routes>
//           <Route 
//   path="/" 
//   element={
//     <Layout>
//       <Banner />
//       <StickyAppointmentButton />
//       <AboutProducts />
//       <ServicesPage />
//       <DropdownMenu />
//       <ServiceFeatures />
//       <Products />
      
//       {/* Attractive and Styled Text  */}
//       {/* Attractive and Styled Text */}
//       <h1 style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', margin: '30px 0' }}>
//         Our Exclusive Products
//       </h1>
//       <ProductGallery />
//       <VideoPage/>
      
//       <h1 style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', margin: '30px 0' }}>
//         Our Exceptional Services
//       </h1>
//       <MainDiseases />
      
//       <h1 style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', margin: '30px 0' }}>
//         Get in Touch with Us
//       </h1>
//       <ContactPage />
      
//       <h1 style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', margin: '30px 0' }}>
//         What Our Customers Are Saying
//       </h1>
//       <ReviewSection />
//     </Layout>
//   } 
// />
//             <Route path="/products" element={<Layout><ProductsPage /></Layout>} />
//             <Route path="/disease/:diseaseName" element={<Layout><DiseaseDetailPage /></Layout>} /> {/* New route for disease details */}
//             <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
//             <Route path="/extra" element={<Layout><AboutUs /></Layout>} />
//             <Route path="/specialities" element={<Layout><Specialties /></Layout>} />
//             <Route path="/wishlist" element={<Layout><WishlistPage /></Layout>} />
//             <Route path="/termsandcondition" element={<Layout><TermsAndConditions /></Layout>} />
//             <Route path="/cart" element={<Layout><CartPage /></Layout>} />
//             <Route path="/appointmentForm" element={<Layout><AppointmentForm /></Layout>} />
//             <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
//             <Route path="/ayurveda-treatment" element={<Layout><AyurvedicSolutionsPage /></Layout>} />
//             <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
//             <Route path="/healthpage" element={<Layout><HealthAndWellness /></Layout>} />
//             <Route path="/product-gallery" element={<Layout><ProductGallery /></Layout>} />
//             <Route path="/video" element={<Layout><VideoPage /></Layout>} />
//             <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
//             <Route path="/review" element={<Layout><ReviewSection /></Layout>} />
//             <Route path="/profile-details" element={<Layout><AccountLayout><ProfileDetails /></AccountLayout></Layout>} />
//             <Route path="/orders" element={<Layout><AccountLayout><Orders /></AccountLayout></Layout>} />
//             <Route path="/help" element={<Layout><AccountLayout><HelpCentre /></AccountLayout></Layout>} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </div>
//       </CartProvider>
//     </WishlistProvider>
//   );
// }

// export default App;

// App.js
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutProducts from './components/AboutProducts';
import ServicesPage from './components/Experts';
import ProductGallery from './components/ProductGallery';
import Footer from './components/footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import VideoPage from './components/VideoPage';
import ContactPage from './components/ContactPage';
import ReviewSection from './components/ReviewSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductsPage from './components/ProductPage';
import CartPage from './components/CartPage';
import MainDiseases from './components/Page';
import WishlistPage from './components/wishlistPage';
import BlogPage from './components/BlogPage';
import SignUp from './components/frontend-login/src/pages/Signup';
import Login from './components/frontend-login/src/pages/Login';
import Products from './components/Product';
import ServiceFeatures from './components/Providers';
import AppointmentForm from './components/Form';
import DropdownMenu from './components/menu';
import HealthAndWellness from './components/Health_Page';
import PrivacyPolicy from './components/Privacy';
import Specialties from './components/Specialities';
import Gallery from './components/Gallery';
import AboutUs from './components/extra';
import TermsAndConditions from './components/condition';
import AyurvedicSolutionsPage from './components/AyurvedaTreatment';
import ProfileDetails from './components/Profile Section/ProfileDetails';
import Orders from './components/Profile Section/Orders';
import HelpCentre from './components/Profile Section/HelpCenter';
import './components/Profile Section/ProfilePage.css';
import { CartProvider } from './components/cart/cartContext';
import { WishlistProvider } from './components/wishlist/wishlistContext';
import DiseaseDetailPage from './components/DiseaseDetailPage';
import StickyAppointmentButton from './components/StickyAppointmentButton';
import { HelmetProvider, Helmet } from 'react-helmet-async';

function App() {
  const token = localStorage.getItem('token');
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  useEffect(() => {
    // Scroll to the top on route change
    window.scrollTo(0, 0);
  }, [location]);

  const Layout = ({ children }) => {
    const hideHeaderPaths = ['/signup', '/login'];

    return (
      <>
        {!hideHeaderPaths.includes(location.pathname) && <Header />}
        {children}
        {!hideHeaderPaths.includes(location.pathname) && <Footer />}
      </>
    );
  };

  const AccountLayout = ({ children }) => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div className="sidebar">
        <h2>Account</h2>
        <ul>
          <li><Link to="/profile-details">My Details</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/help">Help Centre</Link></li>
        </ul>
      </div>
      <div style={{ width: '70%', padding: '20px' }}>
        {children}
      </div>
    </div>
  );

  return (
   <HelmetProvider>
        <Helmet>
          <title>Baquaiveda | Leading Ayurvedic & Unani Company in Kolkata for Natural Wellness</title>
          <meta name="description" content="Explore Baquaiveda's Ayurvedic and Unani treatments, products, and wellness solutions in Kolkata. Embrace natural healing with traditional remedies for holistic health." />
          <meta name="keywords" content="Ayurveda, Unani, herbal products, wellness, natural remedies, Baquaiveda, Kolkata Ayurveda, Ayurvedic treatments, Unani medicine" />
          <meta name="author" content="Baquaiveda" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
          {/* Open Graph Tags */}
          <meta property="og:title" content="Baquaiveda | Ayurvedic & Unani Wellness in Kolkata" />
          <meta property="og:description" content="Discover Baquaiveda's Ayurvedic and Unani treatments and wellness products in Kolkata for holistic health." />
          <meta property="og:image" content="https://www.baquaiveda.com/images/og-image.jpg" /> {/* Replace with actual image URL */}
          <meta property="og:url" content="https://www.baquaiveda.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Baquaiveda | Leading Ayurvedic & Unani Wellness Company in Kolkata" />
          <meta name="twitter:description" content="Explore Ayurvedic and Unani wellness solutions by Baquaiveda in Kolkata. Embrace natural healing and holistic wellness." />
          <meta name="twitter:image" content="https://www.baquaiveda.com/images/twitter-image.jpg" /> {/* Replace with actual image URL */}

          {/* Structured Data for Local Business */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Baquaiveda",
              "image": "https://www.baquaiveda.com/images/logo.jpg",
              "@id": "https://www.baquaiveda.com",
              "url": "https://www.baquaiveda.com",
              "telephone": "+91-XXXXXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Wellness Avenue",
                "addressLocality": "Kolkata",
                "addressRegion": "WB",
                "postalCode": "700001",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/baquaiveda",
                "https://www.instagram.com/baquaiveda",
                "https://www.linkedin.com/company/baquaiveda"
              ],
              "priceRange": "$$"
            })}
          </script>
        </Helmet>
    <WishlistProvider token={token}>
      <CartProvider token={token}>
        <div className="App">
          <Routes>
            <Route 
              path="/" 
              element={
                <Layout>
                  <Banner />
                  <StickyAppointmentButton />
                  <AboutProducts />
                  <ServicesPage />
                  <DropdownMenu />
                  <ServiceFeatures />
                  <Products />

                  <h1 style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', margin: '30px 0' }}>
                    Our Exclusive Products
                  </h1>
                  <ProductGallery />
                  <VideoPage/>
                  
                  <h1 style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', margin: '30px 0' }}>
                    Our Exceptional Services
                  </h1>
                  <MainDiseases />
                  
                  <h1 style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', margin: '30px 0' }}>
                    Get in Touch with Us
                  </h1>
                  <ContactPage />
                  
                  <h1 style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', margin: '30px 0' }}>
                    What Our Customers Are Saying
                  </h1>
                  <ReviewSection />
                </Layout>
              } 
            />
            <Route path="/products" element={<Layout><ProductsPage /></Layout>} />
            <Route path="/disease/:diseaseName" element={<Layout><DiseaseDetailPage /></Layout>} />
            <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
            <Route path="/extra" element={<Layout><AboutUs /></Layout>} />
            <Route path="/specialities" element={<Layout><Specialties /></Layout>} />
            <Route path="/wishlist" element={<Layout><WishlistPage /></Layout>} />
            <Route path="/termsandcondition" element={<Layout><TermsAndConditions /></Layout>} />
            <Route path="/cart" element={<Layout><CartPage /></Layout>} />
            <Route path="/appointmentForm" element={<Layout><AppointmentForm /></Layout>} />
            <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
            <Route path="/ayurveda-treatment" element={<Layout><AyurvedicSolutionsPage /></Layout>} />
            <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
            <Route path="/healthpage" element={<Layout><HealthAndWellness /></Layout>} />
            <Route path="/product-gallery" element={<Layout><ProductGallery /></Layout>} />
            <Route path="/video" element={<Layout><VideoPage /></Layout>} />
            <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
            <Route path="/review" element={<Layout><ReviewSection /></Layout>} />
            <Route path="/profile-details" element={<Layout><AccountLayout><ProfileDetails /></AccountLayout></Layout>} />
            <Route path="/orders" element={<Layout><AccountLayout><Orders /></AccountLayout></Layout>} />
            <Route path="/help" element={<Layout><AccountLayout><HelpCentre /></AccountLayout></Layout>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </CartProvider>
    </WishlistProvider>
    </HelmetProvider>
  );
}

export default App;