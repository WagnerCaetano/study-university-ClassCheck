import * as React from "react";
import { Amplify as amplifyFunctions } from "aws-amplify";
import config from "./src/aws-exports";
import Navigation from "./src/global/navigation/navigation";
import { SigninContext } from "./src/context/context";

amplifyFunctions.configure(config);

const App = () => {
  const [userData, setUserData] = React.useState(null);

  return (
    <>
      <SigninContext.Provider value={{ userData, setUserData }}>
        <Navigation />
      </SigninContext.Provider>
    </>
  );
};

export default App;
