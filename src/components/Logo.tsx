"use client";

import { Avatar } from "@mui/material";
import { useRouter } from 'next/navigation'

export default function Logo() {
  const router = useRouter();
  const handleOnClick = () =>{
    router.push("/")
  }

  return (
    <Avatar
      src="/logo-branca.svg"
      variant="square"
      sx={{
        width: 30,
        height: "auto",
        cursor: "pointer"
      }}
      onClick={handleOnClick}
    />
  );
}