import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    ).then(
      () => alert('Mesajınız başarıyla gönderildi!'),
      (error) => alert('Bir hata oluştu: ' + error.text)
    );
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.pageTitle}>İletişim</h1>
      <div className={styles.contactContent}>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Adınız</label>
            <input type="text" id="name" name="user_name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-posta</label>
            <input type="email" id="email" name="user_email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mesajınız</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Gönder</button>
        </form>
        <div className={styles.socialSection}>
          <h2 className={styles.socialTitle}>Sosyal Medya</h2>
          <div className={styles.socialLinks}>
            <a href="https://github.com" className={styles.socialLink}>
              <img src="/icons/github.svg" alt="GitHub" />
              GitHub
            </a>
            <a href="https://linkedin.com" className={styles.socialLink}>
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
              LinkedIn
            </a>
            <a href="mailto:ornek@mail.com" className={styles.socialLink}>
              <img src="/icons/email.svg" alt="Email" />
              E-posta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;