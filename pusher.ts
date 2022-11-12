import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: process.env.APPID!,
  key: process.env.KEY!,
  secret: process.env.SECRET!,
  cluster: "ap2",
  useTLS: true,
});
export const clientPusher = new ClientPusher("04b619e3e5a1371a01f9", {
  cluster: "ap2",
  forceTLS: true,
});
