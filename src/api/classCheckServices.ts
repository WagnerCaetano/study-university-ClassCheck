import { API } from "aws-amplify";

export const getClassDate = () => {
  // return API.get("classcheckapi", "/alguma_rota_de_calendario", {});
  return {
    "segunda": "aula normal",
    "terça": "aula normal",
    "quarta": "aula normal",
    "quinta": "aula normal",
    "sexta": "aula normal",
    "sabado": "sem aula",
    "domingo": "sem aula",
    "feriado": "sem aula"
  }
}

export const getInfoAluno = (matricula) => {
  return API.get("classcheckapi", "/informacoes/" + matricula, {});
};

export const convertDynamoDBToJson = (dynamoDBData) => {
  const convertAttribute = (attribute) => {
    if (attribute.S) {
      return attribute.S;
    } else if (attribute.N) {
      return parseFloat(attribute.N);
    } else if (attribute.BOOL) {
      return attribute.BOOL;
    } else if (attribute.L) {
      return attribute.L.map((item) => convertAttribute(item));
    } else if (attribute.M) {
      const obj = {};
      for (const key in attribute.M) {
        obj[key] = convertAttribute(attribute.M[key]);
      }
      return obj;
    }
  };

  const data = dynamoDBData.data.Item;
  const convertedData = {};

  for (const key in data) {
    convertedData[key] = convertAttribute(data[key]);
  }

  return convertedData;
};
