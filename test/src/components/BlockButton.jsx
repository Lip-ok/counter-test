import React from 'react';
import './../App.css';



class BlockButton extends React.Component {

    render = () => {
        debugger
        return (
                    <div className='buttonBlock'>

                        <button onClick={this.props.buttonClick}
                                disabled={this.props.count === 5}
                                className='button'>Inc</button>
                        <button onClick={this.props.buttonReset}
                                disabled={this.props.disabled}
                                className='button'>Reset</button>
                        <button onClick={this.props.buttonBack}
                                disabled={this.props.count === -5}
                                className='button'>Dcr</button>

                    </div>
        )

    };
};

export default BlockButton;

