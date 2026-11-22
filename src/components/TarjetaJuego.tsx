import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colores } from '@/constants/colores';
import { Medidas } from '@/constants/medidas';
import { Tipografia } from '@/constants/tipografia';
import type { Juego } from '@/data/juegos';

type Props = {
  juego: Juego;
  onPress: () => void;
};

export function TarjetaJuego({ juego, onPress }: Props) {
  const plataformaPrincipal = juego.plataforma.split(',')[0];

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Ver detalle de ${juego.titulo}`}
      style={({ pressed }) => [estilos.tarjeta, pressed && estilos.presionada]}
    >
      <View style={estilos.portada} />
      <View style={estilos.info}>
        <Text style={estilos.titulo}>{juego.titulo}</Text>
        <Text style={estilos.detalle}>
          {juego.genero} · {plataformaPrincipal}
        </Text>
        <Text style={estilos.detalle}>★ {juego.puntaje}</Text>
      </View>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 96,
    padding: 12,
    marginBottom: 12,
    borderRadius: Medidas.radio,
    backgroundColor: Colores.superficie,
  },
  presionada: {
    opacity: 0.7,
  },
  portada: {
    width: 72,
    height: 72,
    borderRadius: 8,
    backgroundColor: Colores.primarioClaro,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    gap: 2,
  },
  titulo: {
    ...Tipografia.subtitulo,
    color: Colores.textoPrincipal,
  },
  detalle: {
    ...Tipografia.etiqueta,
    color: Colores.textoSecundario,
  },
});