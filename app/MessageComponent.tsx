import { Message } from "../typings";
import Image from "next/image"

type Props = {
    // key: string;
    message: Message;
};

function MessageComponent({message}: Props) {
    return (
        <div>
            <div>
                <Image
                    className="rounded-full mx-2"
                    height={10}
                    width={50}
                    src={message.profilePic}
                    alt="Profile picture"
                />
            </div>
        </div>
    );
}

export default MessageComponent;