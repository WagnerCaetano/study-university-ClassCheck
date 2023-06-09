import { API } from 'aws-amplify';

export const getClassDate = () => {
    return API.get('classcheckapi', '/informacoes/calendario', {});
};

export const getInfoAluno = (matricula) => {
    return API.get('classcheckapi', '/informacoes/' + matricula, {});
};

export const convertDynamoDBToJson = (dynamoDBData, selector = 'Item') => {
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

    let data;
    if (Array.isArray(dynamoDBData.data[selector])) {
        data = dynamoDBData.data[selector];
    } else {
        data = [dynamoDBData.data[selector]];
    }

    const convertedData = data.map((item) => {
        const convertedItem = {};
        for (const key in item) {
            convertedItem[key] = convertAttribute(item[key]);
        }
        return convertedItem;
    });

    return convertedData;
};
