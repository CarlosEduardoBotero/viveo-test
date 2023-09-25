// eslint-disable  @typescript-eslint/no-explicit-any
import { TextFieldProps } from "@mui/material/TextField";
import { Control, FieldValues, Path } from "react-hook-form";

// Base type for controlled inputs
type ControlledType<F extends FieldValues, T> = {
  name: Path<F>;
  control: Control<F>;
} & T;

export type ControlledTextFieldProps<F extends FieldValues> = ControlledType<
  F,
  Omit<TextFieldProps, "onChange" | "onBlur" | "value" | "errorMessage"> // Remove all properties that is already handled by the controller
>;
