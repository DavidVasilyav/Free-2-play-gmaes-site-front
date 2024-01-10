import axios from "axios";
const api = axios.create({
  // baseURL: 'http://localhost:3030/user',
  baseURL: 'https://freegamesitebackend.onrender.com/user',
  headers: { "Content-Type": "application/json" },
});


export async function LoginByEmailAndPassword(username, password) {
    try {
      const response = await api.post("/login", { username, password });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      // return Promise.reject(error.response.data.error);
      return Promise.reject(error);

    }
  }

  export async function RegisterUserService(username, password, email, firstName, lastName, age){
    try {
      const response = await api.post("/register", {username, password, email, firstName, lastName, age });
      console.log(response);
      return response
      } catch (error) {
        console.log(error.response.data.error);
        return Promise.reject(error);

      }
  }

  export async function EditUserInfo(data) {
    console.log(data);
    try {
      const response = await api.post("/edit", {username: 'david'});
      console.log(response);
      return response
    } catch (error) {
          console.log(error);
    }
  }