import styles from './navbar.module.scss'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { invertTheme } from '../../features/theme/themeSlice';
import { useEffect } from 'react';

function Navbar() {
	const dispatch = useDispatch();
	const location = useLocation();
	const toggleThemeInvert = () => {
		dispatch(invertTheme());
	};
	useEffect(()=>{
		if(location.pathname === '/'){
			document.body.style.overflow = 'hidden';
		}else{
			setTimeout(()=>{
				document.body.style.overflow = 'auto';
			},350)
		}
	},[location])
  return (
    <nav className={styles.container}>
			<ul>
				<li onClick={toggleThemeInvert}><Link to="/">home</Link></li>
				<li onClick={toggleThemeInvert}><Link to="/about">about</Link></li>
				<li onClick={toggleThemeInvert}><Link to="/portfolio/0">portfolio</Link></li>
			</ul>
    </nav>
  );
}

export default Navbar;
