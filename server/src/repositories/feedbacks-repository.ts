export interface FeedbacksCreateData {
    type: string;
    comment: string;
    screenshot?:string;
}

export interface FeedbacksRepository {
    create: (data: FeedbacksCreateData) => Promise<void>;
}