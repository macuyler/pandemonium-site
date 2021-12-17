import React, { useEffect, useState, useCallback } from "react";
import injectSheet from "react-jss";
import UpIcon from "../../assets/img/up.svg";

const ArticleWrapper = ({ classes, children }) => {
  const [showUB, setShowUB] = useState(false);

  const onScroll = useCallback(() => {
    const shouldShow = window.scrollY > 200;
    if (shouldShow !== showUB) setShowUB(shouldShow);
  }, [showUB]);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const gotoTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <>
      {showUB && (
        <button className={classes.upButton} onClick={gotoTop}>
          <img src={UpIcon} alt="^" />
        </button>
      )}
      {children}
    </>
  );
};

const styles = {
  upButton: {
    cursor: "pointer",
    position: "fixed",
    zIndex: 50,
    bottom: 20,
    right: 20,
    backgroundColor: "#2e2e2e",
    borderRadius: 40,
    border: "none",
    outline: "none",
    width: 40,
    height: 40,
    padding: 10,
    boxSizing: "border-box",
    display: "flex",
    justiyContent: "center",
    alignItems: "center",
    opacity: "0.5",
    transition: "all 200ms ease",
    animation: "fadeInHalfway 200ms ease",
    "& img": {
      width: "100%",
      height: "100%",
    },
    "&:hover": {
      opacity: "0.8",
    },
  },
};

export default injectSheet(styles)(ArticleWrapper);
