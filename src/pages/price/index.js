import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Price extends Component {
    render() {
        return (
            <div>
                询问底价
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Price);