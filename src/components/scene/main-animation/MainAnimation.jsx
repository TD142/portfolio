import { MeshDistortMaterial } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const MainAnimation = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 750px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 750px)" });
  return (
    <mesh
      position={isMobileOrTablet ? [2.5, 3.5, 0] : [4, 3.5, 0]}
      rotation={[0.5, 1, 0]}
    >
      <sphereGeometry args={isMobileOrTablet ? [2.3, 60, 60] : [2.7, 60, 60]} />
      <MeshDistortMaterial
        wireframe={true}
        color={"lightblue"}
        distort={1.2}
        speed={0.9}
      />
    </mesh>
  );
};

export default MainAnimation;
