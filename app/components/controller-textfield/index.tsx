"use client";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { ControllerTextFieldProps } from "./controller-textfield-types";

export const ControllerTextField = ({
  name,
  control,
  ...rest
}: ControllerTextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        return (
          <TextField
            {...rest}
            inputRef={ref}
            helperText={error ? error.message : null}
            error={!!error}
            onChange={onChange}
            value={value}
          />
        );
      }}
    />
  );
};
