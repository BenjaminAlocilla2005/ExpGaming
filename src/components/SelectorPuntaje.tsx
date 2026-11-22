import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colores } from '@/constants/colores';
import { Medidas } from '@/constants/medidas';
import { Tipografia } from '@/constants/tipografia';

type Props = {
  valor: number;
  onCambio: (puntaje: number) => void;
};

export function SelectorPuntaje({ valor, onCambio }: Props) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.etiqueta}>Puntaje</Text>
      <View style={estilos.fila}>
        {[1, 2, 3, 4, 5].map((n) => (
          <Pressable
            key={n}
            onPress={() => onCambio(n)}
            accessibilityRole="button"
            accessibilityLabel={`Puntaje ${n} de 5`}
            style={[estilos.estrella, n <= valor && estilos.activa]}
          >
            <Text style={estilos.simbolo}>★</Text>
          </Pressable>
        ))}
      </View>
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
  fila: {
    flexDirection: 'row',
    gap: 8,
  },
  estrella: {
    width: Medidas.tactilMinimo,
    height: Medidas.tactilMinimo,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Medidas.radio,
    backgroundColor: Colores.superficie,
  },
  activa: {
    backgroundColor: Colores.primario,
  },
  simbolo: {
    ...Tipografia.subtitulo,
    color: Colores.textoPrincipal,
  },
});