import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [cursorPosition, setCursorPosition] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    setSelectedText(inputText);
  };

  const handleMouseDown = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setCursorPosition(null);
  };

  const handleMouseMove = (e) => {
    if (cursorPosition) {
      const dx = e.clientX - cursorPosition.x;
      const dy = e.clientY - cursorPosition.y;
    }
  };

  const handleTextSelection = (e) => {
    const selection = window.getSelection().toString();
    setHighlightedText(selection);
  };

  return (
    <div className="App">
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Apply</button>
      <div>{selectedText}</div>
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseUpCapture={handleTextSelection}
      >
        {highlightedText ? (
          <span style={{ backgroundColor: 'yellow' }}>{highlightedText}</span>
        ) : (
          <span>{selectedText}</span>
        )}
      </div>
    </div>
  );
}

export default App;
