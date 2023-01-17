import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@unocss/reset/tailwind.css";
import "uno.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// needs this to let renderer process know the window.api types
declare global {
  interface Window {
    api: {
      send: (channel: string, ...data: any[]) => void;
      invoke: (channel: string, ...data: any[]) => Promise<any>;
      on: (channel: string, func: (...args: any[]) => void) => void;
      once: (channel: string, func: (...args: any[]) => void) => void;
    };
  }
}
