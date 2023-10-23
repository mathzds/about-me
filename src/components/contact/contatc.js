import React, { useState, useRef, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [lastMessageTime, setLastMessageTime] = useState(0);
  const inputRef = useRef(null);
  const webhookURL = process.env.webhookKey;

  const sendMessage = async () => {
    if (!message.trim()) return;

    const currentTime = Date.now();
    if (currentTime - lastMessageTime < 5000) {
      alert("Please wait at least 5 seconds before sending a message");
      return;
    }

    const messageContent = message;
    const data = { content: messageContent };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 204) {
      } else {
      }
    } catch (error) {}

    setMessage("");
    setLastMessageTime(currentTime);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    }
  }, [message]);

  return (
    <div className="flex flex-col items-center m-4 animate-fade-in">
      <textarea
        ref={inputRef}
        className="p-4 bg-black border border-neutral-600 rounded-lg mb-2 placeholder-gray-500 focus:outline-none focus:ring focus:border-neutral-600 w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3"
        style={{ minHeight: "100px", maxHeight: "300px" }}
        placeholder="Example: I need your services, my email is: test@test.com"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button
        className="border border-neutral-600 text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-neutral-950 hover:text-white"
        onClick={sendMessage}
      >
        <FaLocationArrow />
      </button>
    </div>
  );
}
