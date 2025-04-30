type Props = {
    toggleLights: () => void
  }
  
  const LightToggle = ({ toggleLights }: Props) => {
    return (
      <button onClick={toggleLights}>Toggle Lights</button>
    )
  }
  
  export default LightToggle
  