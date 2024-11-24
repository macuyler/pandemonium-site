import FileIcon from '../../../assets/img/fileicon.png';

const AppStoreStyles = {
  reviews: {
    width: '100%',
    marginTop: 40,
    marginBottom: 40,
    borderTop: '1px solid rgba(255, 255, 255, 0.6)',
    boxSizing: 'border-box',
    padding: '20px 10px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '& span': {
      display: 'block',
      margin: '8px 0',
    },
    '& > span:first-child': {
      opacity: '0.6',
    },
    '& h4': {
      marginTop: 10,
      marginBottom: 40,
      fontSize: '1.2rem',
    },
    '& h5': {
      margin: '3px 0',
      fontSize: '1rem',
    },
    '& p': {
      fontSize: '1rem',
    },
    '& a': {
      color: '#08f',
    },
    '& ul': {
      listStyleType: 'none',
      marginBottom: 20,
    },
    '& ol': {
      marginLeft: 18,
      paddingLeft: 18,
      marginBottom: 20,
    },
    '& li': {
      margin: '4px 0',
    },
    '& hr': {
      margin: 0,
      marginBottom: 20,
      border: 'none',
      height: '0.1px',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
  },
  error: {
    color: '#ff3b30',
  },
  fileIcon: {
    padding: '3px 0 3px 30px',
    backgroundImage: `url(${FileIcon})`,
    backgroundSize: '24px auto',
    backgroundRepeat: 'no-repeat',
  },
};

export default AppStoreStyles;
