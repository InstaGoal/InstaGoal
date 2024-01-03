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

  const enterOptions = [
    { value: "jogador", label: "Quem entra" },
    { value: "jogador 1", label: "Jogador 1" },
    { value: "jogador 2", label: "Jogador 2" },
  ];

  const outOptions = [
    { value: "cartao", label: "Quem sai" },
    { value: "jogador 1", label: "Jogador 1" },
    { value: "jogador 2", label: "Jogador 2" },
  ];

  const handleCreateClick = () => {
    setIsCreateClicked(true);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
    console.log(isModalOpen)
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
            <GlobalSelect options={enterOptions} />
          </GridContainer>
          <GridContainer item xs={4}>
            <TimeSelect />
          </GridContainer>
        </GridContainer>

        <GridContainer container
          sx={{ alignSelf: "start" }}>
            <GridContainer item xs={7} sm={7.8}>
                <GlobalSelect options={outOptions} />
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
            
            <Modal open={isModalOpen} onClose={handleModal}/>
          </div>
        </div>
        

      </div>
    </>
  );
}
