import React from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
class ColorBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState(evt) {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        })
    }
    render() {
        const { color, name } = this.props;
        return (
            <div style={{ background: color }} className="ColorBox">
                <div
                    className={`copy-overlay ${this.state.copied && 'show'}`}
                    style={{ background: color }} >
                </div>
                <div className={`copy-message ${this.state.copied && 'show'}`}>
                    <h1>copied!</h1>
                    <p>{color}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <CopyToClipboard text={color} onCopy={this.changeCopyState}>
                        <button className="copy-button">Copy</button>
                    </CopyToClipboard>
                </div>
                <span className="see-more">More</span>
            </div>
        );
    }
}
export default ColorBox;