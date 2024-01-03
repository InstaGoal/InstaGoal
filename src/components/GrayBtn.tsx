"use client";
import { Button } from "@mui/material";
import { BtnProps } from "./GreenBtn";

export default function GrayBtn({text, src}: BtnProps) {
    return(
        <Button size="medium" variant="contained" sx={{ bgcolor: "secondary.dark", width: "100%", height: "100%"}}>{src? <img src={src}/> : text}</Button>
    )
}