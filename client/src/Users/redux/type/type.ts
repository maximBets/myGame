export type User = {
    id?:number;
    name:string;
    password:string;

};

export type State = {
    user:User | {};
};
