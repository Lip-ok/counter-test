import React from 'react';
import './../App.css';



class BlockButton extends React.Component {

    render = () => {

        return (
                    <div className='buttonBlock'>

                        <button onClick={this.props.buttonClick}
                                disabled={this.props.count === this.props.maxValue}
                                className='button'>Inc</button>
                        <button onClick={this.props.buttonReset}
                                disabled={this.props.disabled}
                                className='button'>Reset</button>
                        <button onClick={this.props.buttonBack}
                                disabled={this.props.count === this.props.minValue}
                                className='button'>Dcr</button>

                    </div>
        )

    };
};

export default BlockButton;

