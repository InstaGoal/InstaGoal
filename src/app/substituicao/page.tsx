"use client"

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

export default function SubstitutionPage() {
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [minute, setMinute] = useState("");
  const [playerEnter, setPlayerEnter] = useState("")
  const [playerOut, setPlayerOut] = useState("")
  const [imageUrl, setImageUrl] = useState("/api/og");
  const baseURL = typeof window !== 'undefined' ? window.location.origin : '';
  const backgroundPath = `${baseURL}/subs.svg`;
  const encodedPlayerEnter = encodeURIComponent(playerEnter);
  const encodedPlayerOut = encodeURIComponent(playerOut);
  const encodedMinute = encodeURIComponent(minute);

  const enterOptions = [
    { value: "jogador", label: "Quem entra", isdisabled: true },
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

  const outOptions = [
    { value: "jogador", label: "Quem sai", isdisabled: true },
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
      `/api/og?backgroundPath=${encodeURIComponent(
        backgroundPath
      )}&playerEnter=${encodedPlayerEnter}&playerOut=${encodedPlayerOut}&minute=SUBSTITUIÇÃO%20-%20${minute}'`
    );
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleMinute = (event: any) => {
    setMinute(event.target.value);
  };

  const handlePlayerEnter = (value: any) => {
    setPlayerEnter(value.label);
  };

  const handlePlayerOut = (value: any) => {
    setPlayerOut(value.label);
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
        <Title title="Substituição" />
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
            <GlobalSelect options={enterOptions} onChange={handlePlayerEnter}
              isOptionDisabled={(option: any) => option.isdisabled}/>
          </GridContainer>
          <GridContainer item xs={4}>
            <TimeSelect value={minute} onChange={handleMinute}/>
          </GridContainer>
        </GridContainer>

        <GridContainer container
          sx={{ alignSelf: "start" }}>
            <GridContainer item xs={7} sm={7.8}>
                <GlobalSelect options={outOptions} onChange={handlePlayerOut}
              isOptionDisabled={(option: any) => option.isdisabled} />
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
            <GridContainer container>
              <GridContainer item xs={12}>
                <CreateBtn onClick={handleCreateClick}/>
              </GridContainer>
            </GridContainer>

            <GridContainer container sx={{justifyContent: "space-between"}}>
              {!isCreateClicked && <TemplateViewDownloadBar onClick={handleModal} />}
              {isCreateClicked && <GreenTemplateViewDownloadBar onClick={handleModal} />}
            </GridContainer>
            
            <Modal src={imageUrl} open={isModalOpen} onClose={handleModal}/>
          </div>
        </div>
        

      </div>
    </>
  );
}
