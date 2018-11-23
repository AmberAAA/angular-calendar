
export interface TodoSteps {
  name: string;
  stats: boolean;
  addTime: Date;
}

export interface Todo {
  _id ?: string;
  title: string;
  owner: string;
  startTime ?: Date;
  endTime ?: Date;
  list: TodoSteps[];
  body ?: string;
  share ?: string[];
  deleted ?: boolean;
  finish ?: boolean;
}
