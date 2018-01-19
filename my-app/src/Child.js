import React from 'react';
class Child extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.files}
                <div>Child</div>
            </div>
        )
    }
}

export default Child;