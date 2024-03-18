import { Route, Routes } from "react-router-dom";
import Header from "./shared/components/layout/Header";
import Menu from "./shared/components/layout/Menu";
import Slider from "./shared/components/layout/Slider";
import Sidebar from "./shared/components/layout/Sidebar";
import Footer from "./shared/components/layout/Footer";
import Home from "./pages/Home/Index";
import ProductDetail from "./pages/ProductDetail/Index";
import Cart from "./pages/Cart/Index";
import Search from "./pages/Search/Index";
import Categories from "./pages/Category/Index";
import Success from "./pages/Success/Index";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Menu />
        <div className="row">
          <div id="main" className="col-lg-8 col-md-12 col-sm-12">
            <Slider />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Product/:id" element={<ProductDetail />} />
              <Route path="/Categories/:id" element={<Categories />} />
              <Route path="/Success" element={<Success />} />
              <Route path="/Search" element={<Search />} />
            </Routes>
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
