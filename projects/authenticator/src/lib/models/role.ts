import { Base } from ".";
import { isNullOrEmpty } from "../herlpers/array.helpers";
import { RoleType } from "./role.type";

export class Role extends Base {

    constructor(public override id: number,
                public name: string) {
        super(id);
    }

    static contains(roles: Array<Role>, role: RoleType): boolean {
        if (isNullOrEmpty(roles)) {
            return false;
        }
        let filteredRoles = roles.filter(item => item.name === role);
        return filteredRoles.length > 0;
    }
}