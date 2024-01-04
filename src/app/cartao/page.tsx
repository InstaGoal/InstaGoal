"use client";

import CreateBtn from "@/components/CreateBtn";
import GlobalSelect from "@/components/GlobalSelect";
import GreenTemplateViewDownloadBar from "@/components/GreenTemplateViewDownloadBar";
import GridContainer from "@/components/Grid";
import Modal from "@/components/Modal";
import TemplateViewDownloadBar from "@/components/TemplateViewDownloadBar";
import TimeSelect from "@/components/TimeSelect";
import Title from "@/components/Title";
import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { useState } from "react";

export default function CardPage() {
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [player, setPlayer] = useState("");
  const [imageUrl, setImageUrl] = useState("/api/og");
  const [goalMinute, setGoalMinute] = useState("");
  const [card, setCard] = useState("")
  const baseURL = window.location.origin;
  const backgroundPath = `${baseURL}/cartao.svg`;
  const encodedPlayer = encodeURIComponent(player);
  const encodedGoalMinute = encodeURIComponent(goalMinute);
  const encodedCard = encodeURIComponent(card)

  const players = [
    { value: "jogador", label: "Jogador", isdisabled: true },
    { value: "gustavo", label: "GUSTAVO" },
    { value: "paulo roberto", label: "PAULO ROBERTO" },
    { value: "victor", label: "VICTOR" },
    { value: "renan", label: "RENAN" },
    { value: "gabriel", label: "GABRIEL" },
    { value: "alemao", label: "ALEMÃO" },
    { value: "isaac", label: "ISAAC" },
    { value: "ze guilherme", label: "ZÉ GUILHERME" },
    { value: "matheus souza", label: "MATHEUS SOUZA" },
    { value: "junior", label: "JUNIOR" },
    { value: "iarlei", label: "IARLEI" },
    { value: "phedro lucas", label: "PHEDRO LUCAS" },
    { value: "ze elias", label: "ZÉ ELIAS" },
    { value: "manga", label: "MANGA" },
    { value: "clayton keven", label: "CLAYTON KEVEN" },
    { value: "fernando", label: "FERNANDO" },
    { value: "hugo", label: "HUGO" },
    { value: "joao", label: "JOÃO" },
    { value: "pablo", label: "PABLO" },
    { value: "wenis", label: "WENIS" },
    { value: "fischer", label: "FISCHER" },
  ];

  const cardOptions = [
    { value: "cartao", label: "Tipo do cartão", isdisabled: true },
    { value: "AMARELO", label: "Amarelo" },
    { value: "VERMELHO", label: "Vermelho" },
  ];

  const handleCreateClick = () => {
    setIsCreateClicked(true);
    setImageUrl(
      `/api/og?title=CARTÃO%20${encodedCard}&backgroundPath=${encodeURIComponent(
        backgroundPath
      )}&player=${encodedPlayer}%20-%20${encodedGoalMinute}'`
    );
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePlayer = (value: any) => {
    setPlayer(value.label);
  };

  const handleGoalMinute = (event: any) => {
    setGoalMinute(event.target.value);
  };

  const handleCard = (value:any) => {
    setCard(value.value)
  }

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
        <GridContainer container sx={{ justifyContent: "space-between" }}>
          <GridContainer item xs={7} sm={7.8}>
            <GlobalSelect
              options={players}
              onChange={handlePlayer}
              isOptionDisabled={(option: any) => option.isdisabled}
            />
          </GridContainer>
          <GridContainer item xs={4}>
            <TimeSelect value={goalMinute} onChange={handleGoalMinute} />
          </GridContainer>
        </GridContainer>

        <GridContainer container sx={{ alignSelf: "start" }}>
          <GridContainer item xs={7} sm={7.8}>
            <GlobalSelect options={cardOptions} onChange={handleCard}
              isOptionDisabled={(option: any) => option.isdisabled} />
          </GridContainer>
        </GridContainer>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "100%",
            marginTop: 25,
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

          <Modal src={imageUrl} open={isModalOpen} onClose={handleModal} />
        </div>
      </div>
    </div>
  );
}
