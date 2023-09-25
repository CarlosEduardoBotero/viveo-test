"use client"; // Error components must be Client Components

import { Alert, Button } from "@mui/material";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Alert
      severity="error"
      action={
        <Button color="error" size="small" onClick={() => reset()}>
          Tente novamente
        </Button>
      }
    >
      Ocorreu um erro
    </Alert>
  );
}
