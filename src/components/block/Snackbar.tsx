import * as React from "react";
import type { NextPage } from "next";

import IconButton from "@mui/material/IconButton";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import MuiSnackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface SnackbarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  message: string;
}

const Snackbar: NextPage<SnackbarProps> = ({ isOpen, setIsOpen, message }) => {
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={close}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <MuiSnackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={close}
        action={action}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </MuiSnackbar>
    </div>
  );
};

export default React.memo(Snackbar);
