import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer" style={{bottom: '0', right: '0', 'left': 0, position: 'absolute'}}>
                <div className="container has-text-centered">
                    <strong>Made</strong> by <a href="https://github.com/ha-shine" target="_blank" rel="noopener noreferrer">Htet Aung Shine</a>. The source code can be found on
                    <a href="https://github.com/ha-shine/mm-markov-generator" target="_blank" rel="noopener noreferrer"><span className="icon"><i className="fa fa-github" /></span>Github</a>
                </div>
            </footer>
        )
    }
}