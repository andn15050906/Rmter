import React, { Component } from 'react';
import $ from 'jquery';
import * as glob from '../scripts/global';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            base64: null,
            leftOffset: 0,
            topOffset: 0,
        }
        while (glob.getHome().length > 0)
            glob.getHome().pop();
        glob.getHome().push(this);

        this.leftClick = this.leftClick.bind(this);
        this.rightClick = this.rightClick.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    componentDidMount() {
        var remoteScreen = $('#remoteScreen');
        this.setState({ leftOffset: parseInt(remoteScreen.offset().left) });
        this.setState({ topOffset: parseInt(remoteScreen.offset().top) });
        remoteScreen.focus();
    }

    setStream(img) {
        this.setState({base64 : img});
    }

    leftClick(e) {
        glob.sendLeftClick(e.clientX - this.state.leftOffset, e.clientY - this.state.topOffset);
    }

    rightClick(e) {
        glob.sendRightClick(e.clientX - this.state.leftOffset, e.clientY - this.state.topOffset);
    }

    mouseMove(e) {
        glob.sendMouseMove(e.clientX - this.state.leftOffset, e.clientY - this.state.topOffset);
    }

    keyPress(e) {
        console.log("called");
        console.log(e.key);
        glob.sendKeyPress(e.key);
    }

    render() {
        return (
            <div id="remoteScreen" onKeyPress={this.keyPress}>
                {this.state.base64 ?
                    <img src={"data:image/jpg;base64," + this.state.base64}
                        onClick={this.leftClick}
                        onContextMenu={this.rightClick}
                        onMouseMove={this.mouseMove}
                    ></img> :
                    <div></div>
                }
            </div>
        );
    }
}
