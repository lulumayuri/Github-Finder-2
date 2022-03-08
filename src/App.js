import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Fouter from './components/shared/Fouter';
import Navbar from './components/shared/Navbar';

function App() {
  return (
<Router>
    <div className='flex flex-col justify-between min-h-screen bg-slate-700'>
        <Navbar title="GitHub Finder"/>
        <main className='container mx-auto px-3 mb-10 '>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/notfound' element={<NotFound />}/>
            <Route path='/*' element={<NotFound />}/>
          </Routes>
        </main>
        <Fouter />
        
    </div>
</Router>
 
  );
}

export default App;
