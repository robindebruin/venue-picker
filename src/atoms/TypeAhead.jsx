import React, { Component } from 'react';

var Typeahead = require('react-typeahead').Typeahead;

export class TypeAhead extends Component {

    // constructor(props) {
    //     super(props);
    // }

    optionSelected = option => {
        this.props.selection(option);
    }

    render() {
        return (
            <form autoComplete="off">
                <p>typen maar</p>

                <Typeahead
                    options={this.props.options}
                    maxVisible={10}
                    onOptionSelected={this.optionSelected}
                />
            </form>
        )
    }
}
