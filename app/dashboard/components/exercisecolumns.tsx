import { ExercisesResModel } from "@/db/schema";
import { ColumnDef } from "@tanstack/react-table";

export const exerciseColumns: ColumnDef<ExercisesResModel>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "level",
    header: "Level",
  },
];
