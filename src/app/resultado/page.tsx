"use client";

import CreateBtn from "@/components/CreateBtn";
import GreenTemplateViewDownloadBar from "@/components/GreenTemplateViewDownloadBar";
import GridContainer from "@/components/Grid";
import Modal from "@/components/Modal";
import Scoreboard from "@/components/Scoreboard";
import TemplateViewDownloadBar from "@/components/TemplateViewDownloadBar";
import Title from "@/components/Title";
import { FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { useState } from "react";

export default function ResultadoPage() {
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('/api/og');
  const [inputResultHome, setInputResultHome] = useState(0);
  const [inputResultOut, setInputResultOut] = useState(0);
  const [selectedRadio, setSelectedRadio] = useState("");
  const baseURL = typeof window !== 'undefined' ? window.location.origin : '';
  const backgroundPath = `${baseURL}/resultado.svg`;

  const handleCreateClick = () => {
    setIsCreateClicked(true);
    setImageUrl(
      `/api/og?title=${encodeURIComponent(selectedRadio)}&result=${encodeURIComponent(inputResultHome)}%20${encodeURIComponent(inputResultOut)}&backgroundPath=${backgroundPath}`
    );
  };

  const handleInputResultHome = (event: any) => {
    setInputResultHome(event.target.value)
    
  }

  const handleInputResultOut = (event: any) => {
    setInputResultOut(event.target.value)
    
  }

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);

  };

  const handleRadioChange = (event: any) => {
    setSelectedRadio(event.target.value);
  };

  const handleUploadImage = () => {

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
      <Title title="Resultado" />
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
        <Scoreboard
          firstSrc="/palmas-logo.svg"
          secondSrc="/cruzeiro-logo.svg"
          valueTeamHome={inputResultHome}
          valueTeamOut={inputResultOut}
          onChangeScoreHome={handleInputResultHome}
          onChangeScoreOut={handleInputResultOut}
        />
        <Stack direction="row" width="100%">
          <RadioGroup value={selectedRadio}
  onChange={handleRadioChange} row sx={{ width: "100%", justifyContent: "space-between"}}>
            <FormControlLabel
              label="1º tempo"
              value="FIM DO 1º TEMPO"
              sx={{ ".MuiFormControlLabel-label": {color: "secondary.main"}}}
              control={
                <Radio
                  sx={{
                    color: "secondary.main",
                    "&.Mui-checked": {
                      color: "primary.dark",
                    }, 
                  }}
                />
              }
            />
            <FormControlLabel
              label="Resultado"
              value="FIM DE JOGO"
              sx={{ ".MuiFormControlLabel-label": {color: "secondary.main"}}}
              control={
                <Radio
                  sx={{
                    color: "secondary.main",
                    "&.Mui-checked": {
                      color: "primary.dark",
                    },
                  }}
                />
              }
            />
          </RadioGroup>
        </Stack>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "100%",
          }}
        >
          <GridContainer container={true}>
            <GridContainer item={true} xs={12}>
              <CreateBtn onClick={handleCreateClick} />
            </GridContainer>
          </GridContainer>

          <GridContainer container={true} sx={{justifyContent: "space-between"}}>
            {!isCreateClicked && <TemplateViewDownloadBar onClick={handleModal} />}
            {isCreateClicked && <GreenTemplateViewDownloadBar onClick={handleModal} />}
          </GridContainer>

          <Modal src={imageUrl} open={isModalOpen} onClose={handleModal} />
        </div>
      </div>
    </div>
  );
}
