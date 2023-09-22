"use client";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./form-input-text-types";

export const FormInputText = ({ name, control, ...rest }: FormInputProps) => {
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
            value={value || ""}
          />
        );
      }}
    />
  );
};
