import styles from './footer.module.scss';

function Footer() {

  return (
    <footer id='footer' className={styles.container}>
			<ul>
				<li>
					<a href="/resume.pdf"><i className="las la-file-alt"></i><span>Resume</span></a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/akmal-urunboev-46142a248/"><i className="lab la-linkedin"></i></a>
				</li>
				<li>
					<a href="https://www.github.com/dandavisjs"><i className="lab la-github"></i></a>
				</li>
			</ul>
    </footer>
  );
}

export default Footer;
