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

export function checkAuth () {
  const token = localStorage.getItem('token');

  if (!token)
    return false;

  try {
    const { exp: expiration } = decode(token);
    const isExpired = !!expiration && Date.now() > expiration * 1000;

    if (isExpired) 
      return false; 

    return true;
  } catch (_) {   
    return false
  }
}