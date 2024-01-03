"use client"
import GrayBtn from "./GrayBtn";
import GridContainer from "./Grid";

export interface TemplateProps{
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function TemplateViewDownloadBar({onClick}: TemplateProps) {
  return (
    <>
      <GridContainer item={true} xs={8.5}>
        <GrayBtn onClick={onClick} text="Visualizar" />
      </GridContainer>
      <GridContainer item={true} xs={3}>
        <GrayBtn src="download-icon.svg" />
      </GridContainer>
    </>
  );
}
