
import { TouchableOpacity, View, Text } from 'react-native';
import { Dimensions } from 'react-native';

export function Button({
  type,
  label,
  icon,
  onPress,
}: {
  type: 'income' | 'expense';
  label: string;
  icon: string;
  onPress: () => void;
}) {
  
  const { width } = Dimensions.get('window');
  const boxWidth = width * 0.42; 
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: boxWidth, height: boxWidth * 1.2 }}
      className={`${type === 'income' ? 'bg-verde' : 'bg-vermelho'} rounded-2xl p-4 relative`}
    >
      <Text className="text-4xl absolute top-4 left-6">{icon}</Text>
      <View className="flex-1 justify-end items-center mb-6">
        <Text className="font-bold text-xl text-black">{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
