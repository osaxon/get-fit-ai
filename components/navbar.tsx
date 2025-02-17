"use client"

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="py-2 px-2 flex justify-between">
            <Link className="text-2xl font-bold" href="/">
                Logo
            </Link>
            <SignedOut>
                <SignInButton fallbackRedirectUrl='/test' />
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}

export default Navbar;