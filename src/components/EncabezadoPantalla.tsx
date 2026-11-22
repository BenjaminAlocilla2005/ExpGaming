import { Pressable, StyleSheet, Text } from 'react-native';
import { Colores } from '@/constants/colores';
import { Medidas } from '@/constants/medidas';
import { Tipografia } from '@/constants/tipografia';

type Props = {
  texto: string;
  onPress: () => void;
};

export function EncabezadoPantalla({ texto, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={texto}
      style={({ pressed }) => [estilos.barra, pressed && estilos.presionado]}
    >
      <Text style={estilos.texto}>{texto}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  barra: {
    minHeight: Medidas.tactilMinimo,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  presionado: {
    opacity: 0.7,
  },
  texto: {
    ...Tipografia.cuerpo,
    color: Colores.textoPrincipal,
  },
});