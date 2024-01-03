"use client";

import { Button } from "@mui/material";
import { BtnProps } from "./GreenBtn";

export default function CreateBtn({onClick}: BtnProps){
    return(
        <Button onClick={onClick} size="medium" variant="contained" sx={{bgcolor: "#25AD62", width: "100%"}}>Criar</Button>
    )
}