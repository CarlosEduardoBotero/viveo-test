"use client";
import { Controller, FieldValues } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { ControlledTextFieldProps } from "./controller-textfield-types";

export const ControllerTextField = <F extends FieldValues>({
  name,
  control,
  ...rest
}: ControlledTextFieldProps<F>) => {
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
