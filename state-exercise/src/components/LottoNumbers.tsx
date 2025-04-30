type Props = {
    generateNumbers: () => void
  }
  
  const LottoNumbers = ({ generateNumbers }: Props) => {
    return (
      <button onClick={generateNumbers}>Generate Lotto Numbers</button>
    )
  }
  
  export default LottoNumbers
  