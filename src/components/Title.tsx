"use client";
import { Typography } from "@mui/material";

interface TitleProps{
    title: string
}

export default function Title({title}: TitleProps){
    return(
    <Typography fontSize="20px" fontWeight={700} color="rgba(233, 232, 232, 1)" mb={8} >{title}</Typography>
    )
}