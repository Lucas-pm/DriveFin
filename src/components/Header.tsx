
import { View, Text, Image } from 'react-native';

export default function Header() {
  return (
    <View className="bg-verde shadow-xl shadow-zinc-300 w-full p-4 rounded-b-2xl flex-row items-center justify-between">
      <View className="ml-3 gap-3 flex-row mt-44 items-center">
        <Image
          source={require('../images/small-Profile.png')}
          className="w-12 h-12 rounded-full mr-3"
        />
        <View>
          <Text className="font-montserrat text-3xl font-bold">Olá, Driver</Text>
          <Text className="font-montserrat text-xl ml-1 font-normal leading-tight text-gray-600">
            Seja Bem-vindo!
          </Text>
        </View>
      </View>
    </View>
  );
}
