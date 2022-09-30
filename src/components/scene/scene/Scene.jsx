import { Canvas } from "react-three-fiber";
import { Flex, Box } from "@react-three/flex";
import { OrbitControls, Html } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import MainAnimation from "../main-animation/MainAnimation";
import TextTransition, { presets } from "react-text-transition";
import { useMediaQuery } from "react-responsive";
import "./Scene.scss";

const Scene = () => {
  const [words, setWords] = useState(["Developer", "Creative"]);
  const [index, setIndex] = useState(0);
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

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
          {isTabletOrMobile && <MainAnimation />}

          {isDesktop && (
            <Flex justifyContent={"flex-end"}>
              <Box centerAnchor>
                <MainAnimation />
              </Box>
            </Flex>
          )}
        </Suspense>
      </Canvas>
      <h1 className="canvas__top-text">Thomas Daley</h1>
      <h1 className="canvas__bottom-text">
        <TextTransition springConfig={presets.wobbly}>
          {words[index % words.length]}
        </TextTransition>
      </h1>
    </div>
  );
};

export default Scene;
