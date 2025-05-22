
import { View, Text, TextInput, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
  type: 'income' | 'expense' | null;
  desc: string;
  setDesc: (val: string) => void;
  value: string;
  setValue: (val: string) => void;
}

export default function TransactionModal({
  visible,
  onClose,
  onSubmit,
  type,
  desc,
  setDesc,
  value,
  setValue
}: Props) {
  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 justify-center items-center bg-black/60">
          <TouchableWithoutFeedback>
            <View className="bg-cinza w-80 p-6 rounded-2xl shadow-lg">
              <Text className="text-lg font-bold mb-4">
                {type === 'income' ? 'Adicionar Entrada' : 'Adicionar Saída'}
              </Text>

              <TextInput
                placeholder="Descrição"
                value={desc}
                onChangeText={setDesc}
                className="border p-2 mb-2 rounded"
              />
              <TextInput
                placeholder="Valor"
                keyboardType="numeric"
                value={value}
                onChangeText={setValue}
                className="border p-2 mb-4 rounded"
              />

              <TouchableOpacity
                onPress={onSubmit}
                className={`p-2 rounded ${type === 'income' ? 'bg-verde' : 'bg-vermelho'}`}
              >
                <Text className="text-black font-semibold text-center">
                  {type === 'income' ? 'Adicionar Entrada' : 'Adicionar Saída'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onClose} className="mt-2">
                <Text className="text-center font-semibold text-red-500">Cancelar</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
