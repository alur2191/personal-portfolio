import styles from './home.module.scss'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { store } from '../../app/store';
import { useEffect, useState } from 'react';
import Circles from '../layout/Circles';
import { Link } from 'react-router-dom';
import { invertTheme } from '../../features/theme/themeSlice';
import {motion} from 'framer-motion'

type RootState = ReturnType<typeof store.getState>;
const useThemeSelector: TypedUseSelectorHook<RootState> = useSelector;

interface Coordinates {
	x?: number;
	y?: number;
}

function Home() {
	let coordinates: Coordinates;
	coordinates = useThemeSelector((state) => state.theme.globalCoordinates);
	const y = coordinates.y||50
	const x = coordinates.x||50
	const [darkTheme, setDarkTheme ] = useState(false)
	const invertValue = useThemeSelector((state) => state.theme.invert);
	const dispatch = useDispatch();
	useEffect(() => {
		const footer = document.getElementById('footer')
		
		if(invertValue && footer){
			document.body.style.backgroundColor = '#F4F4F4';
			footer.style.backgroundColor = 'transparent' 
		}else if(footer){
			document.body.style.backgroundColor = 'white';
			footer.style.backgroundColor = 'transparent' 
		}

		if(darkTheme && footer){
			document.body.style.backgroundColor = '#1b1a1a'
			document.body.style.color = 'white'
		}else if(footer){
			
			document.body.style.color = '#1b1a1a'
		}
		
  }, [darkTheme,x ,y]);
	
	const onButtonHover = () => {
		setDarkTheme(!darkTheme);
	}

	const pageChange = () => {
		document.body.style.color = '#1b1a1a'
		dispatch(invertTheme());
	}
  return (
    <motion.div className={styles.container}
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration:0.3}}
		>
			<Circles />
			<span>Al Urunboev</span>
			<span>Software Engineer</span>
			<Link to='/portfolio/0' className={styles.button}
			onClick={pageChange} onMouseOver={onButtonHover} onMouseLeave={()=>setDarkTheme(!darkTheme)}>View Portfolio</Link>
    </motion.div>
  );
}

export default Home;
