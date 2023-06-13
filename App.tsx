import * as React from 'react';
import { Amplify as amplifyFunctions } from 'aws-amplify';
import config from './src/aws-exports';
import Navigation from './src/global/navigation/navigation';
import { InfoContext, SigninContext } from './src/context/context';
import { ErrorBoundary } from './src/global/errorBoundary/errorBoundary';

amplifyFunctions.configure(config);

const App = () => {
    const [userData, setUserData] = React.useState(null);
    const [userInfo, setUserInfo] = React.useState(null);

    return (
        //<ErrorBoundary>
        <InfoContext.Provider value={{ userInfo, setUserInfo }}>
            <SigninContext.Provider value={{ userData, setUserData }}>
                <Navigation />
            </SigninContext.Provider>
        </InfoContext.Provider>
        //</ErrorBoundary>
    );
};

export default App;
