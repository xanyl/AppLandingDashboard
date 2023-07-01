

import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import AddButton from '../button/AddButton';
import { fetchTestimonials } from './testimonials';
import DeleteButton from '../button/DeleteButton';


interface Testimonial{
  id : string;
  name : string;
  quote : string;
  position : string;
  img : string;
}
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'NAME', width: 150 },
  { field: 'quote', headerName: 'QUOTE', width: 300 },
  {
    field: 'position',
    headerName: 'POSITION',
    type: 'object',
    width: 150,
  },

  { field: 'img', headerName: 'IMAGE', width: 300 }
];


export default function TestimonialContent() {
  const [rows, setRows] = useState<Testimonial[]>([]);
  const [selectedRows, setSelectedRows] = useState<Testimonial[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTestimonials();
      setRows(data);
    };

    fetchData();
  }, []);


  const handleSelection = (e: GridRowSelectionModel) => {
      e.forEach(ev => {
        rows.forEach(row => {
          if(row.id === ev){
            setSelectedRows([...selectedRows, row]);
          }
        })
      })
  }
  return (
    <div className="main-test" style={{ height: '100%', width: '100%' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        margin : '20px',
        gap : '20px',
      }}>
      <AddButton link='/testimonials/add' />
      <DeleteButton rows = {selectedRows} from = 'testimonials' />
      </div>
      <div style={{ width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          onRowSelectionModelChange={handleSelection}
          checkboxSelection
        />
      </div>
    </div>
  );
}