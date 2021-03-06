import Toasted from "vue-toasted";
import Vue from "vue";

Vue.use(Toasted);

// Toasts usados em LoginForm.Vue
Vue.toasted.register("login_success", "Login efetuado com sucesso!", {
  type: "success",
  duration: 1000
});

Vue.toasted.register("login_error", "Erro na autenticação de credenciais!", {
  type: "error",
  duration: 1000
});

// Toasts usados em RegisterForm.Vue
Vue.toasted.register("register_success", "Pronto. Agora efetue seu cadastro!", {
  type: "success",
  duration: 1000
});

Vue.toasted.register("register_error", "Senhas não conferem!", {
  type: "error",
  duration: 1000
});

//Toats usados em ProfileForm.Vue
//Para dados do usuário
Vue.toasted.register("updateprofile_success", "Dados atualizados com sucesso!", {
  type: "success",
  duration: 1000
});
Vue.toasted.register("updateprofile_error", "Ops! Este email invalido ou já está em uso!", {
  type: "error",
  duration: 1000
});
//Para senha do usuário
Vue.toasted.register("updatepassword_success", "Senha alterada com sucesso!", {
  type: "success",
  duration: 1000
});
Vue.toasted.register("updatepassword_error", "Ops! Senhas não conferem!", {
  type: "error",
  duration: 1000
});

//Toast usado no componente CreateQuiz.vue
Vue.toasted.register("createQuiz_success", "Quiz criado com sucesso!", {
  type: "success",
  duration: 1000
});

//Toast usado no componente CreateQuestion.vue
Vue.toasted.register("createQuestion_success", "Questão criada com sucesso!", {
  type: "success",
  duration: 1000
});

//Toast usado no componente QuestionTitle ou QuizTitle ao deletar
Vue.toasted.register("delete_success", "Deletado com sucesso!", {
  type: "success",
  duration: 1000
});
//Toast usado no componente QuizTitle ao deletar
Vue.toasted.register(
  "delete_error",
  "Ops! é necessário apagar todas as questões para poder apagar o quiz!",
  {
    type: "error",
    duration: 2000
  }
);

//Toast usado no componente UserList.vue
Vue.toasted.register("changeRole_success", "Permissões alteradas com sucesso!", {
  type: "success",
  duration: 1000
});
Vue.toasted.register("changeRole_error", "Ops! O usuário já tem essas permissões!", {
  type: "error",
  duration: 1000
});
