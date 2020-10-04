const SupportStyles = {
  h1: {
    color: "#fff",
    fontSize: "75px",
    marginTop: "100px",
    backgroundColor: "#03AAEF",
    borderRadius: "30px",
    paddingTop: "12px",
    paddingBottom: "28px",
    paddingLeft: "20px",
    paddingRight: "20px",
    margin: "50px auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
    height: "250px",
    "& input": {
      width: "80%",
      fontSize: "20px",
      padding: "8px 20px",
      borderRadius: "30px",
      outline: "none",
      border: "none",
      boxSizing: "border-box",
    },
    "& textarea": {
      width: "80%",
      fontSize: "20px",
      padding: "12px 20px",
      borderRadius: "30px",
      outline: "none",
      border: "none",
      resize: "none",
      boxSizing: "border-box",
    },
    "& button": {
      color: "#fff",
      backgroundColor: "#03AAEF",
      fontWeight: "bold",
      width: "35%",
      fontSize: "18px",
      padding: "6px 20px",
      borderRadius: "30px",
      outline: "none",
      border: "none",
    },
  },

  error: {
    backgroundColor: "red",
    color: "#fff",
    padding: "6px 24px",
    borderRadius: "20px",
    border: "none",
    outline: "none",
    fontSize: "15px",
    fontWeight: "bold",
    marginTop: "30px",
  },
  success: {
    backgroundColor: "#60c640",
    color: "#fff",
    padding: "6px 24px",
    borderRadius: "20px",
    border: "none",
    outline: "none",
    fontSize: "15px",
    fontWeight: "bold",
    marginTop: "30px",
  },
  "@media only screen and (max-width: 540px)": {
    h1: {
      fontSize: "3rem",
    },
    form: {
      fontSize: "3rem",
      width: "90%",
      "& input": {
        width: "100%",
      },
      "& textarea": {
        width: "100%",
      },
      "& button": {
        minWidth: "150px",
        width: "50%",
      },
    },
  },
  "@media only screen and (max-width: 348px)": {
    h1: {
      fontSize: "1.8rem",
    },
  },
  "@media only screen and (max-width: 225px)": {
    h1: {
      fontSize: "1rem",
    },
    form: {
      fontSize: "1rem",
      width: "100%",
      "& input": {
        width: "100%",
      },
      "& textarea": {
        width: "100%",
      },
      "& button": {
        minWidth: "100px",
        width: "40%",
      },
    },
  },
};

export default SupportStyles;
