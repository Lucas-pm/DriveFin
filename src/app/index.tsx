import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  
  return (
    <View className="flex-1 justify-center items-center bg-verde">
      <Text className="font-montserrat text-gray-800 text-5xl font-semibold mb-6">DriveFin</Text>
      <Image source={require('../images/nota.png')} className="w-96 h-96" />
    </View>
  );
}
