import { Toaster } from "@/components/ui/sonner";
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import "./globals.css";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    <div className="flex items-center justify-center mt-20 text-7xl">
                        Get-Fit-Ai
                    </div>
                    <nav className="p-4 flex space-x-4 items-center justify-center mt-7">
                        <SignedOut>
                            <SignInButton fallbackRedirectUrl='/test' />
                            <SignUpButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </nav>

                    {children}
                    <Toaster />
                </body>
            </html>
        </ClerkProvider>
    );
}
