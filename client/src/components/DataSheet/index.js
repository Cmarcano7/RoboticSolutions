import React, { Component, useEffect, useState } from 'react';
import {Row} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import API from '../../utils/API';

function Info () {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    loadInfo()
  }, []);

  function loadInfo() {
    API.getAllInfo()
    .then(res => 
      setInfo(res.data)
    )
    .catch(err => console.log(err)); 
  };

  console.log(info)

  return (
    <Row id='dTable'>
    <DataTable
      title="Master Dress Pack Buy-Off Matrix "
      columns={columns}
      data = { info }
      customStyles={customStyles}
      highlightOnHover
      dense
      responsive
    />
    </Row>
  );
};

const columns = [

  {
    cell:() => <button>Update</button>, // onClick={route to get specific id} needs to be added inside <button>
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  
  {
    name: 'Robot Type/Model',
    selector: 'robotModel',
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: 'Robot Application',
    selector: 'robotApplication',
    sortable: true,
    center: true,
  },
  {
    name: 'Serial Number/F #',
    selector: 'serialNumber',
    sortable: true,
    center: true,
  },
  {
    name: 'Customer & Plant Location',
    selector: 'endUser',
    sortable: true,
    center: true,
  },
  {
    name: 'Integrator/ Line Owner',
    selector: 'integrator',
    sortable: true,
    center: true,
  },
  {
    name: 'Station / Robot ID',
    selector: 'stationID',
    sortable: true,
    center: true,
  },
  {
    name: 'System / Line',
    selector: 'system',
    sortable: true,
    center: true,
  },
  {
    name: 'Leoni PD#',
    selector: 'partDescriptionNumber',
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
          fontSize: '11px',
          width: '9rem',
          subHeaderAlign: 'center',
          paddingBottom: '5px',    
      },
    },

    cells: {
      style: {  
          borderLeftStyle: 'solid',
          borderLeftWidth: '1px',      
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          fontSize: '10px',       
      },
    },
  };

export default Info;