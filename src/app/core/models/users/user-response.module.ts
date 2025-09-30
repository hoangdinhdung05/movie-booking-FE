import { UserStatus } from "src/app/shared/enums/user-status";

export interface UserResponse {
    id: number;
    name: string;
    email: string;
    status: UserStatus;
}