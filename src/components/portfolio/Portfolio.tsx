import styles from './portfolio.module.scss'
import { useEffect, useState } from 'react';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { store } from '../../app/store';
import {motion} from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom';
import { setNavForward } from '../../features/portfolio/portfolioSlice';

type RootState = ReturnType<typeof store.getState>;
const useThemeSelector: TypedUseSelectorHook<RootState> = useSelector;

function Portfolio() {
	const { id } = useParams<{ id: any }>();
	const navigate = useNavigate()
	const invertValue = useThemeSelector((state) => state.theme.invert);
	const navForward = useThemeSelector((state) => state.portfolio.navForward);
	const dispatch = useDispatch()
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

	const projects = [
		{
			title: 'LearningPath',
			type: 'Personal Project',
			tools: ['React.js', 'Redux Toolkit', 'Express.js', ' MySQL', 'Sequelize'],
			about: 'Platform where users can create and share learning curriculum.',
			work: 'Collaborated and led development of a fullstack web application. Pre-development stages included; wireframes, database schema diagrams, mockups, and planning.',
			image: '/image/portfolio/logo/learning-path.png',
			link: 'http://www.google.com',
			git: 'https://github.com/Grantb2134/LearningPath',
			backend: '',
		},
		{
			title: 'UnderdogDevs',
			type: 'Contributor',
			tools: ['Next.js', 'TypeScript', 'Context', 'PostgreSQL', 'Prisma ORM'],
			about: 'Group of software developers supporting the formerly incarcerated & disadvantaged in their transition into the software industry.',
			work: 'Contributed to development of the content management administrator panel and the client side of the blog section.',
			image: '/image/portfolio/logo/underdog-devs.png',
			link: 'https://www.underdogdevs.org/',
			git: 'https://github.com/U                                                                                                       nderdog-Devs/website-v2',
			backend: 'https://github.com/Underdog-Devs/website-admin'
		},
		{
			title: 'TruckDriver.help',
			type: 'Personal Project',
			tools: ['Next.js', 'Context', 'PostgreSQL', 'Prisma ORM', 'Google Analytics', 'Vercel', 'AWS RDS'],
			about: 'Platform for immigrants from CIS countries working in the freight transportation logistics industry. Hundred of active users a few month into its recent launch.',
			work: 'Fullstack Next.js web application. Deployed on vercel, and integrated various external services: traffic analysis with Google Analytics, log management with LogTail, and sending emails with SendGrid.',
			image: '/image/portfolio/logo/truckdriverhelp.png',
			link: 'http://www.truckdriver.help',
			git: 'https://github.com/dandavisjs/TruckDriver.Help',
			backend: '',
		},
		{
			title: 'Cryptocurrency Charts',
			type: 'Personal Project',
			tools: ['React.js', 'Context'],
			about: 'Lightweight live cryptocurrency price charts.',
			work: 'React application with Context API for state management. Data is fetched from CoinGecko API and visualized using a library called Recharts.',
			image: '/image/portfolio/logo/crypto-charts.png',
			link: 'https://quirky-volhard-399428.netlify.app/',
			git: 'https://github.com/dandavisjs/CryptoCharts',
			backend: '',
		},
		{
			title: 'Russo Brothers Transportation',
			type: 'Contractual Job',
			tools: ['Next.js', 'Context', 'PostgreSQL', 'Prisma ORM'],
			about: 'Russo Brothers Transport Inc is a freight transportation logistics company based in Sacramento, CA. ',
			work: 'Created brand design guidelines and developed a static website based on the guidelines.',
			image: '/image/portfolio/logo/russo-transport.png',
			link: 'http://www.russotransport.com',
			git: 'https://github.com/dandavisjs/RussoBrotherTransport',
			backend: '',
		},
		{
			title: 'SafeBooks.finance',
			type: 'Contractual Job',
			tools: ['Next.js', 'Context', 'PostgreSQL', 'Prisma ORM'],
			about: 'Full set of bookkeeping and accounting services to various industries.',
			work: '',
			image: '/image/portfolio/logo/safebooks.png',
			link: 'http://www.safebooks.finance',
			git: 'https://github.com/dandavisjs/Bookkeeping-Website',
			backend: '',
		},
	]
	
	const nextProject = () => {
		navigate(`/portfolio/${parseInt(id) === projects.length-1 ? 0 : parseInt(id)+1}`)
		dispatch(setNavForward(true));
	}

	const previousProject = () => {
		navigate(`/portfolio/${parseInt(id) === 0 ? projects.length-1 : parseInt(id)-1}`)
		dispatch(setNavForward(false));
	}

  return (
    <div className={styles.container}>
			<motion.div className={styles.main}
				initial={{x: navForward ? -100 : 100, opacity:0}}
				animate={{x: 0, opacity:1}}
				exit={{x: navForward ? 100 : -100, opacity:0}}
				transition={{
					ease: 'anticipate',
					duration: 0.3
				}}
			>
				<div className={styles.preview}>
					<img src={projects[id].image} alt="TruckDriver.help logo" />
					<div className={styles.links}>
						<div><i className="las la-2x la-globe"></i><a  href={projects[id].link} target="_blank" rel="noopener noreferrer">View Live</a></div>
						{projects[id].backend
						? <>
								<div><i className="lab la-2x la-github"></i><a href={projects[id].git} target="_blank" rel="noopener noreferrer">Client Repository</a></div>
								<div><i className="lab la-2x la-github"></i><a href={projects[id].backend}  target="_blank" rel="noopener noreferrer">Admin Repository</a></div>
							</>
						: <div><i className="lab la-2x la-github"></i><a href={projects[id].git}  target="_blank" rel="noopener noreferrer">Github</a></div>
						}
					</div>
				</div>
				<div className={styles.details}>
					<h1>{projects[id].title}</h1>
					<p><em>{projects[id].type}</em></p>
					<div className={styles.tools}><strong>Tech: </strong>
							{projects[id].tools.map((tool,i)=>{
								return(
									<><span key={id}>{tool}</span><span className={styles.divider}> | </span></>
								)
							})}
					</div>
					<p><strong>About: </strong>{projects[id].about}</p>
					<p><strong>Work: </strong>{projects[id].work}</p>
				</div>
			</motion.div>
			<div className={styles.navigation}>
				<div className={styles.navButton} onClick={previousProject}><i className="las la-angle-left"></i><span>previous</span></div>
				< motion.h3 initial={{x: navForward ? -20 : 20, opacity:0}}
				animate={{x: 0, opacity:1}}
				exit={{x: navForward ? 20 : -20, opacity:0}}
				transition={{
					ease: 'anticipate',
					duration: 0.3
				}} >{projects[id].title}</ motion.h3>
				<div  className={styles.navButton} onClick={nextProject}><span >next</span><i className="las la-angle-right"></i></div>
			</div>
    </div>
  );
}

export default Portfolio;
