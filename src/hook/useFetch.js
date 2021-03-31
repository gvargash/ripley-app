import { useState } from "react";
import { ToastAndroid } from "react-native";

const showToastWithGravityAndOffset = (message) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

const useFetch = () => {
  const [loading, setLoading] = useState(false);

  const onFetch = ({
    form,
    url = "https://ripley-api.herokuapp.com/api/v1/creacliente",
    method = "POST",
    setForm,
    initialState,
  }) => {
    setLoading(true);
    fetch(url, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        showToastWithGravityAndOffset(data.message);
        setLoading(false);
        setForm(initialState);
      })
      .catch((error) => {
        setLoading(false);
        showToastWithGravityAndOffset("No se puedo registrar cliente.");
      });
  };

  return [loading, onFetch];
};

export default useFetch;
