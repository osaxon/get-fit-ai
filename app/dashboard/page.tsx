import { db } from "@/db/db";
import { DataTable } from "./data-table";
import { columns } from "./columns";

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
      dashboard page
      <div>
        <h2>Exercises</h2>
        <DataTable columns={columns} data={exercises} />
      </div>
    </div>
  );
}

// get user training plans
// get users sessions
