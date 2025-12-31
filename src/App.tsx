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
import TributePage from "./pages/TributePage";

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
        path="/memorial/:website"
        element={
          <MainLayout>
            <MemorialPage />
          </MainLayout>
        }
      />
      {/* Memorial Route */}
      <Route
        path="/memorials/:idOrWebsite"
        element={
          <MainLayout>
            <ViewMemorialPage />
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
