import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// lazy loading

const HomepageLayout = lazy(() => import('../components/layouts/Homepagelayout'));
const Homepage = lazy(() => import("../pages/Homepage/homepage"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const NotfoundPage = lazy(() => import("../pages/NotfoundPage/NotfoundPage"));
const Songpage = lazy(() => import("../pages/Songpage/Songpage"));
const Posts = lazy(() => import("../pages/Posts/Posts"));
const Register = lazy(() => import("../pages/Register/Register"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage/FavoritesPage"));

export default function AppRoute() {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomepageLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/song/:id" element={<Songpage />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
