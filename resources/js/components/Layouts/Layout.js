import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <div style={{ marginTop: "58px" }}
            >{props.children}</div>
            <Footer />
        </Fragment>
    );
};

export default Layout;
