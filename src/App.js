import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🤟": "I love you",
  "🍛": "Curry and Rice",
  "🙃": "silly",
  "🤩": "Starstruck",
  "😋": "Hungry",
  "😑": "annoyance",
  "😶": "Blankface",
  "🤥": "Lying",
  "🤯": "Exploding head",
  "😨": "Fearful",
  "😎": "Smart",
  "✌️": "Peace"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Click on  emoji to view the meaning");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1> EmojiDictionary</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Emoji search engine"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
