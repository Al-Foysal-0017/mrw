import React from "react";
import Container from "../../components/container/Container";

const NotFound = () => {
  return (
    <Container
      style={{
        minHeight: "100vh",
        fontSize: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="link"
    >
      Page Not Found
    </Container>
  );
};

export default NotFound;
