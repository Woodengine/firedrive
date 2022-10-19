// https://v3.nuxtjs.org/api/configuration/nuxt.config

const nuxtTaildwind = '@nuxtjs/tailwindcss';
const nuxtIcon = 'nuxt-icon';

const SERVER_PRIVATE_VARIABLES = {
  firebaseToken: ''
}

const PUBLIC_CLIENT_VARIABLES = {
  appName: '',
  logoUrl: '',
}

const appConfig = {
  head: {
    meta: [],
    script: [],
    link: [],
    style: [],
    noscript: [
      { children: 'Javascript is required to view this page' }
    ]
  }
}

export default defineNuxtConfig({
  // @ts-ignore
  modules: [nuxtTaildwind, nuxtIcon],
  runtimeConfig: {
    SERVER_PRIVATE_VARIABLES,
    public: PUBLIC_CLIENT_VARIABLES
  },
  app: appConfig

});