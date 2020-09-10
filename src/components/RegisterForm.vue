<template>
  <div class="container">
    <form action method>
      <div class="row justify-content-center align-items-center">
        <div class="col-sm-12 mt-3">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text" style="background: transparent;">
                <!-- Icone Person-Circle -->
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-person-circle"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"
                  />
                  <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
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
              placeholder="Nome"
              style="background: transparent;"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-sm-12 mt-3">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text" style="background: transparent;">
                <!-- Icone e-mail -->
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
        </div>
      </div>
      <div class="row">
        <div class="col-8 mt-3 pr-1">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text" style="background: transparent;">
                <!-- Icone building -->
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-building"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                  />
                  <path
                    d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"
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
              placeholder="Cidade"
              style="background: transparent;"
            />
          </div>
        </div>
        <div class="col-4 mt-3 pl-1">
          <div class="input-group input-group-lg">
            <input
              type="text"
              name
              class="form-control text-light"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="UF"
              style="background: transparent;"
              maxlength="2"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-sm-12 mt-3">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text" style="background: transparent;">
                <!-- Icone globe -->
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-globe"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4H2.255a7.025 7.025 0 0 1 3.072-2.472 6.7 6.7 0 0 0-.597.933c-.247.464-.462.98-.64 1.539zm-.582 3.5h-2.49c.062-.89.291-1.733.656-2.5H3.82a13.652 13.652 0 0 0-.312 2.5zM4.847 5H7.5v2.5H4.51A12.5 12.5 0 0 1 4.846 5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5H7.5V11H4.847a12.5 12.5 0 0 1-.338-2.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12H7.5v2.923c-.67-.204-1.335-.82-1.887-1.855A7.97 7.97 0 0 1 5.145 12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11H1.674a6.958 6.958 0 0 1-.656-2.5h2.49c.03.877.138 1.718.312 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12h2.355a7.967 7.967 0 0 1-.468 1.068c-.552 1.035-1.218 1.65-1.887 1.855V12zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5h-2.49A13.65 13.65 0 0 0 12.18 5h2.146c.365.767.594 1.61.656 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z"
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
              placeholder="País"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-sm-12 mt-3">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text" style="background: transparent;">
                <!-- Icone book-fill -->
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-book-fill"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
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
              placeholder="Instituição de ensino"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-sm-12 mt-3">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text" style="background: transparent;">
                <!-- Icone pencil-fill -->
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-pencil-fill"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
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
              placeholder="Curso"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-sm-12 mt-3">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text" style="background: transparent;">
                <!-- icone lock -->
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
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-sm-12 mt-3">
          <div class="input-group input-group-lg">
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
              placeholder="Repita senha"
            />
          </div>
        </div>
      </div>
      <div class="pt-4">
        <router-link to="/">
          <button type="button" class="p-2 btn btn-warning" style="width: 100%">REGISTRAR</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<style>
input {
  background: transparent !important;
}

::-webkit-input-placeholder {
  /* Edge */
  color: white;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: white;
}

::placeholder {
  color: white;
}
</style>