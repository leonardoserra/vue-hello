const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      imageVueUrl: 'https://digitalya.co/blog/wp-content/uploads/2022/08/vue-js-methods-demistified@3x-8-2048x667.png',
      imageVue: 'img/img1.png',
      text: 'text-center',
      size: 'smaller'
    }
  }
}).mount('#app');