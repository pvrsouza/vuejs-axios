import Vue from "vue";
import axios from "axios";

//configurações globais
axios.defaults.baseURL =
  "https://controle-investimentos-1a4c6.firebaseio.com/global";

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    //console.log("request global", config);
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    //console.log("response global", response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

//Dessa forma o axios pode ser acessado por this.$http
//Tem que importar o Plugin no main.js
Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;

    const legado = axios.create({
      baseURL: "https://controle-investimentos-1a4c6.firebaseio.com/legado"
    });

    //cria mais uma instancia do axios
    Vue.prototype.$legado = legado;

    // Add a request interceptor
    legado.interceptors.request.use(
      config => {
        //console.log("request legado", config);
        // Do something before request is sent
        return config;
      },
      error => {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    legado.interceptors.response.use(
      response => {
        //console.log("response legado", response);
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      error => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );
  }
});
