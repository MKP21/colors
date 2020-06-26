import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends React.Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox b{...color} />
        ));
        return (
            <div className="Palette">
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