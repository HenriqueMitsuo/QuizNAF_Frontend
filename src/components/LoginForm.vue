<template>
  <div class="container">
    <div class="row vh-100 justify-content-center align-items-center">
      <div class="col-12 pt-5">
        <form action method>
          <img src="@/assets/person.png" class="mx-auto d-block" width="30%" />
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text" style="background: transparent;">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-envelope"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                  />
                </svg>
              </span>
            </div>
            <input
              type="text"
              name
              class="form-control text-light"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="E-mail"
              style="background: transparent;"
            />
          </div>

          <div class="input-group input-group-lg pt-4">
            <div class="input-group-prepend">
              <span class="input-group-text" style="background: transparent;">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-lock"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                  />
                </svg>
              </span>
            </div>
            <input
              type="password"
              name
              class="form-control text-light"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Senha"
              style="background: transparent;"
            />
          </div>
          <div class="pt-4">
            <router-link to="/">
              <button type="button" class="p-2 btn btn-success" style="width: 100%">ENTRAR</button>
            </router-link>
          </div>
          <div class="pt-2">
            <router-link to="/Register">
              <button type="button" class="p-2 btn btn-danger" style="width: 100%">REGISTRAR</button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>