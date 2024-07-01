import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './componets/Header/Header';
import Services from './componets/Services/Services';
import AboutUs from './componets/AboutUs/AboutUs';
import OurProcess from './componets/OurProcess/OurProcess';
import Testimonials from "./componets/Testimonials/Testimonials";
import Blogs from './componets/Blogs/Blogs';
import Form from './componets/Form/Form';
import Footer from './componets/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Services />
      <AboutUs />
      <OurProcess />
      <Testimonials />
      <Blogs />
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
