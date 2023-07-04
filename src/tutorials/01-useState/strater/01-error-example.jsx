const ErrorExample = () => {
  let count = 0

  const handleClick = () => {
    count = count + 1
    console.log(count)
  }
  return (
    <>
      <h2>useState error example</h2>
      <h2>{count}</h2>
      <button className='btn' type='button' onClick={handleClick}>
        increase
      </button>
    </>
  )
}

export default ErrorExample
