import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/header/header";
import ProductsContainer from "./containers/ProductsContainer";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import Favorites from "./pages/Favorites";
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce,ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="relative">
      <PageContainer>    
      <Router> 
      <Header/>      
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<Details/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/favorites" element={<Favorites/>} />
        </Routes>       
      </Router>    
    </PageContainer>
    <ToastContainer transition={Flip} newestOnTop/>
    {/* <Footer/> */}
    
    </div>
  );
}

export default App;
