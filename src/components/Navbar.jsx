import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <strong className="navbar-item">
                            Markov Text Generator in Myanmar Language
                        </strong>
                    </div>
                </nav>
            </div>
        )
    }
}