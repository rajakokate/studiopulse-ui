import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

// get csrftoken from  browser cookies

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    console.log(cookies);
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      console.log(cookie)
      // console.log(cookie.substring(name.length + 1));
      if (cookie.startsWith(name + "=")) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        console.log(cookieValue)
        break;
      }
    }
  }
  return cookieValue;
}
console.log(getCookie('csrftoken'));

//Create an axios instance with credentials
const API = axios.create({
  baseURL: `${API_BASE_URL}`,
  withCredentials: true, //allows browser to send sessionid cookie
  headers: {
    "Content-Type": "application/json",
  },
});


//Add CSRF token to every request automatically
API.interceptors.request.use(config => {
  const csrftoken = getCookie('csrftoken');
  console.log(csrftoken);
  if (csrftoken) {
    console.log("CSRF ",csrftoken)
    config.headers["X-CSRFToken"] = csrftoken // send csrf token for django protection
  }
  return config;
})

export default API;
