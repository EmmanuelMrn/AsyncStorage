import { createStackNavigator } from 'react-navigation';

import DashboardScreen from './screens/DashboardScreen';
import TestScreen from './screens/TestScreen';

export default createStackNavigator({
  Dashboard: {
    screen: DashboardScreen, navigationOptions: { header: null },
  },
  Test: {
    screen: TestScreen, navigationOptions: { header: null },
  },
},
{
  initialRouteName: 'Dashboard',
});
