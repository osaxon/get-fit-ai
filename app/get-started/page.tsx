import { getUser } from "@/features/auth/getUser";
import GetStartedForm from "./get-started-form";

export default async function GetStarted() {
    const user = await getUser();

    return (
        <div className="max-w-5xl mx-auto w-full border min-h-screen">
            <GetStartedForm user={user} />
        </div>
    );
}
