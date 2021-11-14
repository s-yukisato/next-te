import * as React from "react";
import type { NextPage } from "next";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";


const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

interface ControlledSliderProps {
  values: {
    page: number;
    pages: number;
  };
  setValues: ({}) => void;
}

export const ControlledSlider: NextPage<ControlledSliderProps> = ({
  values,
  setValues,
}) => {
  const handleChange = (event: Event) => {
    setValues({ ...values, page: event.target.value });
  };
  return (
    <Box sx={{ width: "90%" }}>
      <Box sx={{ m: 2 }} />
      <Typography gutterBottom></Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        value={values.page}
        max={values.pages}
        onChange={handleChange}
      />
    </Box>
  );
};

interface ReadOnlySliderProps {
  now: number;
  max: number;
}

export const ReadOnlySlider: NextPage<ReadOnlySliderProps> = ({ now, max }) => {
  return (
    <Box sx={{ width: "90%" }}>
      <Box sx={{ m: 2 }} />
      <Typography gutterBottom></Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        value={now}
        max={max}
      />
    </Box>
  );
};
