"use client";

import { Dialog, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

export interface ModalProps {
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
  src: string
}

export default function Modal({ onClose, open, src }: ModalProps) {
  return (
    <Dialog open={open} onClose={onClose}  PaperProps={{
      style: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    }}>
      <Stack direction="column">
        <IconButton onClick={onClose} sx={{ alignSelf: "flex-end" }}>
          <CloseIcon />
        </IconButton>
        <img
              src={src}
              alt="OG IMAGE"
              style={{
                width: '360px',
                height: '640px'
              }}
            />
      </Stack>
    </Dialog>
  );
}
