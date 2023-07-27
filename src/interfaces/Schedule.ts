export interface RowData {
  userId: string;
  cells: { [key: string]: any };
}
export interface titleRow {
  id: string | number;
  title: string;
}
export interface Cell {
  rowIndex: number;
  columnIndex: number;
  type?: string;
  row?: any
}
export interface MonthOption {
  value: number;
  label: string;
}
