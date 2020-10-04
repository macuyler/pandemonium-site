const PrivacyStyles = {
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgb(25, 25, 25)",
  },
  content: {
    width: "60%",
    minWidth: "500px",
    maxWidth: "1200px",
    color: "#fff",
    boxSizing: "border-box",
    padding: "30px 10px",
    "& h1": {
      textAlign: "center",
      fontSize: "4rem",
      marginBottom: 12,
    },
    "& h2": {
      textAlign: "center",
      color: "rgba(255, 255, 255, 0.8)",
      marginBottom: 40,
    },
    "& p": {
      fontSize: "1.1rem",
      marginBottom: 20,
    },
    "& h3": {
      fontSize: "2.2rem",
      marginTop: 40,
      marginBottom: 12,
    },
    "& ol": {
      marginBottom: 40,
    },
    "& li": {
      margin: "10px 0",
      color: "#fff",
    },
    "& a": {
      color: "#10afd6",
      textDecoration: "none",
    },
    "& h4": {
      fontSize: "2rem",
      marginTop: 30,
      marginBottom: 20,
    },
    "& h5": {
      fontSize: "1.3rem",
      marginBottom: 20,
    },
  },
  center: {
    textAlign: "center",
  },
  "@media only screen and (max-width: 540px)": {
    content: {
      width: "100%",
      minWidth: "100%",
      maxWidth: "100%",
      "& h1": {
        fontSize: "3rem",
      },
      "& h2": {
        fontSize: "1.2rem",
      },
      "& p": {
        fontSize: "1rem",
      },
      "& h3": {
        fontSize: "1.8rem",
      },
      "& ol": {
        boxSizing: "border-box",
        paddingLeft: 24,
        fontSize: "0.9rem",
      },
      "& ul": {
        boxSizing: "border-box",
        paddingLeft: 16,
      },
      "& h4": {
        fontSize: "1.4rem",
      },
      "& h5": {
        fontSize: "1.2rem",
      },
    },
  },
};

export default PrivacyStyles;
