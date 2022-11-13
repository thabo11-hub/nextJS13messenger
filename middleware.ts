export { default } from "next-auth/middleware";

//secure th matching routes
export const config = { matcher: ["/"] };
