import Toasted from 'vue-toasted';
import Vue from 'vue';

Vue.use(Toasted);

Vue.toasted.register('login_success', 'Login efetuado com sucesso!', {
    type : 'success',
    duration: 1000,
});

Vue.toasted.register('login_error', 'Erro na autenticação de credenciais!', {
    type : 'error',
    duration: 1000,
});