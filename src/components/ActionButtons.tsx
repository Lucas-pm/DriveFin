import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
  onPressIncome: () => void;
  onPressExpense: () => void;
}

export default function ActionButtons({ onPressIncome, onPressExpense }: Props) {
  return (
    <View className="px-6 mt-10">
      <Text className="text-base font-montserrat font-semibold text-gray-900 ml-8 mb-2">
        ADICIONE:
      </Text>
      <View className="flex-row justify-evenly">
        <TouchableOpacity
          onPress={onPressIncome}
          className="bg-verde w-44 h-52 rounded-2xl p-4 relative"
        >
          <Text className="text-4xl absolute top-4 left-6">🏦</Text>
          <View className="flex-1 justify-end items-center mb-6">
            <Text className="font-bold text-xl text-black">ENTRADA</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressExpense}
          className="bg-vermelho w-44 h-52 rounded-2xl p-4 relative"
        >
          <Text className="text-4xl absolute top-4 left-6">💳</Text>
          <View className="flex-1 justify-end items-center mb-6">
            <Text className="font-bold text-xl text-black">SAÍDA</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
