"use client";

import CreateBtn from "@/components/CreateBtn";
import GlobalSelect from "@/components/GlobalSelect";
import GreenTemplateViewDownloadBar from "@/components/GreenTemplateViewDownloadBar";
import GridContainer from "@/components/Grid";
import Modal from "@/components/Modal";
import TemplateViewDownloadBar from "@/components/TemplateViewDownloadBar";
import TimeSelect from "@/components/TimeSelect";
import Title from "@/components/Title";
import { FormControlLabel, Grid, Radio, RadioGroup, Stack } from "@mui/material";
import { useState } from "react";

export default function CardPage() {
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const playerOptions = [
    { value: "jogador", label: "Jogador" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const cardOptions = [
    { value: "cartao", label: "Tipo do cartão" },
    { value: "amarelo", label: "Amarelo" },
    { value: "vermelho", label: "Vermelho" },
  ];

  const handleCreateClick = () => {
    setIsCreateClicked(true);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px 0px",
      }}
    >
      <Title title="Cartão" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          maxWidth: "700px",
          gap: 10,
        }}
      >
        <GridContainer
          container
          sx={{ justifyContent: "space-between" }}
        >
          <GridContainer item xs={7} sm={7.8}>
            <GlobalSelect options={playerOptions} />
          </GridContainer>
          <GridContainer item xs={4}>
            <TimeSelect />
          </GridContainer>
        </GridContainer>

        <GridContainer container
          sx={{ alignSelf: "start" }}>
            <GridContainer item xs={7} sm={7.8}>
                <GlobalSelect options={cardOptions} />
            </GridContainer>
        </GridContainer>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "100%",
            marginTop: 25
          }}
        >
          <GridContainer container={true}>
            <GridContainer item={true} xs={12}>
              <CreateBtn onClick={handleCreateClick} />
            </GridContainer>
          </GridContainer>

          <GridContainer
            container={true}
            sx={{ justifyContent: "space-between" }}
          >
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
  );
}
