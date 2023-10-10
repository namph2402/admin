export class PaginationOutput<T> {
  data: T[];
  current_page: number;
  last_page: number;
  total: number;
}
