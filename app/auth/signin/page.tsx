import { getProviders } from "next-auth/react";
import Image from "next/image";

async function SignInPage() {
    const providers = await getProviders();
    return (
        <div>
            <div>
                <Image
                    className="rounded-full mx-2 object-cover"
                    height={700}
                    width={700}
                    src="https://links.papareact.com/161"
                    alt="Profile picture"
                />
            </div>
        </div>
    )
}

export default SignInPage