import { Triplet, useBox } from "@react-three/cannon"

const calculatePositions = (height: number, width: number) => {
  let rowCounter = 0
  let colCounter = 0
  const count = 10

  const calculateCoords = () => {
    const u = (rowCounter % 10) / count
    const v = Math.floor(colCounter / 10) / count

    const offset = Math.floor(colCounter / 10) % 2

    rowCounter++
    colCounter++

    return [u * width - 8 + offset, v * height + 2, 4 / 2]
  }

  return calculateCoords
}

const Grid = (props: any) => {
  const length = 0.25
  const width = 0.25
  const depth = 4

  const getPosition = calculatePositions(25, 18)

  const args: Triplet = [length, width, depth]

  const [ref] = useBox(() => ({
    mass: 0,
    args: args,
    position: getPosition(),
    rotation: [0, 0, Math.PI * 0.25],
    ...props,
  }))

  return (
    <instancedMesh
      castShadow
      receiveShadow
      ref={ref}
      args={[undefined, undefined, 100]}
    >
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color='#B7B6C2' />
    </instancedMesh>
  )
}

export default Grid
