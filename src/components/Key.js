import React, {Component} from 'react';

class Key extends Component {
    render(){
        const {keyOne} = this.state;
        return(
            <div className="container">
                <div className="text-start">
                    <h5>{keyOne.title}</h5>
                </div>
            </div>
        )
    }
}

export default Key;