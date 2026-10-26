export type TaskResponse = {
  title: string;
  description: string;
  substasks: Array<string>;
  status: string;
};

export type UpdateTaskRequest = {
  title: string;
  description: string;
  substasks: Array<string>;
  status: string;
};

export type AddTaskRequest = {
  title: string;
  description: string;
  subtasks: Array<string>;
  status: string;
  boardId: number;
};
