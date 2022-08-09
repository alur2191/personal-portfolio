import styles from './footer.module.scss';

function Footer() {

  return (
    <footer id='footer' className={styles.container}>
			<div style={{display:'flex', gap: 20}}><a href=""><i className="las la-file-alt"></i>Resume</a><a><i className="las la-at"></i>akmalu21@gmail.com</a><a><i className="lab la-linkedin"></i></a><a href="https://www.linkedin.com"><i className="lab la-github"></i></a></div>
    </footer>
  );
}

export default Footer;
