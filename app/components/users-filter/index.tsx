"use client";

import { updateQueryParams } from "@/app/utils/updateQueryParams";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const COUNTRIES = [
  { value: "AU", placeholder: "Australia" },
  { value: "BR", placeholder: "Brasil" },
  { value: "CA", placeholder: "Canadá" },
  { value: "CH", placeholder: "Suiza" },
  { value: "DK", placeholder: "Dinamarca" },
  { value: "ES", placeholder: "Espanha" },
  { value: "FI", placeholder: "Finlândia" },
  { value: "FR", placeholder: "França" },
  { value: "IE", placeholder: "Irlanda" },
  { value: "IN", placeholder: "India" },
  { value: "IR", placeholder: "Irã" },
  { value: "MX", placeholder: "Mexico" },
  { value: "NL", placeholder: "Países Baixos" },
  { value: "NO", placeholder: "Noruega" },
  { value: "NZ", placeholder: "Noruega" },
  { value: "RS", placeholder: "Rússia" },
  { value: "TR", placeholder: "Turquia" },
  { value: "UA", placeholder: "Ucrânia" },
  { value: "US", placeholder: "Estados Unidos" },
  { value: "DE", placeholder: "Alemanha" },
];

export default function UsersFilters() {
  const searchParams = useSearchParams();
  const genderQuery = searchParams.get("gender");
  const natQuery = searchParams.get("nat");
  const router = useRouter();
  const [gender, setGender] = useState(genderQuery || "");
  const [nat, setNat] = useState(natQuery || "");

  const handleChangeSelectGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
    const updatedQueryParams = updateQueryParams(
      searchParams.entries(),
      "gender",
      event.target.value as string
    );

    router.push(`/users?${updatedQueryParams}`);
  };

  const handleChangeSelectNat = (event: SelectChangeEvent) => {
    setNat(event.target.value as string);
    const updatedQueryParams = updateQueryParams(
      searchParams.entries(),
      "nat",
      event.target.value as string
    );
    router.push(`/users?${updatedQueryParams}`);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 100 }} size="small">
        <InputLabel id="gender-select-label">Género</InputLabel>
        <Select
          labelId="gender-select-label"
          id="gender-select"
          label="Género"
          value={gender}
          onChange={handleChangeSelectGender}
        >
          <MenuItem value="male">Homem</MenuItem>
          <MenuItem value="female">Mulher</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 100, ml: 2 }} size="small">
        <InputLabel id="country-select-label">Pais</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          label="Paises"
          value={nat}
          onChange={handleChangeSelectNat}
        >
          {COUNTRIES.map(({ value, placeholder }) => (
            <MenuItem key={value} value={value}>
              {placeholder}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
