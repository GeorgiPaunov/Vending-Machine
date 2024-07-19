import { toast, ToastOptions } from "react-toastify";

type NotifyMethod = "success" | "error" | "warn" | "info";

const defaultOptions: ToastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  theme: "colored",
};

export const { notifySuccess, notifyError, notifyWarning, notifyInfo } =
  (function () {
    const config = (options?: ToastOptions) =>
      options ? { ...defaultOptions, ...options } : defaultOptions;
    const notify =
      (method: NotifyMethod) => (text: string, options?: ToastOptions) =>
        toast[method](text, config(options));

    return {
      notifySuccess: notify("success"),
      notifyError: notify("error"),
      notifyWarning: notify("warn"),
      notifyInfo: notify("info"),
    };
  })();
