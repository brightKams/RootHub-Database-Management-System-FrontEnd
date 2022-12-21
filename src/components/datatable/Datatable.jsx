import React from 'react'
import "./datatable.scss"
import { DataGrid} from '@mui/x-data-grid';

const Datatable = (props) => {

  return (
    <div className='datatable'>
        <DataGrid
        rows={props.value.rows}
        columns={props.value.columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
      />
    </div>
  )
}

export default Datatable