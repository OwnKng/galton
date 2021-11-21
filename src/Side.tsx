import { usePlane } from "@react-three/cannon"

const Side = (props: any) => {
  const args: [
    width: number,
    height: number,
    widthSegments: number,
    heightSegments: number
  ] = [10, 30, 1, 1]

  const [ref] = usePlane(() => ({
    args,
    ...props,
  }))

  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={args} />
      <meshStandardMaterial color='#171720' />
    </mesh>
  )
}

export default Side
