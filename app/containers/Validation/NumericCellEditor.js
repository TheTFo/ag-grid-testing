import React from 'react';

const isCharNumeric = (c) => c ? '0123456789'.indexOf(c) : false;

export default class NumericCellEditor extends React.Component {

  constructor(props) {
    super(props);

    let value;
    if (isCharNumeric(props.charPress)) {
      value = props.charPress;
    } else {
      value = props.value ? props.value : '';
    }

    this.state = { 
      value,
      valid: true,
      originalValue: value,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const currencyRegex = /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,2})?$/;
    this.setState({
      value: e.target.value,
      valid: currencyRegex.test(e.target.value),
    });
  }

  getValue() {
    return this.state.valid ? this.state.value : this.state.originalValue;
  }

  isPopup() {
    return false;
  }

  render() {
    const inputStyle = {
      width: `${this.props.eGridCell.offsetWidth}px`,
      height: `${this.props.eGridCell.offsetHeight}px`,
    };

    const className = !this.state.valid ? 'invalid' : '';

    return (<input
      className={className}
      style={inputStyle}
      type="text"
      value={this.state.value}
      onChange={this.onChange}
    />);
  }
}

NumericCellEditor.propTypes = {
  charPress: React.PropTypes.string,
  value: React.PropTypes.string,
  eGridCell: React.PropTypes.object,
};
