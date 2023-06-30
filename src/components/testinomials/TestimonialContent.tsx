

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import AddTestimonials from './AddTest';

import { fetchTestimonials } from './Testimonials';





const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'details', headerName: 'Details', width: 150 },
  {
    field: 'image',
    headerName: 'Image',
    type: 'object',
    width: 150,
  },

];



export default function TestimonialContent() {
  const [rows, setRows] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTestimonials();
      setRows(data);
    };

    fetchData();
  }, []);

  
  return (
    <div className="main-test" style={{ width: '100%' }}>
      <AddTestimonials />
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
          checkboxSelection
        />
      </div>
    </div>
  );
}