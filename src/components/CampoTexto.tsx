import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colores } from '@/constants/colores';
import { Medidas } from '@/constants/medidas';
import { Tipografia } from '@/constants/tipografia';

type Props = {
  etiqueta: string;
  valor: string;
  onCambio: (texto: string) => void;
  placeholder?: string;
  variasLineas?: boolean;
};

export function CampoTexto({
  etiqueta,
  valor,
  onCambio,
  placeholder,
  variasLineas = false,
}: Props) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.etiqueta}>{etiqueta}</Text>
      <TextInput
        style={[estilos.campo, variasLineas && estilos.variasLineas]}
        value={valor}
        onChangeText={onCambio}
        placeholder={placeholder}
        placeholderTextColor={Colores.textoSecundario}
        multiline={variasLineas}
        accessibilityLabel={etiqueta}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    marginBottom: 16,
  },
  etiqueta: {
    ...Tipografia.etiqueta,
    marginBottom: 6,
    color: Colores.textoSecundario,
  },
  campo: {
    minHeight: Medidas.tactilMinimo,
    paddingHorizontal: 12,
    borderRadius: Medidas.radio,
    backgroundColor: Colores.superficie,
    color: Colores.textoPrincipal,
    ...Tipografia.cuerpo,
  },
  variasLineas: {
    minHeight: 120,
    paddingTop: 12,
    textAlignVertical: 'top',
  },
});