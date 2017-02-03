import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';

import '../../../node_modules/ag-grid/dist/styles/ag-grid.css';
import '../../../node_modules/ag-grid/dist/styles/theme-fresh.css';

import './style.css';
import gridData from './gridData.json';

export const FilteredHeader = ({ text, onKeyUp, filterText }) => {
  return (
    <div>
      <div>
        <span>{text}</span>
      </div>
      <div>
        <input className={'filter'} type="text" onKeyUp={onKeyUp} value={filterText} />
      </div>
    </div>
  );
};

FilteredHeader.propTypes = {
  text: React.PropTypes.string,
  onKeyUp: React.PropTypes.func,
  filterText: React.PropTypes.string,
};

export class InlineFiltersPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      filters: {},
    };

    this.onGridReady = this.onGridReady.bind(this);
    this.isExternalFilterPresent = this.isExternalFilterPresent.bind(this);
    this.doesExternalFilterPass = this.doesExternalFilterPass.bind(this);
    this.headerFilterCell = this.headerFilterCell.bind(this);
  }

  onGridReady(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
  }

  onFilterChange(e, field) {
    const filters = this.state.filters;
    filters[field] = e.target.value;
    this.setState({ filters });
    this.api.onFilterChanged();
  }

  headerFilterCell(params) {
    const field = params.colDef.field;
    const div = document.createElement('div');
    ReactDOM.render(
      <FilteredHeader
        text={params.colDef.headerName}
        filterText={this.state.filters[field]}
        onKeyUp={(e) => { this.onFilterChange(e, field); }}
      />, div);
    return div;
  }

  isExternalFilterPresent() {
    return true;
  }

  doesExternalFilterPass(node) {
    return Object.keys(this.state.filters)
      .every((f) => this.state.filters ?
        node.data[f].startsWith(this.state.filters[f]) : true);
  }

  render() {
    const columnDefs = [
      {
        headerName: 'FirstName',
        field: 'FirstName',
        headerCellRenderer: this.headerFilterCell,
      },
      {
        headerName: 'LastName',
        field: 'LastName',
        headerCellRenderer: this.headerFilterCell,
      },
      {
        headerName: 'City',
        field: 'City',
        headerCellRenderer: this.headerFilterCell,
      },
      {
        headerName: 'Region',
        field: 'Region',
        headerCellRenderer: this.headerFilterCell,
      },
      {
        headerName: 'Country',
        field: 'Country',
        headerCellRenderer: this.headerFilterCell,
      },
      {
        headerName: 'NetWorth',
        field: 'NetWorth',
        headerCellRenderer: this.headerFilterCell,
      },
    ];

    return (
      <div className={'ag-fresh'}>
        <div className={'grid'}>
          <AgGridReact
            isExternalFilterPresent={this.isExternalFilterPresent}
            doesExternalFilterPass={this.doesExternalFilterPass}
            headerHeight="100"
            onGridReady={this.onGridReady}
            columnDefs={columnDefs}
            rowData={gridData}
          />
        </div>
      </div>
    );
  }
}

InlineFiltersPage.propTypes = {
};

export function mapDispatchToProps() {
  return {
  };
}

const mapStateToProps = () => ({

});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(InlineFiltersPage);
