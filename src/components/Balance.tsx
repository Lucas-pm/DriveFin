//Mostrar o valor Atual

import { View, Text, Image } from 'react-native';

export default function Balance({ total }: { total: number }) {
  return (
    <View className="flex-row items-center">
      <Image
        source={require('../images/car.png')}
        className="mt-4 w-60 h-60 shadow-md shadow-gray-300"
        resizeMode="contain"
      />
      <View className="mt-20 flex">
        <Text className="text-lg text-gray-600 leading-tight mt-2">Total:</Text>
        <Text className="text-4xl font-bold text-black">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          }).format(Number(total) || 0)}
        </Text>
      </View>
    </View>
  );
}
