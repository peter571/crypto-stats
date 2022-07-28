import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { News, Home } from './screens';
import { RootParamList } from './types';

const Tab = createBottomTabNavigator<RootParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='News' component={News} />
    </NavigationContainer>
  );
}
