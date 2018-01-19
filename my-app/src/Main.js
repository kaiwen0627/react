import React from 'react';
class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            files:''
        }
    }
    componentDidMount() {
        const title = this.props.id;
        this.setState({
            files:title
        })
    }

    render() {
        const children = this.props.children(this.state.files);
        return (
            <div>{children}</div>
        )
    }
}
export default Main;

