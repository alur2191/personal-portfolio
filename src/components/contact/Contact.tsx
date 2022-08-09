import styles from './contact.module.scss'

function Contact() {
  return (
    <div className={styles.container}>
			<form action="">
				<div>
					<label htmlFor="">Full Name</label>
					<input type="text" />
				</div>
				<div>
					<label htmlFor="">Email</label>
					<input type="text" />
				</div>
				<div>
					<label htmlFor="">Phone</label>
					<input type="text" />
				</div>
				<div>
					<label htmlFor="">Message</label>
					<textarea/>
				</div>
			</form>
			<div className={styles.description}>
				<h1>Contact</h1>
				<p>Please contact me through the contact form or feel free to reach out through contact methods below:</p>
				<div className={styles.contacts}>
					<div><i className="las la-2x la-phone"></i><span>(424) 228-6265</span></div>
					<div><i className="las la-2x la-envelope"></i><span>akmalu21@gmail.com</span></div>
				</div>
			</div>
    </div>
  );
}

export default Contact;
