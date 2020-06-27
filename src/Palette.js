import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';


class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({ level })
    }
    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(color => (
            <ColorBox color={color.hex} name={color.name} />
        ));
        return (
            <div className="Palette">
                <Navbar level={this.state.level} changeLevel={this.changeLevel} />
                {/* navbar eventually */}
                <div className="Palette-colors">
                    {colorBoxes}
                    {/* bunch of color boxes */}
                </div>
                {/* footer eventually */}
            </div>
        );
    }
}

export default Palette;