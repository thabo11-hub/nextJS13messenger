import { Message } from "../typings";
import Image from "next/image"

type Props = {
    // key: string;
    message: Message;
};

function MessageComponent({ message }: Props) {
    return (
        <div className="flex w-fit">
            <div className="flex-shrink-0">
                <Image
                    className="rounded-full mx-2"
                    height={10}
                    width={50}
                    src={message.profilePic}
                    alt="Profile picture"
                />
            </div>
            <div>
                <p className="text-[0.65rem] px-[2px] pb-[2px]">{message.username}</p>
                <div>

                    <div>
                        <p>{message.message}</p>
                    </div>
                    <p>{new Date(message.created_at).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}

export default MessageComponent;