import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function Modal({ item, handleDelete }) {
  return (
    <Dialog
      open={true}
      onClose={() => handleDelete(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete itme!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`Do you want to delete ${item.name} register?`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleDelete(true)} autoFocus>
          Confirm
        </Button>
        <Button onClick={() => handleDelete(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
