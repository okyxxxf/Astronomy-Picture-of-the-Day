import { Box, ImageList, ImageListItem, Modal } from "@mui/material";
import React from "react";

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  minHeight: 300,
};

interface apolModalProps {
  open : boolean,
  handleClose : Function,
  items : Array<Object> | any
}

const ApodModal = ({open, handleClose, items} : apolModalProps) => {
  const itemsRender = items instanceof Array ? items.map((item) => (
    <ImageListItem key={item.url}>
      <img
        srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  )) : 
  (
  <ImageListItem>
    <img
      srcSet={`${items.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      src={`${items.url}?w=164&h=164&fit=crop&auto=format`}
      alt={items.title}
      loading="lazy"
    />
  </ImageListItem>);
  return (
  <Modal
    open={open}
    onClose={() => handleClose()}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={modalStyle}>
      <ImageList sx={{ width: 500, height: 400 }} cols={1} rowHeight={400} variant="quilted">
        {itemsRender}
      </ImageList>
    </Box>
  </Modal>
  )
};

export default ApodModal;