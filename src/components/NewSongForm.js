import React, { useState } from "react";

export default function NewSongForm({ addSong }) {
  const [title, setTitle] = useState(" ");
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name: </label>
      <input
        type="text"
        required
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input type="submit" value="add song" />
    </form>
  );
}
