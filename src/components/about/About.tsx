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
					<h3 style={{marginBottom: 10}}>Languages:</h3>
					<div
					>
						<ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 50, rowGap: 20}}>
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>Dart</li>
							<li>Go</li>
						</ul>
						
					</div>
				</motion.div>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{delay:0.4}}
				>
					<h3 style={{marginBottom: 10}}>Frameworks:</h3>
					<div
					>
						<ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: 50, rowGap: 20}}>
							<li>React.js</li>
							<li>Next.js</li>
							<li>Flutter</li>
						</ul>
						
					</div>
				</motion.div>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{delay:0.5}}
				>
					<h3 style={{marginBottom: 10}}>Backend:</h3>
					<div
					>
						<ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: 50, rowGap: 20}}>
							<li>Node.js</li>
							<li>Express.js</li>
							<li>Go</li>
						</ul>
						
					</div>
				</motion.div>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{delay:0.6}}
				>
					<h3 style={{marginBottom: 10}}>Database:</h3>
					<div
					>
						<ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: 50, rowGap: 20}}>
							<li>MySQL</li>
							<li>PostgreSQL</li>
							<li>MongoDB</li>
							<li>Firebase</li>
							<li>Supabase</li>
							<li>Prisma ORM</li>
						</ul>
						
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
					<p>I'm a software engineer fueled by a passion for solving complex problems and optimizing workflows. My journey in the tech world has been rich and varied. Initially, my intrigue with the digital domain was channeled through graphic design, mastering the intricacies of visual communication and storytelling.</p>

<p>From there, my path led me to web development, beginning with the foundational elements of the internet: HTML and CSS. I relished the challenge of crafting functional, aesthetic websites and soon embraced the capabilities of CMS platforms like WordPress. As I ventured deeper into the realm of software engineering, I expanded my expertise to encompass frameworks such as React.js and Next.js, and complemented this front-end prowess with backend mastery using tools like Node.js, Express.js, and databases including MySQL, PostgreSQL, and MongoDB.</p>

<p>The allure of the mobile world was impossible to resist. Although I initially dabbled with React Native, it was the Dart programming language and Flutter framework that truly captivated me. This led to the transformation of a personal project into a comprehensive mobile application. More recently, my curiosity has steered me towards the Go programming language, with an aim to sculpt even more robust and efficient backend architectures.</p>

<p>But at the heart of all these technical pursuits is an unyielding desire to identify challenges, delve deep into their core, and architect innovative solutions. My adventures in technology are not confined to any singular domain. Whether it's automating intricate tasks with Python scripts or harnessing the expansive offerings of AWS, I remain an avid explorer, continually seeking to merge creativity with technology and bring groundbreaking solutions to the fore.</p>

				</motion.div>
			</div>
    </motion.div>
  );
}

export default About;
