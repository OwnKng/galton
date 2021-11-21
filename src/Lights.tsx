const Lights = () => {
  return (
    <>
      <spotLight
        castShadow
        angle={0.5}
        penumbra={0.5}
        intensity={1.0}
        position={[0, 40, 5]}
      />
      <hemisphereLight position={[10, 50, 2]} intensity={0.8} />
      <spotLight
        castShadow
        angle={-0.7}
        penumbra={0.5}
        intensity={1.0}
        position={[10, 28, 3]}
      />
      <spotLight
        castShadow
        angle={0.7}
        penumbra={1}
        intensity={1.0}
        position={[-8, 28, 3]}
      />
    </>
  )
}

export default Lights
