import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1"
});

export const register = newUser => {
  return axios
    .post("http://localhost:5000/api/v1/register", {
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log("Registered");
    });
};

export const login = user => {
  return axios
    .post("http://localhost:5000/api/v1/login", {
      email: user.email,
      password: user.password
    })
    .then(response => {
      if (response.data.token === undefined) {
      } else {
        localStorage.setItem("tokenn", response.data.token);
        return response.data;
      }
    })
    .catch(err => {
      console.log(err);
    });
};
