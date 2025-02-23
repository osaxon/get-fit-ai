import { TrainingSplitResModel } from "@/db/schema";
import { ColumnDef } from "@tanstack/react-table";

export const trainingSplitColumn: ColumnDef<TrainingSplitResModel>[] = [
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
    header: "Training Split Dsecription",
  },
  {
    accessorKey: "sessionsPerWeek",
    header: "TrainingSplit Sessions Per Week",
  },
];
