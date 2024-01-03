"use client"
import { TextField } from "@mui/material";

interface TeamScoreProps{
    value: number;
    onChangeScore: any
}

export default function TeamScoreInput({value, onChangeScore}: TeamScoreProps){
    return(
        <TextField onChange={onChangeScore} value={value} sx={{ width: 15, color: "secondary.main", 'input': { color: "secondary.main", fontWeight: 600, textAlign: "center"}}} placeholder="0" type="number" variant="standard" InputProps={{
            disableUnderline: true,
          }}/>
    )
}