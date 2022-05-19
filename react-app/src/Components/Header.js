export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('x-access-token'));
    if (user){ //&& user.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': user }; //{ 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }