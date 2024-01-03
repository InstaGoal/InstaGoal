"use client";

interface TeamLogoProps{
    src: string
}

export default function TeamLogo({src}: TeamLogoProps) {
    return(
        <img src={src}/>
    )
}