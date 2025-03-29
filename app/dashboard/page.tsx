import { db } from "@/db/db";
import { exerciseColumns } from "./components/exercisecolumns";
import { DataTable } from "./components/data-table";
import { trainingSplitColumn } from "./components/training-splitcolumns";

export default async function DashboardPage() {
  const trainingPlans = await db.query.trainingPlans.findMany({
    with: {
      sessions: true,
    },
  });

  const trainingSplit = await db.query.trainingSplits.findMany();

  const exercises = await db.query.exercises.findMany();
  console.log(trainingPlans);

  return (
    <div>
      <div>
        <h2 className="font-bold text-2xl py-2">Training Split</h2>
        <DataTable columns={trainingSplitColumn} data={trainingSplit} />
      </div>
    </div>
  );
}

// get user training plans
// get users sessions
