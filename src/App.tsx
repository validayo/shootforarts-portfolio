import { Routes, Route } from 'react-router-dom';
import GalleryLanding from './components/GalleryLanding';
import PortfolioPage from './components/PortfolioPage';

function About() {
  return <h1 className="text-3xl p-4">About Page</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GalleryLanding />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
