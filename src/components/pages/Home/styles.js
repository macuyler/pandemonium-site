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
      fontSize: '5rem',
      textShadow: '2px 2px 5px rgba(0,0,0,0.8)',
      margin: '0',
      alignItems: 'center',
      backgroundColor: '#010a00',
      display: 'flex',
      color: '#fff',
      textShadow: '0 0 5px #fff linear-gradient()'


    },
  },
  about: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#4E5B7F',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    '& img': {
      width: 300,
      boxShadow: '0px 4px 14px 3px rgba(0,0,0,0.5)',
      marginBottom: 60,
    },
    '& h1': {
      fontSize: '3.5rem',
      marginBottom: 20
    },
    '& p': {
        maxWidth: '960px',
        fontSize: '1.8rem',
        textIndent: '20px'
    }
  },
};

export default HomeStyles;
