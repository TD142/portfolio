import { Canvas } from "react-three-fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import MainAnimation from "../main-animation/MainAnimation";
import TextTransition, { presets } from "react-text-transition";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import FadeInSection from "../../fade-in/FadeIn";
import "./Scene.scss";

const Scene = () => {
  const [words, setWords] = useState(["Developer", "Creative"]);
  const [index, setIndex] = useState(0);
  const [isVisible, setVisible] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1101px)" });

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <FadeInSection>
      <div className="scene">
        <div>
          <div className="scene__container">
            <h1 className="scene__container__top-text">Thomas Daley</h1>
            <h1 className="scene__container__bottom-text">
              <TextTransition springConfig={presets.wobbly}>
                {words[index % words.length]}
              </TextTransition>
            </h1>
          </div>

          <div className="canvas">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 10, 2]} intensity={0.5} />
              <Suspense>
                <MainAnimation />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Scene;
