export default function authHeader() {
    const token = JSON.parse(localStorage.getItem('x-access-token'));
    const role = JSON.parse(localStorage.getItem('role'));
    if (token && role=="admin"){
      return { 'x-access-token': token};
    } else {
      return {};
    }
  }