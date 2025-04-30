type Props = {
    increment: () => void
  }
  
  const ClickCounter = ({ increment }: Props) => {
    return (
      <button onClick={increment}>Click Counter</button>
    )
  }
  
  export default ClickCounter
  