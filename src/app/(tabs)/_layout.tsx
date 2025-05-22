import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarShowLabel: false, 
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#CBD5E0',
        tabBarIcon: ({ color, size }) => {
          const iconName = route.name === 'home' ? 'home' : 'wallet';
          return <Ionicons name={iconName} size={26} color={color} />;
        },
        tabBarStyle: {
          height: 90,
          paddingBottom: 10,
          paddingTop: 17,
          justifyContent: 'center',
          alignItems: 'center',
        },
        headerShown: false,
      })}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="historico" />
    </Tabs>
  );
}
