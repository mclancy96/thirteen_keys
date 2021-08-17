import React, {Component} from 'react';

class Key extends Component {
    render(){
        const {keyData} = this.props;
        return(
            <div className="container text-start my-2">
                <div className="row my-0">
                    <div className="col-1">
                        <div className="form-check form-switch">
                           <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked={keyData.status}></input>
                        </div>
                    </div>
                    <div className="col-11">
                        <h5>{keyData.title}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">

                    </div>
                    <div className="col-11 pl-3">
                        <span>{keyData.description}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Key;