import React from 'react';
export default class BoxIn extends React.Component{
    constructor() {
        super();
        this.state = {
            username: 'kaiwen',
            age: 20
        };
    }
    render() {
        setTimeout(() => {
            this.setState({
                username: 'ww',
                age: 30
            })
        }, 3000);
        return (
            <div>
                <h2 style={{ 'color': '#933' }}>内容ooo</h2>
                <p>{this.props.username}{this.state.age}</p>    
                <p>{this.state.username}</p>    
        </div>
    )
    }
}