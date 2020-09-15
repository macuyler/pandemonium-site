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
      fontFamily: "'Righteous', cursive",
      fontSize: '5rem',
      margin: '0',
      alignItems: 'center',
      color: '#FB4264',
      textShadow: '0 0 3vw #F40A35',
      animation: 'glow 1s ease infinite',
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
    },
    '& img:hover': {
      width: '350px',
      marginTop: '-50px',
    },
    '& h1': {
      fontSize: '3.5rem',
    },
    '& p': {
      maxWidth: '960px',
      fontSize: '1.8rem',
      textIndent: '20px',
    },
  },
  downloads: {
    marginTop: 30,
    width: '50%',
    maxWidth: 1000,
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
      transition: 'all 250ms ease'
    },
    '& div:hover': {
      transform: 'scale(1.08)'
    }
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
};

export default HomeStyles;
