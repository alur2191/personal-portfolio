import { useEffect } from 'react';
import styles from './about.module.scss'
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { store } from '../../app/store';
import {motion} from 'framer-motion';

type RootState = ReturnType<typeof store.getState>;
const useThemeSelector: TypedUseSelectorHook<RootState> = useSelector;

function About() {
	const invertValue = useThemeSelector((state) => state.theme.invert);
	useEffect(() => {
		const footer = document.getElementById('footer')

		if(invertValue && footer){
			document.body.style.backgroundColor = '#F4F4F4';
			footer.style.backgroundColor = '#F4F4F4' 
		}else if(footer){
			document.body.style.backgroundColor = 'white';
			footer.style.backgroundColor = 'white';
		}
  }, []);
  return (
    <motion.div className={styles.container} 
		initial={{opacity: 0}}
		animate={{opacity: 1}}
		exit={{opacity: 0}}
		transition={{duration:0.3}}>
			<div className={styles.tech}
			>
				<h1>TECH EXPERIENCE</h1>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{delay:0.3}}
				>
					<span>Frontend:</span>
					<div
					>
						<img src='/image/icons/javascript.png' alt="some"/>
						<img src='/image/icons/typescript.png' />
						<img src='/image/icons/react.png' />
						<img src='/image/icons/nextjs.png' />
						<img src='/image/icons/html.png' />
						<img src='/image/icons/css.png' />
					</div>
				</motion.div>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{delay:0.4}}
				>
					<span>Backend:</span>
					<div>
						<img src='/image/icons/nodejs.png' />
						<img src='/image/icons/python.png' />
						<img src='/image/icons/postgresql.png' />
						<img src='/image/icons/mysql.png' />
						<img src='/image/icons/mongo.png' />
					</div>
				</motion.div>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{delay:0.5}}
				>
					<span>Tools:</span>
					<div>
						<img src='/image/icons/github.png' />
						<img src='/image/icons/trello.png' />
						<img src='/image/icons/figma.png' />
						<img src='/image/icons/photoshop.png' />
						<img src='/image/icons/aftereffects.png' />
					</div>
				</motion.div>
			</div>
			<div>
				<h1>About Me</h1>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{delay:0.3}}>
					<p>Self-taught graphic design for some years, after which decided to start learning programming. After a couple of years of self-teaching JavaScript, I was accepted to the <a href="https://www.underdogdevs.org/">Underdog Devs</a> stipend program.</p>
					<p>Besides my main focus, fullstack web applications, I've been interested in different areas of tech and programming and continuesly seek to expand my horizons. I have experimented with Web3, Three.js, and Flutter for mobile development.</p>
				</motion.div>
			</div>
    </motion.div>
  );
}

export default About;
