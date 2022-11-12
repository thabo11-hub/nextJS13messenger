import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

async function HomePage() {

  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then((res) =>res.json());
  return (
    <main>
        <MessageList />
        <ChatInput />
    </main>
  )
}

export default HomePage