import { useSphere } from "@react-three/cannon"

const setX = () => {
  let counter = 0

  const posX = () => {
    counter++
    return counter
  }

  return posX
}

const Balls = (props: any) => {
  const size = 0.6

  const getPosition = setX()

  const [ref] = useSphere(() => ({
    mass: 10,
    args: [size],
    position: [getPosition() - 10, 30 + Math.random() * 4, 2],
    ...props,
  }))

  return (
    <instancedMesh
      castShadow
      receiveShadow
      ref={ref}
      args={[undefined, undefined, 10]}
    >
      <sphereGeometry args={[size, 64, 32]} />
      <meshStandardMaterial color='#FFE8D1' />
    </instancedMesh>
  )
}
export default Balls
