export type StatusType = "read" | "reading" | "want";


export interface IRecord {
    memo: string;
    status: StatusType;
    rating: number;
    page: number;
}

export interface IRecords {
    records: IRecords[];
}