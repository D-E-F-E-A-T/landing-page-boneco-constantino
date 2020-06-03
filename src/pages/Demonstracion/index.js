import React from "react";

import { Container, Title, VideoBar, Button, TextButton } from "./styles";

function Demonstracion() {
  return (
    <Container>
      <Title>DEMONSTRAÇÃO DO BONECO CONSTANTINO</Title>

      <VideoBar>
        <iframe
          width="888"
          height="500"
          src="https://www.youtube.com/embed/85m13hVC160"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoBar>

      <Button>
        <TextButton>QUERO COMPRAR AGORA!</TextButton>
      </Button>
    </Container>
  );
}

export default Demonstracion;
