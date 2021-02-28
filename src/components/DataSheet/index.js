import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import DataTable from 'react-data-table-component';

const data = [{ id: 1, rtm: 'R2000iC210F', robapp: 'Drill+Vision', SNF: 'F196331' }, { id: 2, rtm: 'R2000iC210F', robapp: 'Drill+Vision', SNF: 'F196332' }];

// const subheader = [
//   {
//     name: 'Plant & Integrator Information',
//   },
//   {
//     name: 'Initial Review',
//   },
//   {
//     name: 'Validation (Final Review)',
//   }
// ]

const columns = [

  {
    cell:() => <button>Update</button>, // onClick={route to get specific id} needs to be added inside <button>
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  
  {
    name: 'Robot Type/Model',
    selector: 'rtm',
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: 'Robot Application',
    selector: 'robapp',
    sortable: true,
    center: true,
  },
  {
    name: 'Serial Number/F #',
    selector: 'SNF',
    sortable: true,
    center: true,
  },
  {
    name: 'Customer & Plant Location',
    selector: 'CPL',
    sortable: true,
    center: true,
  },
  {
    name: 'Integrator/ Line Owner',
    selector: 'InLO',
    sortable: true,
    center: true,
  },
  {
    name: 'Station / Robot ID',
    selector: 'StaRobId',
    sortable: true,
    center: true,
  },
  {
    name: 'System / Line',
    selector: 'SysLine',
    sortable: true,
    center: true,
  },
  {
    name: 'Leoni PD#',
    selector: 'LeoniPD',
    sortable: true,
    center: true,
  },
  {
    name: 'Optimization Location',
    selector: 'OPIR',
    sortable: true,
    center: true,
  },
  {
    name: 'Optimization Date',
    selector: 'ODIR',
    sortable: true,
    center: true,
  },
  {
    name: 'Leoni Technician who performed Optimization',
    selector: 'LTOIR',
    sortable: true,
    center: true,
  },
  {
    name: 'Are Changes Required? Y/N',
    selector: 'ACRYNIR',
    sortable: true,
    center: true,
  },
  {
    name: 'Date Integrator Resolved Optimization Issues',
    selector: 'DIROIIR',
    sortable: true,
    center: true,
  },
  {
    name: 'Date Optimization Complete',
    selector: 'DOCIR',
    sortable: true,
    center: true,
  },
  {
    name: 'Validation Location',
    selector: 'VLFR',
    sortable: true,
    center: true,
  },
  {
    name: 'Date of Validation',
    selector: 'DOVFR',
    sortable: true,
    center: true,
  },
  {
    name: 'Leoni Technician who Performed Validation',
    selector: 'LTPVFR',
    sortable: true,
    center: true,
  },
  {
    name: 'Any Unresolved Issues Y/N',
    selector: 'AUIFR',
    sortable: true,
    center: true,
  },
  {
    name: 'Date Integrator Resolved Validation Issues',
    selector: 'DIRVIFR',
    sortable: true,
    center: true,
  },
  {
    name: 'SOP / Warranty Effective Date',
    selector: 'SWEDFR',
    sortable: true,
    center: true,
  },
  {
    name: 'Warranty Expiration Date',
    selector: 'WEDFR',
    sortable: true,
    center: true,
  },
  {
    name: 'Final Inspection Date',
    selector: 'FIDFR',
    sortable: true,
  },
  {
    name: 'Robot Programs Verified Document Program Names',
    selector: 'RPVDPNFR',
    sortable: true,
    center: true,
  },
  {
    name: 'Notes',
    selector: 'Notes',
    sortable: true,
    center: true,
  },
  ];

  const customStyles = {
    headCells: {
      style: {
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          fontSize: '12px',
      },
    },

    cells: {
      style: {        
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          fontSize: '11px',        
      },
    },
  };


class DataSheet extends Component {
  render() {
    return (
      <Row>
      <DataTable
        title="Master Dress Pack Buy-Off Matrix "
        columns={columns}
        data={data}
        customStyles={customStyles}
        highlightOnHover
        dense
      />
      </Row>
    );
  }
};
export default DataSheet;