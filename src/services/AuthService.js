import decode from 'jwt-decode';
import { ApiService } from './ApiService';

const userService = new ApiService('login');

export async function signIn(email, password) {
    const userRequest = await userService.login({ email: email, password: password });
    localStorage.setItem('token', userRequest.token);
    console.log("Auth: usuário conectado");
}

export function signOut() {
    localStorage.removeItem('token');
    console.log("Auth: usuário desconectado");
}

export function checkAuth() {
  let jwt = localStorage.getItem('token');
  const { exp: expiration } = decode(jwt);

  // Checa se token existe
  if (jwt) { 
    if (Date.now() >= expiration * 1000) {
      console.log('token expirado')
      return false;
    }
    return true;  
  } else {
    return false;
  }
}