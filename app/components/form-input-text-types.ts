import { TextFieldProps } from "@mui/material/TextField";

export type FormInputProps = {
  name: string;
  control: any;
} & TextFieldProps;
