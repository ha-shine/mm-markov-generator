import React, { Component } from 'react';
import Markov from '../service/Markov';

export default class MarkovArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGenerating: false,
            outputText: '',
            prefixLen: 2,
            outputLen: 200
        }
    }

    onPrefixLenChange = (e) => {
        const prefixLen = Number(e.target.value);
        if (!isNaN(prefixLen)) {
            this.setState({
                prefixLen: prefixLen
            });
        }
    }

    onOutputLenChange = (e) => {
        const outputLen = Number(e.target.value);
        if (!isNaN(outputLen)) {
            this.setState({
                outputLen: outputLen
            })
        }
    }

    onClickGenerate = (e) => {
        if (!this.state.isGenerating) {
            this.setState({
                isGenerating: true,
                outputText: ''
            })
            let markov = new Markov(this.state.prefixLen, this.state.outputLen);
            markov.build(this.inputArea.value);
            let output = markov.generate();
            this.setState({
                isGenerating: false,
                outputText: output
            })
        }
    }

    render() {
        const buttonClass = this.state.isGenerating ? 'button is-primary is-medium is-loading' : 'button is-primary is-medium';
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p>Enter your source corpus text below. <strong className="has-text-danger">This works with unicode text contents only.</strong></p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <textarea className="textarea" style={{resize: 'none'}} rows="10" ref={inputArea => {this.inputArea = inputArea}}></textarea>
                        </div>
                    </div>
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">Prefix Length</div>
                            <div className="level-item">
                                <input type="text" className="input" value={this.state.prefixLen} onChange={this.onPrefixLenChange}/>
                            </div>
                            <div className="level-item">Output Length</div>
                            <div className="level-item">
                                <input type="text" className="input" value={this.state.outputLen} onChange={this.onOutputLenChange}/>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <button className={buttonClass} onClick={this.onClickGenerate}>
                                    <span className="icon">
                                        <i className="fa fa-check"></i>
                                    </span>
                                    <span>Generate</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        { 
                            this.state.outputText === '' ?
                            '' :
                            <div className="column">
                                <article className="message">
                                    <div className="message-body">
                                        {this.state.outputText}
                                    </div>
                                </article>
                            </div>
                        }
                    </div>
                </div>
            </section>
        )
    }
}