import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import HomeImigrantes from './HomeImigrantes/HomeImigrantes'
import LoginImigrantes from './LoginImigrantes/LoginImigrantes'
import TelaImigranteBuscas from './TelaImigranteBuscas/TelaImigranteBuscas'
import TelaCadastro from './TelaCadstro/TelaCadastro'

import LoginEmpresas from './loginEmpresas/LoginEmpresas'
import CadastroEmpresas from './TelaCadstro/CadastroEmpresas'
import PaginaPrincipalEmpresas from './paginaPrincipalEmpresas/paginaPrincipalEmpresas'

const Stack = createStackNavigator ()
	
export default function App() {
return (
<NavigationContainer>
  <Stack.Navigator initialRouteName='Home' headerMode='none'>
    <Stack.Screen name='Home' component={HomeImigrantes}/>
    <Stack.Screen name= 'Login' component={LoginImigrantes}/>
    <Stack.Screen name= 'Search' component={TelaImigranteBuscas}/>
    <Stack.Screen name= 'Register' component={TelaCadastro}/>

    <Stack.Screen name= 'EntrarEmpresas' component={LoginEmpresas}/>
    <Stack.Screen name= 'RegisterEmpresas' component={CadastroEmpresas}/>
    <Stack.Screen name= 'PagePrincipal' component={PaginaPrincipalEmpresas}/>
    
  </Stack.Navigator>
</NavigationContainer>
	
);
}