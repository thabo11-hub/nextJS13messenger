import React from 'react';

function ChatInput() {
  return (
    <form>
      <input type="text" />
      <button type="submit" className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Send
      </button>
    </form>
  )
}

export default ChatInput;