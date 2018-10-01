import React from 'react';
import './Statusbar.css';


class Statusbar extends React.Component {
    render() {
        return (
            <div className="statusbar">
                <div className="sb-item">Clicky Game</div>
                <div className="sb-item">Status here</div>
                <div className="sb-item">Score: 0 | Top Score: 0</div>
            </div>
        );
    }
}

//Boostrap version
/* class Statusbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <ul className="navbar-nav d-flex justify-content-around">
                    <li className="brand">Clicky Game</li>
                    <li className="nav-item">Status here</li>
                    <li className="nav-item">Score: 0 | Top Score: 0</li>
                </ul>
            </nav>
        );
    }
} */

export default Statusbar;