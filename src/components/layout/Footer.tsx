import styles from './footer.module.scss';

function Footer() {

  return (
    <footer id='footer' className={styles.container}>
			<ul>
				<li>
					<a href="https://www.linkedin.com/in/alur2191/"><i className="lab la-linkedin"></i></a>
				</li>
				<li>
					<a href="https://github.com/alur2191"><i className="lab la-github"></i></a>
				</li>
			</ul>
    </footer>
  );
}

export default Footer;
