import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import AddButton from "../button/AddButton";
import DeleteButton from "../button/DeleteButton";
import { fetchFaqs } from "./FAQs";

interface FAQs { 
  id : string;
  question : string;
  answer : string;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", type:'number', width: 70 },
  { field: "question", headerName: "QUESTION", width: 300 },
  { field: "answer", headerName: "ANSWER", width: 300 }
];

function FAQsContent() {
  const [rows, setRows] = useState<FAQs[]>([]);
  const [selectedRows, setSelectedRows] = useState<FAQs[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFaqs();
      setRows(data);
    };

    fetchData();
  }, []);


  // Handling the Selected Rows 
  const handleSelection = (e: GridRowSelectionModel) => {
   e.forEach(ev => {
    rows.forEach(row => {
      if(row.id === ev){
        setSelectedRows([...selectedRows, row]);
      }
    })
   }) 
  };

  return (
    <div className="main-test" style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          margin: "20px",
          gap: "20px",
        }}
      >
        <AddButton link="/faqs/add" />
        <DeleteButton rows = {selectedRows} from = {'faqs'} />
      </div>
      <div style={{ width: "100%" }}>
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
          onRowSelectionModelChange={handleSelection}
        />
      </div>
    </div>
  );
}

export default FAQsContent;
