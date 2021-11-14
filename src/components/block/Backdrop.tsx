import * as React from "react";
import type { NextPage } from "next";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

type BackDropProps = {
  open: boolean;
};

const SimpleBackdrop: NextPage<BackDropProps> = ({ open }) => {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default SimpleBackdrop;
