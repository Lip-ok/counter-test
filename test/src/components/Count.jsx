import React from 'react';
import './../App.css';



class Count extends React.Component {
    render = () => {
        return (
                    <div className={(this.props.count === 5) || ( this.props.count === -5) ? 'blockCountRed' : 'blockCount' }>
                        {this.props.count}
                    </div>
        )
    };
};

export default Count;

