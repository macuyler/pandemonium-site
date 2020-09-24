import Banner from '../../../assets/img/city.jpeg';
import GooglePlay from '../../../assets/img/google-play.png';
import AppStore from '../../../assets/img/app-store.png';

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
    '& div': {
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
    '& div:hover': {
      transform: 'scale(1.08)',
    },
  },
  playStore: {
    backgroundImage: `url(${GooglePlay})`,
    width: 361,
    height: 106,
  },
  appStore: {
    backgroundImage: `url(${AppStore})`,
    width: 300,
    height: 106,
  },
  devs: {
    color: '#fff',
    fontSize: '1.8rem',
    padding: 0,
    marginBottom: '12px'
  },
  links: {
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '30px',
    '& span': {
      width: '2px',
      height: '20px',
      backgroundColor: '#fff',
      margin: 0,
      display: 'block',
    },
    '& a': {
      fontSize: '1.2rem',
      color: '#10afd6',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  },
  thin: {
    height: '1px',
    border: '0',
    color: '#fff',
    backgroundColor: '#fff',
    width: '80%',
    margin: '10px',
  },
  '@media only screen and (max-width: 730px)': {
    about: {
      '& img': {
        width: '60%',
        maxWidth: 300,
      },
      '& img:hover': {
        width: '60%',
        marginTop: '0',
      },
      '& h1': {
        fontSize: '2rem',
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
  '@media only screen and (max-width: 560px)': {
    banner: {
      '& h1': {
        fontSize: '2.3rem',
      },
    },
  },
  '@media only screen and (max-width: 345px)': {
    links: {
      flexDirection: 'column',
      '& span': {
        display: 'none'
      },
      '& a': {
        marginBottom: '14px'
      }
    }
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
