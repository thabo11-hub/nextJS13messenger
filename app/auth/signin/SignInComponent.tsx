"use client"
import { getProviders} from "next-auth/react";

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>> 
}

function SignInComponent({providers}: Props) {
  return (
    <div>SignInComponent</div>
  )
}

export default SignInComponent