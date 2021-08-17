import React, {Component} from 'react';

class Key extends Component {
    render(){
        const {keyData} = this.props;
        return(
            <div className="container">
                <div className="text-start">
                    <h5>{keyData.title}</h5>
                </div>
            </div>
        )
    }
}

export default Key;