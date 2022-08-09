import styles from './footer.module.scss';

function Footer() {

  return (
    <footer id='footer' className={styles.container}>
			<ul>
				<li>
					<a href="/resume.pdf"><i className="las la-file-alt"></i><span>Resume</span></a>
				</li>
				<li>
					<a href='mailto:akmalu21@gmail.com'><i className="las la-at"></i>Email</a>
				</li>
				<li>
					<a href="https://www.linkedin.com"><i className="lab la-linkedin"></i></a>
				</li>
				<li>
					<a href="https://www.github.com/dandavisjs"><i className="lab la-github"></i></a>
				</li>
			</ul>
    </footer>
  );
}

export default Footer;
