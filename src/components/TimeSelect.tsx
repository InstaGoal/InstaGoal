"use client";
import { AccessTime } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

interface TimeSelectProps {
  value: string;
  onChange: any;
}

export default function TimeSelect({ value, onChange }: TimeSelectProps) {
  return (
    <>
      <TextField
        sx={{
          width: "100%",
          "& label.Mui-focused": {
            color: "rgba(180, 180, 180, 1)",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "rgba(180, 180, 180, 1)",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(180, 180, 180, 1)",
            },

            "&.Mui-focused fieldset": {
              borderColor: "rgba(180, 180, 180, 1)",
            },
          },
          "& .MuiFormLabel-root": {
            color: "rgba(180, 180, 180, 1)",
          },
          input: { color: "rgba(180, 180, 180, 1)" },
          '& input[type="time"]::-webkit-calendar-picker-indicator': {
            filter:
              "invert(55%) sepia(10%) saturate(58%) hue-rotate(84deg) brightness(127%) contrast(116%)",
          },
        }}
        label="Minuto"
        value={value}
        onChange={onChange}
        type="number"        
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <AccessTime color="secondary"/>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
