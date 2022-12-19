import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import ScrollToTop from "./components/ScrollToTop";
import { GlobalStyles } from "./styles/global.styles";
import { Footer } from "./components/footer/Footer";
import { Suspense } from "react";
import Category from "./pages/User/Category/Category";
import AdminIndex from "./pages/Admin/AdminIndex";
import { AuthGuard } from "./components/AuthGuard/AuthGuard";
import { AddCategory } from "./pages/Admin/Category/AddCategory/AddCategory";
import { NavBar } from "./components/NavBar/NavBar";

function App(): JSX.Element {
  return (
    <>
      <div className="flex-auto">
        <Suspense>
          <NavBar />
          <GlobalStyles />
          <ScrollToTop />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="admin"
                element={
                  <AuthGuard>
                    <Outlet />
                  </AuthGuard>
                }
              >
                <Route index element={<AdminIndex />} />
                <Route path="categories">
                  <Route path=":id" element={<Category />} />
                  <Route path=":id/edit" element={<Category />} />
                  <Route path="add" element={<AddCategory />} />
                </Route>
                <Route path="questions/:id" element={<Category />} />
              </Route>
              <Route path="admin/categories/:id" element={<Category />} />
              <Route path="categories/:id" element={<Category />} />
            </Routes>
          </div>
        </Suspense>
      </div>

      <Footer className="flex-shrink-0" />
    </>
  );
}

export default App;
