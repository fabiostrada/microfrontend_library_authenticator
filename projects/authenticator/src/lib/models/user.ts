import { Base } from "./base";
import { Role } from "./role";
import { RoleType } from "./role.type";
export class User extends Base {

    public fullname: string;

    constructor(
        public override id: number | undefined,
        public name: string,
        public surname: string,
        public username: string,
        public roles: Array<Role>
    ) { 
        super(id);
        this.fullname = this.surname + ' ' + this.name;
    }

    public static isAdmin(user: User): boolean {
        return Role.contains(user.roles, RoleType.ADMIN);             
    }

    public static isDashboard(user: User): boolean {
        return Role.contains(user.roles, RoleType.DASHBOARD); 
    }

}