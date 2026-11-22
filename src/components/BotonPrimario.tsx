import { Pressable, StyleSheet, Text } from 'react-native';
import { Colores } from '@/constants/colores';
import { Medidas } from '@/constants/medidas';
import { Tipografia } from '@/constants/tipografia';

type Props = {
  texto: string;
  onPress: () => void;
  deshabilitado?: boolean;
};

export function BotonPrimario({ texto, onPress, deshabilitado = false }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={deshabilitado}
      accessibilityRole="button"
      accessibilityLabel={texto}
      style={({ pressed }) => [
        estilos.boton,
        pressed && estilos.presionado,
        deshabilitado && estilos.deshabilitado,
      ]}
    >
      <Text style={estilos.texto}>{texto}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  boton: {
    minHeight: Medidas.tactilMinimo,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Medidas.radio,
    backgroundColor: Colores.primario,
  },
  presionado: {
    opacity: 0.7,
  },
  deshabilitado: {
    opacity: 0.4,
  },
  texto: {
    ...Tipografia.subtitulo,
    color: Colores.textoPrincipal,
  },
});