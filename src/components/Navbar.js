/*
Navbar.js

Navigation bar, composed of the link to various section and the social icons.
 */

import React, {Component} from 'react';
import './Navbar.css';

class NavItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <a href={`#${this.props.section}`}>{this.props.sectionText}</a>
            </li>
        );
    }
}

class SocialIcon extends Component {
    render() {
        return (
            <div className="icon">
                <a href={this.props.url}>
                    <i className={`fa fa-lg fa-${this.props.kind}`} aria-hidden="true">
                    </i>
                </a>
            </div>
        );
    }
}


class Navbar extends Component {
    render() {
        return (
            <header className="container-fluid">
                <div className="wrapper" id="navbar">
                    <div id="dummy-div">
                        {/* Dummy div to push the nav-bar to middle */}
                    </div>
                    <div id="menu-section">
                        <ul className="nav navigation" id="menu">
                            <NavItem section="about" sectionText="ABOUT"/>
                            <NavItem section="news" sectionText="NEWS"/>
                            <NavItem section="members" sectionText="MEMBERS"/>
                            <NavItem section="teams" sectionText="TEAMS"/>
                            <NavItem section="sponsors" sectionText="SPONSORS"/>
                        </ul>
                    </div>
                    <div id="social-section">
                        <SocialIcon kind="facebook-official" url="https://www.facebook.com/groups/1017831178363028"/>
                        <SocialIcon kind="github" url="https://github.com/bumic"/>
                        <SocialIcon kind="envelope-o" url="mailto:bumic@bu.edu"/>
                        <SocialIcon kind="medium" url="https://medium.com/@bumic_"/>
                        <SocialIcon kind="twitter" url="https://twitter.com/@bumic_"/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;