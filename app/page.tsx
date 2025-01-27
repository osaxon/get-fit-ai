import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Button>
                <Link href="/get-started">Get Started</Link>
            </Button>
        </div>
    );
}
