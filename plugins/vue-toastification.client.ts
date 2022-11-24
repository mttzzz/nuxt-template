import Toast from "vue-toastification";

import * as ttt from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
    position: "top-right",
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  });

  const { useToast } = ttt;
  const toast = useToast();
  return {
    provide: { toast },
  };
});
