import { useBox } from "@react-three/cannon"
import * as THREE from "three"

const Cone = (props: any) => {
  const args: [width: number, height: number, depth: number] = [10, 10.2, 0.1]

  const [ref] = useBox(() => ({
    args,
    ...props,
  }))

  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color='#171720' side={THREE.DoubleSide} />
    </mesh>
  )
}

export default Cone
