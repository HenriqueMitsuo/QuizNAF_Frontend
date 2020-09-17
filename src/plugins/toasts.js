import Toasted from 'vue-toasted';
import Vue from 'vue';

Vue.use(Toasted);

// Toasts usados em LoginForm.Vue
Vue.toasted.register('login_success', 'Login efetuado com sucesso!', {
    type : 'success',
    duration: 1000,
});

Vue.toasted.register('login_error', 'Erro na autenticação de credenciais!', {
    type : 'error',
    duration: 1000,
});

// Toasts usados em RegisterForm.Vue
Vue.toasted.register('register_success', 'Pronto. Agora efetue seu cadastro!',{
    type : 'success',
    duration: 1000,
});

Vue.toasted.register('register_error', 'Senhas não conferem!',{
    type : 'error',
    duration: 1000,
});

