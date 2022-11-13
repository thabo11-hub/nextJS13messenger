"use client";

import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../typings";
import useSWR from "swr";
import fetcher from "../utils/fetchMessages";
import { unstable_getServerSession } from "next-auth";

type Props = {
  session: Awaited<ReturnType<typeof unstable_getServerSession>>
}

function ChatInput({ session }: Props) {

  const [input, setInput] = useState("");
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);

  // data: messages <- renamed data to messages
  console.log("our message is : ", messages);

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input || !session) return;

    const messageToSend = input;

    setInput("");

    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: session?.user?.name!,
      profilePic: session?.user?.image!,
      email: session?.user?.email!
    };

    const uploadMessageToUpstash = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }).then(res => res.json());

      console.log("Message added successfully", messages);

      return [data.message, ...messages!]
      // ...message <- this is to copy out the messages

    };

    //mutate 
    await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true
    })

    // uploadMessageToUpstash();

  };

  return (
    <form onSubmit={addMessage} className="flex px-10 space-x-2 border-t bg-white border-gray-100 fixed bottom-0 z-50 w-full">
      <input type="text"
        disabled={!session}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter message"
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 
        focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button type="submit" disabled={!input} className="bg-blue-400 hover:bg-blue-500 text-white 
        font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed">
        Send
      </button>
    </form>
  )

}

export default ChatInput;