"use client";
import { Controller, FieldValues } from "react-hook-form";
import { Checkbox } from "@mui/material";
import { ControlledCheckboxProps } from "./controller-checkbox-types";

export const ControllerCheckbox = <F extends FieldValues>({
  name,
  controlController,
  ...rest
}: ControlledCheckboxProps<F>) => {
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
