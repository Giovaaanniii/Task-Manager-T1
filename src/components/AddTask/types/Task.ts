export type CategoryType = "Bug" | "Feature" | "Documentation" | "Refactor" | "Test";
export type StatusType = "To Do" | "In Progress" | "Done";
export type PriorityType = "Low" | "Medium" | "High";

export type Task = {
  id: number
  name: string;
  description: string;
  category: CategoryType;
  status: StatusType;
  priority: PriorityType;
};
