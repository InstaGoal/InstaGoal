"use client";
import { Button } from "@mui/material";

export interface BtnProps{
    text?: string;
    src?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function GreenBtn({text, src, onClick}: BtnProps) {
    return(
        <Button onClick={onClick} size="medium" variant="contained" sx={{ bgcolor: "primary.dark", width: "100%"}}>{src? <img src={src}/> : text} </Button>
    )
}