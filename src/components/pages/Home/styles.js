import Banner from '../../../assets/img/city.jpeg';

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
    height: '100vh',
    backgroundColor: 'rgb(25, 25, 25)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    '& img': {
      width: 300,
      boxShadow: '0px 4px 14px 3px rgba(0,0,0,0.5)',
      marginBottom: 60,
      transition: '500ms ease',
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
};

export default HomeStyles;
