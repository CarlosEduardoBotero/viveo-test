"use client";
import { Controller } from "react-hook-form";
import { Checkbox } from "@mui/material";
import { ControllerCheckboxProps } from "./controller-checkbox-types";

export const ControllerCheckbox = ({
  name,
  controlController,
  ...rest
}: ControllerCheckboxProps) => {
  return (
    <Controller
      name={name}
      control={controlController}
      render={({ field: { onChange, value, ref } }) => {
        return (
          <Checkbox
            {...rest}
            checked={value}
            inputRef={ref}
            onChange={onChange}
          />
        );
      }}
    />
  );
};
