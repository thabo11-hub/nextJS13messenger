import "../styles/globals.css";
import Header from "./Header";
import { Providers } from "./providers";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head />
            <body>
                <Header />
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}