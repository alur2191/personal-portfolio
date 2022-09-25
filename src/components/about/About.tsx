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

	const tech = {
		languages: ["JavaScript", "TypeScript", "Python", "Swift"],
		backend: ["Node.js", "Express.js", "JWT", "Bcryptjs", "Prisma ORM", "Sequelize ORM", "SQLAlchemy"],
		database: ["MySQL", "PostgreSQL", "MongoDB", "GraphQL" ],
		frontend: ["Redux + Toolkit", "HTML", "CSS", "SASS", "Styled Components"],
		frameworks: ["React.js", "Next.js", "Flask"],
		deployment: ["AWS", "RDS", "EC2", "Lambda", "Heroku", "Netlify", "Vercel"],
		other: ["Git", "GitHub Projects", "Trello", "Agile", "Three.js", "Solidity", "Figma", "Photoshop"]
	}

  return (
    <motion.div className={styles.container} 
		initial={{opacity: 0}}
		animate={{opacity: 1}}
		exit={{opacity: 0}}
		transition={{duration:0.3}}>
			<div className={styles.tech}>
				<h1>TECH EXPERIENCE</h1>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{delay:0.3}}
				>
					
				</motion.div>
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
			<div className={styles.about}>
				<h1>About Me</h1>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{delay:0.3}}>
					<p>4-years of self-taught Software Engineer. Passionate about building fullstack web and mobile applications. I keep myself busy by participating in various collaborative projects, constantly working on self-improvement, and daily pair programming with senior software engineers with experience working in Google, Apple, Squarespace, Slack, etc. References are available upon request.</p>
					<p>3 years of experience working with frontend tech - Vanilla JS, React.js, Next.js, Redux (inc. Toolkit), SASS, Styled Components, BEM, Bootstrap, etc. Several years of experience working with HTML, CSS, and various graphic design software prior to software engineering experience.</p>
					<p>2 years of experience with backend, databases, and deployment - Node.js, Express.js, BE Validation, PostgreSQL, MySQL, MongoDB, AWS, Vercel, Heroku etc.</p>
					<p>
					Familiarity with Python, Swift, React Native, Flutter, Solidity, Three.js, and various other frameworks and libraries.
					</p>
				</motion.div>
			</div>
    </motion.div>
  );
}

export default About;
