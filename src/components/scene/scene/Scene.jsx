import { Canvas } from "react-three-fiber";
import { Flex, Box } from "@react-three/flex";
import { OrbitControls, Html } from "@react-three/drei";
import { Suspense } from "react";
import MainAnimation from "../main-animation/MainAnimation";
import React from "react";
import "./Scene.scss";

const Scene = () => {
  return (
    <div className="canvas">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 10, 2]} intensity={0.5} />
        <Suspense
          fallback={
            <Html color="white" left>
              <p className="loading">Loading</p>
            </Html>
          }
        >
          <Flex justifyContent={"flex-start"}>
            <Box centerAnchor>
              <Html></Html>
            </Box>
          </Flex>
          <Flex justifyContent={"flex-end"}>
            <Box centerAnchor>
              <MainAnimation />
            </Box>
          </Flex>
        </Suspense>
      </Canvas>
      <p className="canvas__top-text">Thomas Daley</p>
      <p className="canvas__bottom-text">Developer</p>
    </div>
  );
};

export default Scene;
