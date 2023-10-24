import styles from './portfolio.module.scss'
import { useEffect } from 'react';
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
		setTimeout(()=>{
			if(document.body.style.color !== '#1b1a1a'){
				document.body.style.color = '#1b1a1a'
			}
		},500)
  }, []);

	const projects = [
		{
			title: 'CDL School Dashboard',
			type: 'Web App',
			tools: ['Next.js 13', 'Supabase', 'PostgreSQL', 'Twilio'],
			about: 'CDL School Dashboard bridges student drivers with CDL schools via dedicated phone lines and offers institutions comprehensive call oversight and profile editing capabilities.',
			work: 'Developed a full-stack dashboard connecting student drivers to CDL schools. Implemented a unique telephone-based system, assigning each school a dedicated forwarding number. Enhanced school oversight with call history tracking. Integrated features for institutions to modify their profile data seamlessly.',
			image: '/image/portfolio/logo/cdl-help-logo.webp',
			link: 'https://school.cdlhelp.app/',
			git: 'https://github.com/alur2191/CDL-School-Panel',
		},
		{
			title: 'CDL Help ',
			type: 'Mobile Application',
			tools: ['Flutter', 'Provider', 'Firebase Analytics'],
			about: 'A mobile app designed for immigrants, facilitating CDL exam preparation at the DMV and bolstering their English language proficiency.',
			work: 'Developed a mobile application using Flutter targeting immigrants for CDL exam readiness at the DMV. Incorporated bilingual tools to support English language enhancement. Curated and integrated a library of resources for those pursuing truck driving careers. Ensured user-friendly design and intuitive navigation for efficient exam practice and information access.',
			link: 'https://www.dmvhelp.app/',
			image: '/image/portfolio/logo/cdl-help-logo.webp',
		},
		{
			title: 'DMV Help',
			type: 'Mobile Application',
			tools: ['Flutter', 'Provider', 'Firebase Analytics'],
			about: 'DMV Help is a mobile application designed to assist immigrants in preparing for the DMV, while simultaneously aiding in their English language proficiency.',
			work: 'Crafted a user-centric mobile application using Flutter to aid immigrants in DMV preparation. Integrated bilingual support to enhance English language learning. Implemented features for interactive test practice and feedback. Leveraged multimedia content to provide comprehensive guidance on DMV regulations and processes.',
			image: '/image/portfolio/logo/dmv-help-logo.webp',
			link: 'http://www.DMVhelp.app',
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
						{projects[id].link && <div><i className="las la-2x la-globe"></i><a  href={projects[id].link} target="_blank" rel="noopener noreferrer">View Live</a></div>}
						{projects[id].git&&<div><i className="lab la-2x la-github"></i><a href={projects[id].git}  target="_blank" rel="noopener noreferrer">Github</a></div>}
					</div>
				</div>
				<div className={styles.details}>
					<h1>{projects[id].title}</h1>
					<p><em>{projects[id].type}</em></p>
					<div className={styles.tools}>
						<strong>Tech: </strong>
							{projects[id].tools.map((tool,i)=>{
								return(
									<span key={i}>{tool}</span>
								)
							})}
					</div>
					<p><strong>About: </strong>{projects[id].about}</p>
					<p><strong>Work: </strong>{projects[id].work}</p>
				</div>
			</motion.div>
			<div className={styles.navigation}>
				<div className={styles.navButton} onClick={previousProject}><div className={styles.circle}></div><i className="las la-angle-left"></i><span>previous</span></div>
				< motion.h3 initial={{x: navForward ? -20 : 20, opacity:0}}
				animate={{x: 0, opacity:1}}
				exit={{x: navForward ? 20 : -20, opacity:0}}
				transition={{
					ease: 'anticipate',
					duration: 0.3
				}} >{projects[id].title}</ motion.h3>
				<div className={styles.navButton} onClick={nextProject}><div className={styles.circle}></div><span className={styles.nextText}>next</span><i className="las la-angle-right"></i></div>
			</div>
    </div>
  );
}

export default Portfolio;
