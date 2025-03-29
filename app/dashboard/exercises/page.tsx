import { db } from "@/db/db";
import { DataTable } from "../components/data-table";
import { exerciseColumns } from "../components/exercisecolumns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type LevelSummary = {
  beginner: number;
  intermediate: number;
  advanced: number;
};

export default async function Exercises() {
  const exercises = await db.query.exercises.findMany();

  const levelSummary = exercises.reduce(
    (summary, x) => {
      if (x.level != null) {
        summary[x.level]++;
      }
      return summary;
    },
    {
      beginner: 0,
      intermediate: 0,
      advanced: 0,
    } as LevelSummary
  );

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-2xl py-2">Exercises</h2>
      <div className="grid grid-cols-4 gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Level Summary</CardTitle>
          </CardHeader>
          <CardContent className="">
            {/* have the descriptions of each level */}
            <p>Beginner Exercises: {levelSummary.beginner}</p>
            <p>
              These are exercises for those starting out in thier fitness
              journey
            </p>
            <p>Intermedieate Exercises: {levelSummary.intermediate}</p>
            <p>This is once you are hench and not for the faint hearted</p>
            <p>Advanced Exercises: {levelSummary.advanced}</p>
            <p>This is when people think you are taking steriods</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <DataTable columns={exerciseColumns} data={exercises} />
    </div>
  );
}
