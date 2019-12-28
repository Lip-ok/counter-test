import React from 'react';
import './App.css';
import BlockButton from "./components/BlockButton";
import Count from "./components/Count";

class App extends React.Component {

    state = {
        count: 0,
    }

    buttonAdd = () => {
        if (this.state.count < 5) {
            this.setState({
                count: this.state.count + 1
            })
        } else {
            this.setState({
                disable: true
            })
        }
    }
    buttonReset = () => {
        this.setState({
            count: this.state.count = 0
        })
    }
    buttonBack = () => {
        debugger
        if (this.state.count > -5) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    disableValue = () => {
        if (this.state.count === 5 || this.state.count === -5) {
            this.setState({
                disable: this.state.disable = true
            })
        }

    }

    render = () => {
        return (
            <div className='app'>
                <div className='mainBlock'>
                    <Count count={this.state.count}/>
                    <BlockButton
                        buttonClick={this.buttonAdd}
                        buttonReset={this.buttonReset}
                        buttonBack={this.buttonBack}
                        count={this.state.count}
                    />
                </div>
            </div>
        )

    };
};

export default App;

