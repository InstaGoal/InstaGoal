"use client";

import CreateBtn from "@/components/CreateBtn";
import GlobalSelect from "@/components/GlobalSelect";
import GrayBtn from "@/components/GrayBtn";
import GreenBtn from "@/components/GreenBtn";
import GreenTemplateViewDownloadBar from "@/components/GreenTemplateViewDownloadBar";
import GridContainer from "@/components/Grid";
import Modal from "@/components/Modal";
import Scoreboard from "@/components/Scoreboard";
import TemplateViewDownloadBar from "@/components/TemplateViewDownloadBar";
import TimeSelect from "@/components/TimeSelect";
import Title from "@/components/Title";
import { Stack } from "@mui/material";
import { useState } from "react";

export default function LineupPage() {
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const enterOptions = [
    { value: "formato", label: "Formato" },
    { value: "jogador 1", label: "Jogador 1" },
    { value: "jogador 2", label: "Jogador 2" },
  ];

  const outOptions = [
    { value: "jogadores", label: "Jogadores" },
    { value: "jogador 1", label: "Jogador 1" },
    { value: "jogador 2", label: "Jogador 2" },
    { value: "jogador 3", label: "Jogador 3" },
    { value: "jogador 4", label: "Jogador 4" },
    { value: "jogador 5", label: "Jogador 5" },
  ];

  const handleCreateClick = () => {
    setIsCreateClicked(true);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 0px",
        }}
      >
        <Title title="Escalação" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "80%",
            maxWidth: "700px",
            gap: 35,
          }}
        >
          <Stack direction="column" width="100%" gap={1.3}>
            <GlobalSelect options={enterOptions} />
            <GlobalSelect isMulti options={outOptions} onChange={(o: any) => setSelectedOptions(o)}  isOptionDisabled={() => selectedOptions.length >= 11}/>
          </Stack>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "100%",
            }}
          >
            <GridContainer container>
              <GridContainer item xs={12}>
                <CreateBtn onClick={handleCreateClick} />
              </GridContainer>
            </GridContainer>

            <GridContainer container sx={{ justifyContent: "space-between" }}>
              {!isCreateClicked && (
                <TemplateViewDownloadBar onClick={handleModal} />
              )}
              {isCreateClicked && (
                <GreenTemplateViewDownloadBar onClick={handleModal} />
              )}
            </GridContainer>

            <Modal open={isModalOpen} onClose={handleModal} />
          </div>
        </div>
      </div>
    </>
  );
}
