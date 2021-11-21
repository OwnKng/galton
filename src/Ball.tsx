import { useSphere } from "@react-three/cannon"

const Ball = (props: any) => {
  const size = 0.8
  const [ref] = useSphere(() => ({
    mass: 0.5,
    args: [size],
    ...props,
  }))

  return (
    <mesh receiveShadow ref={ref}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial color='teal' />
    </mesh>
  )
}

export default Ball
