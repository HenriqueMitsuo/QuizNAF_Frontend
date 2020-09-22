import { checkAuth } from "@/services/AuthService";

const beforeEach = (to, from, next) => {
    if ((to.matched.some(rec => rec.meta.requiresAuth))) {
        // Essa rota requer auth. Se não estiver logado, redirecionar para tela de login
        checkAuth() ? next() : next('/');
    } else {
        next();
    }
};

export default beforeEach;