import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../home/Home'
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
	const location = useLocation()

	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/portfolio/:id" element={<Portfolio />} />
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes