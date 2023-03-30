import { Toast } from "react-native-toast-message/lib/src/Toast";

const toastEmitter = ({ type, title, subtitle, onPress }) => {
  if (!title & !subtitle) {
    return;
  }

  Toast.show({
    type: type || "success",
    text1: title,
    text2: subtitle,
    onPress: onPress || (() => {}),
  });
};

export default toastEmitter;
