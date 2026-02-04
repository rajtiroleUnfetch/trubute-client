import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { CreateTributePage } from "./pages/CreateTrubutePage";
import MemorialPage from "./pages/MemorialPage";
import ViewMemorialPage from "./pages/ViewMemorialPage";
import NotFound from "./pages/NotFound";
import MainLayout from "./pages/MainLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TributePage from "./pages/tribute/TributePage";
import MemorialRoute from "./pages/MemorialRoute";
import SampleMemorialPage from "./pages/MemorialWebPage";
import PlansPage from "./pages/PlansPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />

      <Route
        path="/login"
        element={
          <MainLayout>
            <LoginPage />
          </MainLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <MainLayout>
            <SignupPage />
          </MainLayout>
        }
      />
      {/* Tribute creation flow */}
      {/* <Route path="/create-memorial" element={<CreateMemorialFor />} /> */}
      <Route path="/create-trubute" element={<CreateTributePage />} />
    <Route path="/memorial/:website" element={<MemorialRoute />} />

      <Route
        path="/about"
        element={
          <MainLayout>
            <AboutPage />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <ContactPage />
          </MainLayout>
        }
      />
      <Route
        path="/memorial-web"
        element={
          <MainLayout>
            <SampleMemorialPage />
          </MainLayout>
        }
      />
      <Route
        path="/plans"
        element={
          <MainLayout>
            <PlansPage />
          </MainLayout>
        }
      />
      <Route
        path="/blogs"
        element={
          <MainLayout>
            <BlogsPage />
          </MainLayout>
        }
      />
      <Route
        path="/blogs/:slug"
        element={
          <MainLayout>
            <BlogDetailPage />
          </MainLayout>
        }
      />

      {/* Memorial Route */}
      {/* <Route
        path="/memorials/:idOrWebsite"
        element={
          <MainLayout>
            <ViewMemorialPage />
          </MainLayout>
        }
      /> */}
      <Route
        path="/memorials/:idOrWebsite"
        element={
          <MainLayout>
            <TributePage />
          </MainLayout>
        }
      />
      {/* <Route path="/plan" element={<ChoosePlan />} />
              <Route path="/privacy" element={<PrivacyOptions />} /> */}

      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
