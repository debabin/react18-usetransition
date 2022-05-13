import React from "react";

export const List = () => {
  const [text, setText] = React.useState("");
  const [filteredText, setFilteredText] = React.useState(text);
  const [isPending, setTransition] = React.useTransition();

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
          setTransition(() => {
            setFilteredText(e.target.value);
          });
        }}
      />
      {isPending && <span> Loading</span>}
      {Array.from({ length: 1000 }).map((_, index) => (
        <div>
          {index}: {filteredText}
        </div>
      ))}
    </>
  );
};
