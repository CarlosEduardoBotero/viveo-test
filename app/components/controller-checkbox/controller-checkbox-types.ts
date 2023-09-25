import { CheckboxProps } from "@mui/material";
import { Control, FieldValues, Path } from "react-hook-form";

type ControlledType<F extends FieldValues, T> = {
  name: Path<F>;
  controlController: Control<F>;
} & T;

export type ControlledCheckboxProps<F extends FieldValues> = ControlledType<
  F,
  Omit<CheckboxProps, "onChange" | "onBlur" | "value" | "errorMessage"> // Remove all properties that is already handled by the controller
>;
