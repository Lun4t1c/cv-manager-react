import { lazy, Suspense } from 'react';
import './App.css';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Navbar from './shared/Navbar/Navbar';
import Loading from './shared/Loading/Loading';

const CVCreatorPage = lazy(() => import('./pages/CVCreatorPage/CVCreatorPage'));

function App() {

  return (
    <>
      <Navbar/>
      
      <WelcomePage />
      
      <Suspense fallback={<Loading/>}>
        <CVCreatorPage />
      </Suspense>
    </>
  )
}

export default App;