"use client"
import GreenBtn from "./GreenBtn";
import GridContainer from "./Grid";
import { TemplateProps } from "./TemplateViewDownloadBar";

export default function GreenTemplateViewDownloadBar({
  onClick, downloadOnClick
}: TemplateProps) {
  return (
    <>
      <GridContainer item={true} xs={8.5}>
        <GreenBtn onClick={onClick} text="Visualizar" />
      </GridContainer>
      <GridContainer item={true} xs={3}>
        <GreenBtn onClick={downloadOnClick} src="download-icon.svg" />
      </GridContainer>
    </>
  );
}
