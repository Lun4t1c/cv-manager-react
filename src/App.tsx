import { lazy, Suspense } from 'react';
import './App.css';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Navbar from './shared/Navbar/Navbar';
import Loading from './shared/Loading/Loading';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const CVCreatorPage = lazy(() => import('./pages/CVCreatorPage/CVCreatorPage'));

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>

          <Route path='/' element={<WelcomePage />}>
          </Route>


          <Route path='/creator' element={
            <Suspense fallback={<Loading />}>
              <CVCreatorPage />
            </Suspense>
          }>
          </Route>

          <Route
            path="*"
            element={<Navigate to="/" />}
          />

        </Routes>
      </Router>
    </>
  )
}

export default App;