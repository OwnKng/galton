import { Quad, useCylinder } from "@react-three/cannon"
import { scaleLinear } from "d3-scale"

const positions = [
  { y: 6, x: 6 },
  { y: 5, x: 5 },
  { y: 5, x: 7 },
  { y: 4, x: 4 },
  { y: 4, x: 6 },
  { y: 4, x: 8 },
  { y: 3, x: 3 },
  { y: 3, x: 5 },
  { y: 3, x: 7 },
  { y: 3, x: 9 },
  { y: 2, x: 2 },
  { y: 2, x: 4 },
  { y: 2, x: 6 },
  { y: 2, x: 8 },
  { y: 2, x: 10 },
  { y: 1, x: 1 },
  { y: 1, x: 3 },
  { y: 1, x: 5 },
  { y: 1, x: 7 },
  { y: 1, x: 9 },
  { y: 1, x: 11 },
]

const calculatePositions = (height: number, width: number) => {
  let counter = 0
  const xScale = scaleLinear().domain([1, 11]).range([0, width])
  const yScale = scaleLinear().domain([1, 6]).range([0, height])

  const getCoords = () => {
    const { x, y } = positions[counter]
    counter++

    return [xScale(x) - 9, yScale(y) + 5, 2]
  }

  return getCoords
}

const Grid = (props: any) => {
  const radiusTop = 0.4
  const radiusBottom = 0.4
  const height = 4
  const radialSegments = 8

  const getPosition = calculatePositions(10, 18)

  const args: Quad = [radiusTop, radiusBottom, height, radialSegments]

  const [ref] = useCylinder(() => ({
    mass: 0,
    args: args,
    position: getPosition(),
    rotation: [-Math.PI * 0.5, 0, 0],
    ...props,
  }))

  return (
    <instancedMesh
      castShadow
      receiveShadow
      ref={ref}
      args={[undefined, undefined, 21]}
    >
      <cylinderGeometry args={args} />
      <meshStandardMaterial color='#777DA7' />
    </instancedMesh>
  )
}

export default Grid
