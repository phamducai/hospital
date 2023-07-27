export enum TextAlign {
    Left = "left",
    Right = "right",
    Center = "center",
    Justify = "justify",
}

export interface ColumnTableCustom {
    id: string;
    label: string;
    align: TextAlign;
    gridColumn?: string;
    minWidthValue?: number;
}
