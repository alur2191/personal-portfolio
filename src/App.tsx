import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import Navbar from './components/layout/Navbar';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCoordinates } from './features/theme/themeSlice';
import Footer from './components/layout/Footer';
import AnimatedRoutes from './components/layout/AnimatedRoutes';


function App() {
	const dispatch = useDispatch()
	const toggleSetCoordinates = (newCoords:object) => {
		dispatch(setCoordinates(newCoords));
	};

  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      setGlobalCoords({
        x: event?.clientX,
        y: event?.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

	toggleSetCoordinates(globalCoords)
	
  return (
			<Router >
					<Navbar />
					<AnimatedRoutes />
					<Footer />
			</Router>
  );
}

export default App;
