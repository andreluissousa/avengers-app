import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Loading, Character, CharacterInfo } from '../views';

const Stackroutes = () => {
  const Stack = createStackNavigator();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake Loading Auth
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {loading ? (
          <Stack.Screen name="Loading" component={Loading} />
        ) : (
          <>
            <Stack.Screen name="Character" component={Character} />
            <Stack.Screen name="CharacterInfo" component={CharacterInfo} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stackroutes;
