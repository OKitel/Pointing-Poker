import { User } from './user';

export interface ChatMessage {
    user: User;
    text: string;
    id: string;
    date: Date;
}
