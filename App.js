import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider } from 'react-native-paper';
import TabNavigator from "./src/TabNavigator";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard
} from "./src/screens"

const Stack = createNativeStackNavigator();

function App() {
   

    return (
      <Provider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false}} />
            <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false}} />
            <Stack.Screen name="Register" component={RegisterScreen}  options={{ headerShown: false}} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}  options={{ headerShown: false}} />
            <Stack.Screen name="Navigator" component={TabNavigator} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}

export default App;