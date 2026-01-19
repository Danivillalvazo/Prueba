import { Box } from "@mui/material";  
import SuppliersHeader from "../components/suppliers/SuppliersHeader"; 
import SuppliersList from "../components/suppliers/SuppliersList"; 
import { useState } from "react";
import SuppliersShowModal from "../components/suppliers/ModalEdit/SuppliersShowModal";
 
 


const Suppliers = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
      <> 


          <Box p={2} className="p-3">
            <SuppliersHeader />
            {/* <SuppliersTable /> */}
            <SuppliersList  handleOpen={handleOpen}   />

            <SuppliersShowModal
              handleOpen={handleOpen}
              handleClose={handleClose}
              open={open}  
            />

        
          </Box>
      </>
  );
};

export default Suppliers;
