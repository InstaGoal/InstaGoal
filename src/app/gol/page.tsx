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
import { useState } from "react";
import { saveAs } from 'file-saver'

export default function GoalPage() {
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goalMinute, setGoalMinute] = useState("");
  const [player, setPlayer] = useState("");
  const [imageUrl, setImageUrl] = useState("/api/og");
  const [inputResultHome, setInputResultHome] = useState(0);
  const [inputResultOut, setInputResultOut] = useState(0);
  const baseURL = typeof window !== 'undefined' ? window.location.origin : '';
  const backgroundPath = `${baseURL}/gol.svg`;
  const encodedPlayer = encodeURIComponent(player);
  const encodedGoalMinute = encodeURIComponent(goalMinute);

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

  const handleCreateClick = () => {
    setIsCreateClicked(true);
    setImageUrl(
      `/api/og?result=${encodeURIComponent(
        inputResultHome
      )}%20${encodeURIComponent(
        inputResultOut
      )}&backgroundPath=${encodeURIComponent(
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

  const handleInputResultHome = (event: any) => {
    setInputResultHome(event.target.value);
  };

  const handleInputResultOut = (event: any) => {
    setInputResultOut(event.target.value);
  };

  const handleDownloadImage = () => {
    saveAs(imageUrl, 'gol.png')
  }

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
        <Title title="Gol" />
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

          <Scoreboard
            firstSrc="/palmas-logo.svg"
            secondSrc="/cruzeiro-logo.svg"
            valueTeamHome={inputResultHome}
            valueTeamOut={inputResultOut}
            onChangeScoreHome={handleInputResultHome}
            onChangeScoreOut={handleInputResultOut}
          />

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
                <GreenTemplateViewDownloadBar downloadOnClick={handleDownloadImage} onClick={handleModal} />
              )}
            </GridContainer>

            <Modal src={imageUrl} open={isModalOpen} onClose={handleModal} />
          </div>
        </div>
      </div>
    </>
  );
}
