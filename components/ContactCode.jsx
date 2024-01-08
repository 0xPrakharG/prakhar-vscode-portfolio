import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'prakhargoyal.3014@gmail.com',
    href: 'mailto:prakhargoyal.3014@gmail.com',
  },
  {
    social: 'github',
    link: '0xPrakharG',
    href: 'https://github.com/0xprakharg',
  },
  {
    social: 'linkedin',
    link: '0xPrakharG',
    href: 'https://www.linkedin.com/in/0xprakharg/',
  },
  {
    social: 'twitter',
    link: '0xPrakharG',
    href: 'https://twitter.com/0xPrakharG',
  },
  {
    social: 'whatsapp',
    link: 'prakhargoyal',
    href: 'https://wa.me/9305325616',
  },
  {
    social: 'instagram',
    link: 'prakhar.3014',
    href: 'https://www.instagram.com/prakhar.3014',
  },
  {
    social: 'telegram',
    link: 'PrakharG0x',
    href: 'https://t.me/PrakharG0x',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 6).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
