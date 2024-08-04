const SplitText =({ word }) => {
  const splitWord = word.split("");

  return (
    <h1 className="uppercase split-text">
      {splitWord.map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </h1>
  );
}

export default SplitText;
