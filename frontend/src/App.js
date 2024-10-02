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
// // import WishlistPage from './components/Wishlist';
// // import BlogPage from './components/BlogPage';
// // import SignUp from './components/frontend-login/src/pages/Signup';
// // import Login from './components/frontend-login/src/pages/Login';
// // import Products from './components/Product';
// // import ServiceFeatures from './components/Providers';
// // import AppointmentForm from './components/Form';
// // import DropdownMenu from './components/menu';
// // import HealthAndWellness from './components/Health_Page';
// // import Specialists from './components/Specialists';

// // // New imports for account section
// // import ProfileDetails from './components/Profile Section/ProfileDetails';
// // import Orders from './components/Profile Section/Orders';
// // import HelpCentre from './components/Profile Section/HelpCenter';
// // import './components/Profile Section/ProfilePage.css';
// // import { CartProvider } from './components/cart/cartContext';

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
// //     <CartProvider token={token}>
    
// //         <div className="App">
// //           <Routes>
// //             <Route path="/" element={<Layout><Banner /><AboutProducts /><ServicesPage /><DropdownMenu /><ServiceFeatures /><Products /><ProductGallery /><VideoPage /><ServicesGrid /><ContactPage /><ReviewSection /></Layout>} />
// //             <Route path="/products" element={<Layout><ProductsPage /></Layout>} />
// //             <Route path="/wishlist" element={<Layout><WishlistPage /></Layout>} />
// //             <Route path="/cart" element={<Layout><CartPage /></Layout>} />
// //             <Route path="/appointmentForm" element={<AppointmentForm />} />
// //             <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
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
      
// //     </CartProvider>
// //   );
// // };

// // export default App;


// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
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
// import ServicesGrid from './components/Page';
// import WishlistPage from './components/Wishlist';
// import BlogPage from './components/BlogPage';
// import SignUp from './components/frontend-login/src/pages/Signup';
// import Login from './components/frontend-login/src/pages/Login';
// import Products from './components/Product';
// import ServiceFeatures from './components/Providers';
// import AppointmentForm from './components/Form';
// import DropdownMenu from './components/menu';
// import HealthAndWellness from './components/Health_Page';
// import Specialists from './components/Specialists';

// // New imports for account section
// import ProfileDetails from './components/Profile Section/ProfileDetails';
// import Orders from './components/Profile Section/Orders';
// import HelpCentre from './components/Profile Section/HelpCenter';
// import './components/Profile Section/ProfilePage.css';
// import { CartProvider } from './components/cart/cartContext';

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
//     <CartProvider token={token}>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Layout><Banner /><AboutProducts /><ServicesPage /><DropdownMenu /><ServiceFeatures /><Products /><ProductGallery /><VideoPage /><ServicesGrid /><ContactPage /><ReviewSection /></Layout>} />
//           <Route path="/products" element={<Layout><ProductsPage /></Layout>} />
//           <Route path="/wishlist" element={<Layout><WishlistPage /></Layout>} />
//           <Route path="/cart" element={<Layout><CartPage /></Layout>} />
//           <Route path="/appointmentForm" element={<AppointmentForm />} />
//           <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
//           <Route path="/healthpage" element={<Layout><HealthAndWellness /></Layout>} />
//           <Route path="/product-gallery" element={<Layout><ProductGallery /></Layout>} />
//           <Route path="/video" element={<Layout><VideoPage /></Layout>} />
//           <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
//           <Route path="/review" element={<Layout><ReviewSection /></Layout>} />
//           <Route path="/profile-details" element={<Layout><AccountLayout><ProfileDetails /></AccountLayout></Layout>} />
//           <Route path="/orders" element={<Layout><AccountLayout><Orders /></AccountLayout></Layout>} />
//           <Route path="/help" element={<Layout><AccountLayout><HelpCentre /></AccountLayout></Layout>} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </CartProvider>
//   );
// }

// export default App;


import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
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
import 'aos/dist/aos.css'; // AOS styles
import ProductsPage from './components/ProductPage'; // The product page
import CartPage from './components/CartPage'; // The cart page
import ServicesGrid from './components/Page';
import WishlistPage from './components/wishlistPage';
import BlogPage from './components/BlogPage';
import SignUp from './components/frontend-login/src/pages/Signup';
import Login from './components/frontend-login/src/pages/Login';
import Products from './components/Product';
import ServiceFeatures from './components/Providers';
import AppointmentForm from './components/Form';
import DropdownMenu from './components/menu';
import HealthAndWellness from './components/Health_Page';
import TermsAndConditions from './components/condition';
import PrivacyPolicy from './components/Privacy';
import Specialties from './components/Specialities';
import Gallery from './components/Gallery';


// New imports for account section
import ProfileDetails from './components/Profile Section/ProfileDetails';
import Orders from './components/Profile Section/Orders';
import HelpCentre from './components/Profile Section/HelpCenter';
import './components/Profile Section/ProfilePage.css';
import { CartProvider } from './components/cart/cartContext';
import { WishlistProvider } from './components/wishlist/wishlistContext'; // Import WishlistProvider


function App() {
  const token = localStorage.getItem('token');

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const Layout = ({ children }) => {
    const location = useLocation();
    const hideHeaderPaths = ['/signup', '/login']; // Paths where Header should be hidden

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
    <WishlistProvider token={token}> {/* Wrap with WishlistProvider */}
      <CartProvider token={token}> {/* Wrap with CartProvider */}
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout><Banner /><AboutProducts /><ServicesPage /><DropdownMenu /><ServiceFeatures /><Products /><ProductGallery /><VideoPage/><ServicesGrid /><ContactPage /><ReviewSection /></Layout>} />
            <Route path="/products" element={<Layout><ProductsPage /></Layout>} />
            <Route path="/privacy-policy" element={<Layout><PrivacyPolicy/></Layout>} />
            <Route path="/specialities" element={<Layout><Specialties/></Layout>} />
            <Route path="/wishlist" element={<Layout><WishlistPage /></Layout>} />
            <Route path="/termsandcondition" element={<Layout><TermsAndConditions /></Layout>} />
            <Route path="/cart" element={<Layout><CartPage /></Layout>} />
            <Route path="/appointmentForm" element={<AppointmentForm />} />
            <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
            <Route path="/gallery" element={<Layout><Gallery/></Layout>} />
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
  );
}

export default App;
