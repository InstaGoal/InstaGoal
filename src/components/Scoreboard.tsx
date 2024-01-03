"use client";
import { Stack, TextField, Typography } from "@mui/material";
import TeamLogo from "./TeamLogo";
import TeamScoreInput from "./TeamScoreInput";

interface ScoreboardProps{
    firstSrc: string;
    secondSrc: string;
    valueTeamHome: number;
    valueTeamOut: number;
    onChangeScoreHome: any;
    onChangeScoreOut: any;
}

export default function Scoreboard({firstSrc, secondSrc, valueTeamHome, valueTeamOut,  onChangeScoreHome,  onChangeScoreOut}: ScoreboardProps){
    return(
        <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <TeamLogo src={firstSrc}/>
            <Stack direction="row" gap={2} alignItems="center">
                <TeamScoreInput value={valueTeamHome} onChangeScore={onChangeScoreHome}/>
                <Typography color="secondary.main" fontWeight={600}>X</Typography>
                <TeamScoreInput onChangeScore={onChangeScoreOut} value={valueTeamOut}/>
            </Stack>
            <TeamLogo src={secondSrc}/>
        </Stack>
    )
}