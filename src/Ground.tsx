import { usePlane } from "@react-three/cannon"

const Ground = (props: any) => {
  const [ref] = usePlane(() => ({
    position: [0, 0, 5],
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }))

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[20, 10, 1, 1]} />
      <meshStandardMaterial color='#171720' />
    </mesh>
  )
}

export default Ground
