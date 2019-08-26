import React from "react";
import Main from "./MainContent/Main";
import Header from "./Header";
import Footer from "./Footer";
import MenuButton from "./MenuButton";
import SideMenu from "./SideMenu";
import Overlay from "./Overlay";
import { Helmet } from 'react-helmet';
import { SiteContainer } from "components";
import "styles/index.css";

class Layout extends React.Component {
  state = {
    showSideMenu: false
  };

  componentDidUpdate(prevProps, prevState) {
    const { showSideMenu } = this.state;
    if (prevState.showSideMenu !== showSideMenu) {
      document.body.className = showSideMenu ? "open" : "closed";
    }

    const { pathname: prevPathname } = prevProps.location;
    const { pathname: newPathname } = this.props.location;
    if (prevPathname !== newPathname) {
      this.setState({ showSideMenu: false });
    }
  }

  showMenu = () => {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  };

  render() {
    const { children } = this.props;
    const status = this.state.showSideMenu ? "open" : "closed";

    return (
      <SiteContainer>
        <Helmet title="Business Startup" defer={false} />
        <Header />
        <MenuButton status={status} onClick={this.showMenu} />
        <Overlay status={status} onClick={this.showMenu} />
        <SideMenu status={status} />
        <Main> {children} </Main>
        <Footer />
      </SiteContainer>
    );
  }
}

export default Layout;
