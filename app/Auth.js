export function checkUserAuthentication() {
   
    const authToken = localStorage.getItem('authToken');
    return authToken !== null;
  }