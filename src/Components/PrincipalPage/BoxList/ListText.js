import React, { Component } from 'react';

class ListText extends Component {
    render() {
        return (
            <p className="font-weight-bold p-0 m-0 pb-3">
                <i class="icon ion-md-checkmark mr-2"></i>
                {this.props.text}
            </p>
        )
    }
};

export default ListText;
