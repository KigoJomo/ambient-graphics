const SplitWord = ({ word, rotate = false, column = false, className = "" }) => {
  return (
    <h1 className={`split-word flex ${column ? "flex-col gap-0" : "gap-1"} ${className}`}>
      {word.split("").map((char, index) => (
        <span
          key={index}
          className={`transform ${rotate ? "rotate-90" : ""} ${column && char !== "i" ? "h-14" : "h-4 md:h-auto"} ${!column && 'h-auto'} flex items-center justify-center`}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default SplitWord;
