import decode from 'jwt-decode';
import { ApiService } from './ApiService';

export async function signIn (email, password) {
    let userService = new ApiService('login');
    const user = await userService.login({ email: email, password: password });
    localStorage.setItem('token', user.token);
    console.log("Auth: usuário conectado");
}

export function signOut() {
    localStorage.removeItem('token');
    console.log("Auth: usuário desconectado");
}

export function isSignedIn () {
    const token = localStorage.getItem('token');
  
    // Checando se token existe
    if (!token)   
      return false;
  
    // Caso existir, checar se está espirado
    try {
      const { exp: expiration } = decode(token);
      const isExpired = !!expiration && Date.now() > expiration * 1000;
  
      if (isExpired)
        return false;
                     
      return true;
    } catch (_) {
      return false;
    }
  }