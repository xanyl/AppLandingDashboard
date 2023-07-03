import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { FetchFaqs } from './FetchFaqs';
import AddFaqs from './AddFaqs';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'question', headerName: 'Question', width: 150 },
  { field: 'answer', headerName: 'Answer', width: 150 },
];



export default function FaqsContent() {
  const [rows, setRows] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchFaqs();
      setRows(data);
    };

    fetchData();
  }, []);


  return (
    <div className="main-test" style={{ width: '100%' }}>
      <AddFaqs />
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