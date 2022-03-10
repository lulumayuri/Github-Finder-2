import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Fouter from './components/shared/Fouter';
import Navbar from './components/shared/Navbar';
import {GithubProvider} from "./context/github/GithubContext"
import {AlertProvider} from "./context/alert/alertContext"
import Alert from './components/shared/Alert';
import User from './components/pages/User';
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
              <Router>
                <div className='flex flex-col justify-between min-h-screen bg-slate-700'>
                  <Navbar title="GitHub Finder"/>
                  <main className='container mx-auto px-3 mb-10 '>
                    <Alert/>
                    <Routes>
                      
                      <Route path='/' element={<Home />}/>
                      <Route path='/user/:login' element={<User/>}/>
                      <Route path='/about' element={<About />}/>
                      <Route path='/notfound' element={<NotFound />}/>
                      <Route path='/*' element={<NotFound />}/>
                    </Routes>
                  </main>
                  <Fouter />
              
                 </div>
             </Router>
       </AlertProvider>
    </GithubProvider>

 
  );
}

export default App;
