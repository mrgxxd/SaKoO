import {
  StackNavigator,
} from 'react-navigation';

//authentication
import FormTest from "../../screens/FormTest";

const initRoute = () => {
    console.log("INIT ROUTE");
    return 'FormTest'
};

const App = StackNavigator({
  FormTest: { screen: FormTest }
},
{
    navigationOptions: { header: null },
    initialRouteName: initRoute(),
});

export default App;
