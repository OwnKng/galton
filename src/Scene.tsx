// @ts-nocheck
import { Physics } from "@react-three/cannon"
import { Canvas } from "@react-three/fiber"
import Ground from "./Ground"
import Ball from "./Ball"
import Grid from "./Grid"
import Background from "./Background"
import { OrbitControls } from "@react-three/drei"
import Side from "./Side"
import Lights from "./Lights"
import { Color } from "three"
import Cone from "./Cone"
import Balls from "./Balls"

const Scene = () => (
  <Canvas
    shadows
    orthographic
    onCreated={({ scene }) => (scene.background = new Color("#171720"))}
    camera={{ position: [10, 55, 55], zoom: 20, near: 1, far: 1000 }}
  >
    <OrbitControls />
    <Lights />
    <Physics allowSleep broadphase='SAP'>
      <Balls castShadow receiveShadow />
      <Grid castShadow receiveShadow />
      <Cone
        rotation={[Math.PI * 0.5, Math.PI * 0.9, Math.PI * 0.5]}
        position={[-6, 29, 5]}
      />
      <Cone
        rotation={[-Math.PI * 0.5, Math.PI * 0.9, -Math.PI * 0.5]}
        position={[6, 29, 5]}
      />
      <Ground />
      <Side
        receiveShadow
        rotation={[0, Math.PI * 0.5, 0]}
        position={[-10, 15, 5]}
      />
      <Side
        receiveShadow
        rotation={[0, -Math.PI * 0.5, 0]}
        position={[10, 15, 5]}
      />
      <Background />
    </Physics>
  </Canvas>
)

export default Scene
