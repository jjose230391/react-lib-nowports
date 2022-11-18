import React, { Component } from 'react';

import getChats from '../../data/chat';

class ExampleV2 extends Component {
    constructor(props){
        console.log(props)
        super(props);
        this.state = {}
    };

    componentDidMount(){
        this.fetchChats();
    }

    fetchChats = async() => {
        const { onChatLoaded } = this.props;

        try {
            const response = await getChats();
            console.log(response, 'response')
        } catch (error) {
            console.log(error)
        }
    };
    
    render(){
        const { children } = this.props;
        return <h2>{children}s</h2>
    };
};

// const ExampleV2 = ({text}) => {
//     return <h2>{text}</h2>
// }

export default ExampleV2