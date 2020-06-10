import React from "react";

import {
  Container,
  Title,
  TitleBlack,
  VideosBar,
  VideoBar,
  Video,
  VideoTitle,
  VideoSubTitle,
} from "./styles";

function WhatTheySaiyng() {
  return (
    <Container>
      <Title>
        O QUE ESTÃO FALANDO DO <TitleBlack>BONECO CONSTANTINO</TitleBlack>{" "}
      </Title>

      <VideosBar>
        <VideoBar>
          <Video />
          <VideoTitle>Constantino Sports</VideoTitle>
          <VideoSubTitle>@constantinosportsjiujitsu</VideoSubTitle>
        </VideoBar>

        <VideoBar>
          <Video />
          <VideoTitle>Constantino Sports</VideoTitle>
          <VideoSubTitle>@constantinosportsjiujitsu</VideoSubTitle>
        </VideoBar>

        <VideoBar>
          <Video />
          <VideoTitle>Constantino Sports</VideoTitle>
          <VideoSubTitle>@constantinosportsjiujitsu</VideoSubTitle>
        </VideoBar>
      </VideosBar>
    </Container>
  );
}

export default WhatTheySaiyng;
