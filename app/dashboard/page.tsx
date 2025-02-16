import { db } from "@/db/db";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function DashboardPage() {
    const trainingPlans = await db.query.trainingPlans.findMany({
        with: {
            sessions: true,
        },
    });

    const exercises = await db.query.exercises.findMany();
    console.log(trainingPlans);

    return (
        <div>
            <div>
                <h2 className="font-bold text-2xl py-2">Exercises</h2>
                <DataTable columns={columns} data={exercises} />
            </div>
        </div>
    );
}

// get user training plans
// get users sessions
