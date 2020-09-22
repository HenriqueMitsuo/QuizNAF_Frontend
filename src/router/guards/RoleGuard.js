import { checkRole } from "@/services/AuthService";
import _ from "lodash";

const beforeEach = (to, from, next) => {
    if (_.includes(to.meta.requireRoles, checkRole())) {
        console.log(`Autorizado = id: ${checkRole()}`);
    } else {
        console.log("Rota não autorizada!")
        next("/Home");
    }
}

export default beforeEach;