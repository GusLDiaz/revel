// import React from 'react';
import { Link } from "gatsby";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from "react"
// import data from '../../data/contact';
// yellow bar with gmaps link, favicons for social
// const Nav = () => (
//   <section id="navbar">
//     <section id="leftNav">
//       <Link to="/" className="logo">
//         <img src={`/images/me_icon.jpg`} alt="" />
//       </Link>
//     </section>
//     <section id="rightNav">
//     </section>
//   </section>
// );
import { StaticQuery, graphql } from "gatsby"
import styles from "./layout.module.css"
import "./layout.css"
import Img from "gatsby-image"
// function dMenuBar() => {
//   {this.props.toggleMenu}=>!{this.props.toggleMenu};
// }
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarPosition: this.getPosition(),
    }//// TODO: add state as necessary
  }

  // demo conditions
  getPosition = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 580 ? "horizontal" : "vertical"
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateSize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize)
  }
  updateSize = () => {
    let position = this.getPosition()
    if (position !== this.state.navbarPosition) {
      // Changing the state will cause a re-render of the page, do in this case
      // we are only changing the state when the navbar changes position
      this.setState({ navbarPosition: position })
    }
  }

  render() {
    const navbarPosition = this.state.navbarPosition
    return (<div id={styles.layout}>
        <nav id={styles.navbar}>
          <div id={styles.navbarBackground}>
            {/* Background Image goes here */}
          </div>
          <div id={styles.navbarMenu}>//NavlinkContainer (check Href)
            <Link className= {styles.navLink} to={"/"}>
            Eats and Drinks
            </Link>
            <Link className={styles.navLink} to={"/venue"}>
              Venue
            </Link>
            <Link className={styles.navLink} to={"/about/"}>
              ABOUT
            </Link>
            <Link className={styles.navLink} to={"/contact/"}>
              CONTACT
            </Link>
          </div>
        </nav>
        // <main id={styles.main}>
        //   <header>
        //     <h1>{this.props.headerText}</h1>
        //   </header>
        //   <div>{this.props.children}</div>
        // </main>
      </div>
    )
  }
}
export default Nav;

      // <StaticQuery
      //   query={graphql`
      //     {
      //       navbarBgVer: file(relativePath: { eq: "navbar-ver.jpeg" }) {
      //         childImageSharp {
      //           fluid(maxHeight: 1200) {
      //             ...GatsbyImageSharpFluid
      //           }
      //         }
      //       }
      //       navbarBgHor: file(relativePath: { eq: "navbar-hor.jpeg" }) {
      //         childImageSharp {
      //           fluid(maxWidth: 2000) {
      //             ...GatsbyImageSharpFluid
      //           }
      //         }
      //       }
      //     }
      //   `}
        // render={data => (
        //   <div id={styles.layout}>
        //     <nav id={styles.navbar}>
        //       <div id={styles.navbarBackground}>
                //{/* navbar background image goes here }
                // {navbarPosition === "vertical" ? (
                //   <Img
                //     style={{ height: "100%" }}
                //     fluid={data.navbarBgVer.childImageSharp.fluid}
                //   />
                // ) : (
                //   <Img
                //     style={{ minHeight: "60px", width: "110%" }}
                //     fluid={data.navbarBgHor.childImageSharp.fluid}
                //   />
          //       // )}
          //     </div>
          //     <div id={styles.navbarMenu}>//NavlinkContainer (check Href)
          //       <Link OnHover="dMenuBar()" className= {styles.navLink} to {"/#1"}>
          //       Eats and Drinks
          //       <Link className={styles.navLink} to={"/venue"}>
          //         Venue
          //       </Link>
          //       <Link className={styles.navLink} to={"/about/"}>
          //         ABOUT
          //       </Link>
          //       <Link className={styles.navLink} to={"/contact/"}>
          //         CONTACT
          //       </Link>
          //     </div>
          //   </nav>
          //   <main id={styles.main}>
          //     <header id={styles.mainHeader}>
          //       <h1>{this.props.headerText}</h1>
          //     </header>
          //     <div id={styles.content}>{this.props.children}</div>
          //   </main>
          // </div>
        // )}
      // />onClick="dMenuBar()" 
