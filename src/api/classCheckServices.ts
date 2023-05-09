import { API } from "aws-amplify";

export const getInfoAluno = () => {
  return API.get("classcheckapi", "/informacoes", {});
};
