import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Food from "./routes/food/Food";
import Health from "./routes/health/Health";
import Contact from "./routes/contact/Contact";
import { FoodProvider, PredictionProvider } from "./DataContext";

function App() {
  return (
    <FoodProvider>
      <PredictionProvider>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="food" element={<Food />} />
            <Route path="health" element={<Health />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </PredictionProvider>
    </FoodProvider>
  );
}

export default App;
