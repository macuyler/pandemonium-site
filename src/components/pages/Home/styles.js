import Banner from '../../../assets/img/city.jpeg';
import GooglePlay from '../../../assets/img/google-play.png';

const HomeStyles = {
  banner: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: '#fff',
    '& h1': {
      textAlign: 'center',
      boxSizing: 'border-box',
      padding: '0 12px',
      fontFamily: "'Righteous', cursive",
      fontSize: '5rem',
      margin: '0',
      alignItems: 'center',
      textShadow:
        '0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914',
      color: '#FED128',
      animation: navigator.userAgent.includes('Chrome')
        ? ''
        : 'glow 1s ease infinite',
    },
  },
  about: {
    width: '100%',
    minHeight: '100vh',
    padding: '20px 0',
    backgroundColor: 'rgb(25, 25, 25)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    '& img': {
      width: 300,
      boxShadow: '0px 4px 14px 3px rgba(0,0,0,0.8)',
      marginBottom: 60,
      transition: '300ms ease',
      borderRadius: '30px',
    },
    '& img:hover': {
      width: '350px',
      marginTop: '-50px',
    },
    '& h1': {
      fontSize: '3.5rem',
      boxSizing: 'border-box',
      padding: '0 10px',
    },
    '& p': {
      maxWidth: '960px',
      fontSize: '1.8rem',
      textIndent: '20px',
      boxSizing: 'border-box',
      padding: '0 10px',
    },
  },
  downloads: {
    marginTop: 30,
    width: '100%',
    maxWidth: 800,
    boxSizing: 'border-box',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& a': {
      backgroundSize: '100%',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      color: 'rgba(0,0,0,0)',
      fontSize: 0,
      cursor: 'pointer',
      display: 'block',
      margin: 10,
      transition: 'all 250ms ease',
    },
    '& a:hover': {
      transform: 'scale(1.08)',
    },
  },
  playStore: {
    backgroundImage: `url(${GooglePlay})`,
    width: 361,
    height: 106,
  },
  footer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.6)',
    paddingTop: '20px',
    paddingBottom: '12px',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '0 60px',
    '& h5': {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '1.2rem',
      padding: 0,
      marginBottom: '12px',
    },
    '& a': {
      fontSize: '1rem',
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      fontWeight: 'bold',
      marginBottom: '8px',
      whiteSpace: 'no-wrap',
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
  },
  '@media only screen and (max-width: 730px)': {
    about: {
      '& h1': {
        fontSize: '3rem',
      },
      '& img': {
        width: '60%',
        maxWidth: 300,
      },
      '& img:hover': {
        width: '60%',
        marginTop: '0',
      },
      '& p': {
        fontSize: '1.2rem',
        textIndent: 0,
      },
    },
    playStore: {
      width: 242,
      height: 106,
    },
    appStore: {
      width: 200,
      height: 71,
    },
  },
  '@media only screen and (max-width: 670px)': {
    about: {
      '& h1': {
        fontSize: '1.6rem',
      },
    },
    footer: {
      justifyContent: 'space-around',
      paddingBottom: 0,
    },
    links: {
      margin: '0 12px',
      marginBottom: '20px',
      '& h5': {
        fontSize: '1rem',
      },
      '& a': {
        fontSize: '0.8rem',
      },
    },
  },
  '@media only screen and (max-width: 560px)': {
    banner: {
      '& h1': {
        fontSize: '2.3rem',
      },
    },
  },
  '@media only screen and (max-width: 380px)': {
    footer: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    links: {
      margin: '0 0 20px 0',
      minWidth: '50%',
    },
  },
  '@media only screen and (max-width: 260px)': {
    banner: {
      '& h1': {
        fontSize: '1rem',
      },
    },
  },
};

export default HomeStyles;
