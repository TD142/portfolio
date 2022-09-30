import { MeshDistortMaterial } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const MainAnimation = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1279px)" });

  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  return (
    <mesh
      position={isMobile ? [2, 3.5, 0] : isDesktop && [0, 0, 0]}
      rotation={[0.5, 1, 0]}
    >
      <sphereGeometry
        args={isMobile ? [1.8, 60, 60] : isDesktop && [2.5, 60, 60]}
      />
      <MeshDistortMaterial
        wireframe={true}
        color={"lightblue"}
        distort={1.3}
        speed={0.9}
      />
    </mesh>
  );
};

export default MainAnimation;
