import { usePlane } from "@react-three/cannon"

const Ground = (props: any) => {
  const [ref] = usePlane(() => ({
    position: [0, 15, 0],
    ...props,
  }))

  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[20, 30, 1, 1]} />
      <meshStandardMaterial color='#171720' />
    </mesh>
  )
}

export default Ground
