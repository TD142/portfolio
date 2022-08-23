import { MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { useRef } from "react";

const MainAnimation = () => {
  const mesh = useRef();

  useFrame(() => {});

  return (
    <mesh position={[0, 0, 0]} rotation={[0.5, 1, 0]} ref={mesh}>
      <sphereGeometry args={[3, 60, 60]} />
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
