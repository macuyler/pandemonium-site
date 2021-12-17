import injectSheet from "react-jss";
import PageStyles from "./styles";

const pageInject = (styles) => injectSheet({ ...PageStyles, ...styles });

export default pageInject;
