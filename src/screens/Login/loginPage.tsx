import * as React from 'react';
import {
    LoginButton,
    LabelText,
    Input,
    ColorfulBackground,
    LoginContainer,
    LoginButtonText,
    ForgotPassword
} from './styles';
import { useState } from 'react';
import { Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { SigninContext } from '../../context/context';
import { showToast } from '../../global/toast/toastProvider';


const ParentsImage = require('./../../assets/Images/ParentsImage.png');
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation<any>();
    const [loading, setLoading] = useState(false);
    const { setUserData }: any = React.useContext(SigninContext);

    const handleNavigate = (user) => {
        setUserData(user);
        if (user.challengeName == 'NEW_PASSWORD_REQUIRED') {
            navigation.navigate('PasswordChange');
            return;
        }
        showToast('Login realizado com sucesso !');
        navigation.navigate('Home');
    };

    React.useEffect(() => {
        setLoading(true);
        Auth.currentAuthenticatedUser()
            .then((user) => {
                handleNavigate(user);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const onSignInPressed = async (data) => {
        if (loading) {
            return;
        }
        setLoading(true);
        try {
            const response: any = await Auth.signIn(
                data.username,
                data.password
            );
            handleNavigate(response);
        } catch (error: any) {
            showToast('Ops erro no login: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate("WorkingPage");
    };

    return (
        <ColorfulBackground>
         <Image
            source={ParentsImage}
            style={{ width: 400, height: 360, zIndex: 1}}
                            />
            <LoginContainer>
           
                <LabelText style={{marginTop: 50}}>RA do aluno</LabelText>
                <Input
                    placeholder="RA do Aluno"
                    value={username}
                    onChangeText={setUsername}
                />
                <LabelText>Senha</LabelText>
                <Input
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                
                <ForgotPassword onPress={onForgotPasswordPressed}>
                    Esqueci minha senha
                </ForgotPassword>
                <LoginButton>
                    <LoginButtonText
                        onClick={() => onSignInPressed({ username, password })}
                    >
                        {' '}
                        {loading ? 'Carregando' : 'Login'}
                    </LoginButtonText>
                </LoginButton>
            </LoginContainer>
        </ColorfulBackground>
    );
};

export default LoginPage;
