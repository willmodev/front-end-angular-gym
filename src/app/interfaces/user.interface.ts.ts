// Generated by https://quicktype.io

export interface User {
    id:     number;
    email:  string;
    status: boolean;
    role:   Role;
}

export interface Role {
    id:   number;
    name: string;
}
