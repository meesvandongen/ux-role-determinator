import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import ScrollToTop from "./components/ScrollToTop";
import { GlobalStyles } from "./styles/global.styles";
import { Footer } from "./components/footer/Footer";
import { lazy, Suspense } from "react";

const UxWriting = lazy(() => import("./pages/UxWriting/UxWriting"));
const UxDevelopment = lazy(() => import("./pages/UxDevelopment/UxDevelopment"));
const UxDesign = lazy(() => import("./pages/UxDesign/UxDesign"));
const UxResearch = lazy(() => import("./pages/UxResearch/UxResearch"));
const UxManaging = lazy(() => import("./pages/UxManaging/UxManaging"));

function App(): JSX.Element {
  return (
    <Suspense>
      <BrowserRouter>
        <GlobalStyles />
        <ScrollToTop />
        <Routes>
          <Route path="writing" element={<UxWriting />} />
          <Route path="development" element={<UxDevelopment />} />
          <Route path="design" element={<UxDesign />} />
          <Route path="research" element={<UxResearch />} />
          <Route path="managing" element={<UxManaging />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
