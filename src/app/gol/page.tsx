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

export default function GoalPage() {
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const options = [
    { value: "Jogador", label: "Jogador" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
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
          <GridContainer container sx={{justifyContent: "space-between"}}>
            <GridContainer item xs={7} sm={7.8}>
              <GlobalSelect options={options}/>
            </GridContainer>
            <GridContainer item xs={4}>
              <TimeSelect />
            </GridContainer>
          </GridContainer>

         <Scoreboard firstSrc="/palmas-logo.svg" secondSrc="/spfc-logo.svg" firstTeamGoal={0} secondTeamGoal={0}/> 

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
