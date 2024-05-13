import { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Mac from "./Mac";

const Desc = styled.div`
  width: 200px;
  height: 250px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Mac />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        My expertise in web development, database management, and software
        testing ensures the delivery of reliable and error-free applications. My
        dedication to staying updated with the latest industry trends and
        technologies enables me to deliver exceptional solutions that drive
        innovation and efficiency.
      </Desc>
    </>
  );
};

export default WebDesign;
