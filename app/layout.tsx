import { Toaster } from "@/components/ui/sonner";
import {
    ClerkProvider
} from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html className="dark" lang="en">
                <body>
                    {children}
                    <Toaster />
                </body>
            </html>
        </ClerkProvider>
    );
}
