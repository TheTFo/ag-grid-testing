import React from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import NumericCellEditor from './NumericCellEditor';

import '../../../node_modules/ag-grid/dist/styles/ag-grid.css';
import '../../../node_modules/ag-grid/dist/styles/theme-fresh.css';

import './style.css';
import gridData from './gridData.json';

export class ValidatePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      filters: {},
    };

    this.onGridReady = this.onGridReady.bind(this);
  }

  onGridReady(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
  }

  render() {
    const columnDefs = [
      {
        headerName: 'FirstName',
        field: 'FirstName',
        editable: true,
      },
      {
        headerName: 'LastName',
        field: 'LastName',
        editable: true,
      },
      {
        headerName: 'City',
        field: 'City',
        editable: true,
      },
      {
        headerName: 'Region',
        field: 'Region',
        editable: true,
      },
      {
        headerName: 'Country',
        field: 'Country',
      },
      {
        headerName: 'NetWorth',
        field: 'NetWorth',
        editable: true,
        cellEditorFramework: NumericCellEditor,
      },
    ];

    return (
      <div className={'ag-fresh'}>
        <div className={'grid'}>
          <AgGridReact
            headerHeight="30"
            onGridReady={this.onGridReady}
            columnDefs={columnDefs}
            rowData={gridData}
          />
        </div>
      </div>
    );
  }
}

ValidatePage.propTypes = {
};

export function mapDispatchToProps() {
  return {
  };
}

const mapStateToProps = () => ({

});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ValidatePage);
