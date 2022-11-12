"use client";
import fetcher from "../utils/fetchMessages";
import useSWR from "swr";
import { Message } from "../typings";

function MessageList() {

  const { data: messages, error, mutate } = useSWR<Message[]>("/api/getMessages", fetcher);

  return (
    <div>
      {messages?.map(message => (
        <div key={message.id}>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  )
}

export default MessageList