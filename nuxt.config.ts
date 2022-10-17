// https://v3.nuxtjs.org/api/configuration/nuxt.config

const nuxtTaildwind = '@nuxtjs/tailwindcss';

const SERVER_PRIVATE_VARIABLES = {
  firebaseToken: ''
}

const PUBLIC_CLIENT_VARIABLES = {
  appName: '',
  logoUrl: '',
}

export default defineNuxtConfig({
  // @ts-ignore
  modules: [nuxtTaildwind],

  runtimeConfig: {
    SERVER_PRIVATE_VARIABLES,
    public: PUBLIC_CLIENT_VARIABLES
    
  },

});



