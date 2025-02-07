import { db } from "@/db/db";

export default async function AdminPage() {

    const splits = await db.query.trainingSplits.findMany();
    const exercises = await db.query.exercises.findMany({ with: { exerciseEquipment: { with: { equipment: true } } } });

    return (
        <pre className="flex">
            <code>
                <p>Training splits</p>
                {JSON.stringify(splits, null, 2)}
            </code>
            <code>
                <p>Exercises</p>
                {JSON.stringify(exercises, null, 2)}
            </code>
        </pre>
    )
}