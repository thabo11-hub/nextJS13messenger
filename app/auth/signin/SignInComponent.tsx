"use client"
import { getProviders } from "next-auth/react";

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
};

function SignInComponent({ providers }: Props) {
    return (
        <div>
            {Object.values(providers!).map((provider) => {
                <div key={provider.name}>
                    <button>
                        sign in with {provider.name}
                    </button>
                </div>
            })}
        </div>
    )
}

export default SignInComponent;