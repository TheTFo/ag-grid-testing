import React from 'react';
import { Typeahead } from 'react-typeahead';

export default class TypeaheadCellEditor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  getValue() {
    return this.state.value;
  }

  isPopup() {
    return true;
  }

  afterGuiAttached() {
    this.ta.focus();
  }

  render() {
    const inputStyle = {
      width: `${this.props.eGridCell.offsetWidth}px`,
      height: `${this.props.eGridCell.offsetHeight}px`,
    };

    return (
      <Typeahead
        ref={(c) => { this.ta = c; }}
        customClasses={{
          input: 'ta-input',
          results: 'ta-results',
        }}
        value={this.state.value}
        maxVisible={5}
        inputProps={{ style: inputStyle }}
        options={this.props.values}
        filterOption={(inputValue, option) => option.startsWith(inputValue)}
      />
    );
  }
}

TypeaheadCellEditor.propTypes = {
  value: React.PropTypes.string,
  values: React.PropTypes.array,
  eGridCell: React.PropTypes.object,
};
