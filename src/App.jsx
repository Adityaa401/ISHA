
import BackgroundVideo from './background'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoveNote from './NextPage';
import FinalPage from './FinalPage';
import LastPage from './LastPage';


function App() {

  return (
    
      <Routes>
        <Route path="/" element={<BackgroundVideo />} />
        <Route path="/love-note" element={<LoveNote />} />
        <Route path="/final-page" element={<FinalPage />} />
        <Route path="/last-page" element={<LastPage />} />
      </Routes>
     
  )
}

export default App
