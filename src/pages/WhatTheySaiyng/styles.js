import styled from "styled-components";

import backgroundImage from "../../assets/Icones-Redes-Sociais-1.png";

export const Container = styled.div`
  background-image: url(${backgroundImage});

  width: 100%;
  max-width: 1300px;

  margin: auto;
  padding-bottom: 2%;
  padding-top: 2%;
`;

export const Title = styled.p`
  font-size: 1.3rem;
  margin-bottom: 30px;
`;

export const TitleBlack = styled.span`
  font-weight: bold;
`;

export const VideosBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const VideoBar = styled.div``;

export const Video = styled.div`
  height: 536px;
  width: 335px;
  background-color: #fff;
`;

export const VideoTitle = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const VideoSubTitle = styled.div`
  font-size: 0.8rem;
`;
