export interface Coach {
    coaching_lvl: Number,
    created_at: string,
    email: string,
    email_verified_at: string,
    id: Number,
    is_validated: boolean,
    name: string,
    formattedName: string,
    registered: boolean,
    updated_at: string,
    [user_info: string]: any;
}