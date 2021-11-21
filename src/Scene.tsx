import { Physics } from "@react-three/cannon"
import { Canvas } from "@react-three/fiber"
import Ground from "./Ground"
import Ball from "./Ball"
import Grid from "./Grid"
import Background from "./Background"
import { OrbitControls } from "@react-three/drei"

import Lights from "./Lights"
import { Color } from "three"

const Scene = () => (
  <Canvas
    shadows
    onCreated={({ scene }) => (scene.background = new Color("#171720"))}
    camera={{ position: [4, 70, 55], zoom: 5 }}
  >
    <OrbitControls />
    <Lights />
    <Physics allowSleep broadphase='SAP' gravity={[0, -9.81, 0]}>
      <Ball
        position={[
          Math.random() > 0.5
            ? 0 + Math.random() * 0.25
            : 0 - Math.random() * 0.25,
          18,
          2,
        ]}
      />
      <Grid castShadow receiveShadow />
      <Background />
      <Ground />
    </Physics>
  </Canvas>
)

export default Scene
