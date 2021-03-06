import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';


class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex'
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({ level })
    }

    changeFormat(val) {
        this.setState({ format: val })
    }
    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(color => (
            <ColorBox color={color[this.state.format]} name={color.name} key={color.id} />
        ));
        return (
            <div className="Palette">
                <Navbar
                    level={this.state.level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                />
                <div className="Palette-colors">
                    {colorBoxes}
                    {/* bunch of color boxes */}
                </div>
                <footer className='palette-footer'>
                    {this.props.palette.paletteName}
                    <span className="emoji">{this.props.palette.emoji}</span>
                </footer>
            </div>
        );
    }
}

export default Palette;