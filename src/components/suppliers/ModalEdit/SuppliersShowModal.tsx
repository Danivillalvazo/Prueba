import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';  
import SupplierModalHeader from './SuppliersModalHeader';
import SuppliersModalContent from './SuppliersModalContent';
import SuppliersModalFooter from './SuppliersModalFooter';
 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "85%",
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: 4,
  boxShadow: 24,
  p: 3,
};

interface SuppliersShowModalProps {
  handleOpen: () => void;
  handleClose : () => void;
  open: boolean;
}

 export default function SuppliersShowModal({
  handleClose,
  open
}: SuppliersShowModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 300 } }}
    >
      <Fade in={open}>
        <Box sx={style}>
          {/* HEADER */}
          <SupplierModalHeader
            name="Daniel Ramirez"
            role="Proveedor"
            initials="DR"
            onDownload={() => console.log("Download")}
            onEdit={() => console.log("Edit")}
            onDelete={() => console.log("Delete")}
          />

           <SuppliersModalContent />

          <SuppliersModalFooter onClose={handleClose} />

        </Box>
      </Fade>
    </Modal>
  );
}
