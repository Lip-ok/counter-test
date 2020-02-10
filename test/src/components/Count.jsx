import React from 'react';
import './../App.css';



class Count extends React.Component {
    render = () => {
        return (
                    <div className={
                        (this.props.count === this.props.maxValue) || (this.props.count === this.props.minValue) ? 'blockCountRed' : 'blockCount' }>
                        {this.props.count}
                    </div>
        )
    };
};

export default Count;

