import React from "react";
import { styled } from "@mui/system";
import Footer from "~/components/Footer";
import Drawer from "~/components/Drawer";

const CContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  // backgroundImage: `url(${Image})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom center",
});

type CProps = {
  children: React.ReactNode;
};

export const Container: React.VFC<CProps> = ({ children }) => {
  return <CContainer>{children}</CContainer>;
};

export const Wrapper: React.VFC<CProps> = ({ children }) => {
  return (
    <CContainer>
      <Drawer title="Your Website">
        {children}
        <Footer />
      </Drawer>
    </CContainer>
  );
};
