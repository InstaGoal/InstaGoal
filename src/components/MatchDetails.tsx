"use client";

import {
  Avatar,
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

export default function MatchDetails() {
  const teams = [
    {
      name: "Capital FC",
      logo: "/logo-capital.svg",
    },
    {
      name: "Atlético-MG",
      logo: "/logo-cam.svg",
    },
  ];

  return (
    <Container maxWidth="xs">
      <Stack
        direction="row"
        color="#E9E8E8"
        mx={2}
        my={4}
        gap={2}
        justifyContent="center"
      >
        <Stack direction="column" justifyContent="center" gap={2} width="100%">
          {teams.map((team) => (
            <Stack
              key={team.name}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={8}
            >
              <Stack direction="row" alignItems="center" gap={2}>
                <Avatar
                  sx={{ width: 35, height: "auto" }}
                  variant="square"
                  src={team.logo}
                />
                <Typography>{team.name}</Typography>
              </Stack>
              <Typography>0</Typography>
            </Stack>
          ))}
        </Stack>
        <Divider
          sx={{ bgcolor: "#9F9C9C" }}
          variant="fullWidth"
          orientation="vertical"
          flexItem
        />
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          width="40%"
        >
          <Typography>Ao vivo</Typography>
          <Typography>20:00</Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
