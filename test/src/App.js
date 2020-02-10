import React from 'react';
import './App.css';
import BlockButton from "./components/BlockButton";
import Count from "./components/Count";
import Settings from "./components/Settings";
import {connect} from "react-redux";

class App extends React.Component {

    state = {
        count: 0,
        maxValue: 10,
        minValue: 0,
    }

    buttonAdd = () => {
        if (this.props.count < this.props.maxValue) {
            this.props.incrValue(this.state.count + 1)
        } else {
            this.setState({
                disabled: this.props.disabled = true //Сделать десаблед либо убрать вовсе и
                // переписать полностью счётчик сразу на редаксе
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
        if (this.state.count > this.state.minValue) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    onMaxValueChange = ( maxValue) =>{
        this.setState({
            maxValue: maxValue
        });
    }
    onMinValueChange = (minValue) =>{
        this.setState({
            minValue: minValue
        });
    }


    render = () => {
        return (
            <div className='app'>
                <Settings applySettings={this.applySettings}
                          onMaxValueChange={this.onMaxValueChange}
                          onMinValueChange={this.onMinValueChange}
                            state={this.state}
                />

                <div className='counter'>
                    <div className='mainBlock'>
                        <Count
                            minValue={this.state.minValue}
                            maxValue={this.state.maxValue}
                            count={this.state.count}
                        />
                        <BlockButton
                            minValue={this.state.minValue}
                            maxValue={this.state.maxValue}
                            buttonClick={this.buttonAdd}
                            buttonReset={this.buttonReset}
                            buttonBack={this.buttonBack}
                            count={this.state.count}
                        />
                    </div>
                </div>
            </div>
        )

    };
};

let mapStateToProps = (state)=> {
    return state;
}
    let mapDispatchToProps = (dispatch)=>{
        return{
            incrValue:()=>{
                dispatch();
            }
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(App) ;

