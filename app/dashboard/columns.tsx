import { ExercisesResModel } from "@/db/schema";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ExercisesResModel>[] = [
  {
    accessorKey: "id",
    header: "myid",
  },
  {
    accessorKey: "name",
    header: "myname",
  },
  {
    accessorKey: "description",
    header: "mydescription",
  },
  {
    accessorKey: "level",
    header: "mylevel",
  },
];
