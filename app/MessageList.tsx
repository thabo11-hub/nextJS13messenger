"use client";
import fetcher from "../utils/fetchMessages";
import useSWR from "swr";
import { Message } from "../typings";
import MessageComponent from "./MessageComponent";

function MessageList() {

  const { data: messages, error, mutate } = useSWR<Message[]>("/api/getMessages", fetcher);

  return (
    <div>
      {messages?.map(message => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  )
}

export default MessageList