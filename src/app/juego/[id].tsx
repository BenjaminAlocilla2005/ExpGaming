import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BotonPrimario } from '@/components/BotonPrimario';
import { EncabezadoPantalla } from '@/components/EncabezadoPantalla';
import { Colores } from '@/constants/colores';
import { Medidas } from '@/constants/medidas';
import { Tipografia } from '@/constants/tipografia';
import { useJuegos } from '@/context/JuegosContext';

export default function Detalle() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { juegos } = useJuegos();
  const juego = juegos.find((j) => j.id === id);

  if (!juego) {
    return (
      <SafeAreaView style={estilos.pantalla}>
        <EncabezadoPantalla texto="← Volver" onPress={() => router.back()} />
        <Text style={estilos.vacio}>Juego no encontrado.</Text>
      </SafeAreaView>
    );
  }

  const plataformaPrincipal = juego.plataforma.split(',')[0];

  return (
    <SafeAreaView style={estilos.pantalla}>
      <EncabezadoPantalla texto="← Volver" onPress={() => router.back()} />
      <FlatList
        data={juego.resenas}
        keyExtractor={(resena) => resena.id}
        ListHeaderComponent={
          <View>
            <View style={estilos.portada} />
            <Text style={estilos.titulo}>{juego.titulo}</Text>
            <Text style={estilos.meta}>
              {juego.genero} · {plataformaPrincipal} · {juego.anio} · {juego.desarrollador}
            </Text>
            <Text style={estilos.descripcion}>{juego.descripcion}</Text>
            <Text style={estilos.seccion}>Reseñas</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={estilos.resena}>
            <Text style={estilos.usuario}>
              {item.usuario} · ★ {item.puntaje}
            </Text>
            <Text style={estilos.textoResena}>{item.texto}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={estilos.vacio}>Aún no hay reseñas. ¡Sé el primero!</Text>
        }
        contentContainerStyle={estilos.lista}
      />
      <View style={estilos.pie}>
        <BotonPrimario
          texto="Escribir reseña"
          onPress={() => router.push(`/resena/${juego.id}`)}
        />
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    paddingHorizontal: Medidas.espacio,
    backgroundColor: Colores.fondo,
  },
  lista: {
    paddingBottom: 16,
  },
  portada: {
    height: 180,
    marginBottom: 16,
    borderRadius: Medidas.radio,
    backgroundColor: Colores.primarioClaro,
  },
  titulo: {
    ...Tipografia.titulo,
    color: Colores.textoPrincipal,
  },
  meta: {
    ...Tipografia.etiqueta,
    marginTop: 4,
    color: Colores.textoSecundario,
  },
  descripcion: {
    ...Tipografia.cuerpo,
    marginTop: 12,
    color: Colores.textoPrincipal,
  },
  seccion: {
    ...Tipografia.subtitulo,
    marginTop: 24,
    marginBottom: 12,
    color: Colores.textoPrincipal,
  },
  resena: {
    padding: 12,
    marginBottom: 12,
    borderRadius: Medidas.radio,
    backgroundColor: Colores.superficie,
  },
  usuario: {
    ...Tipografia.etiqueta,
    color: Colores.secundario,
  },
  textoResena: {
    ...Tipografia.cuerpo,
    marginTop: 4,
    color: Colores.textoPrincipal,
  },
  vacio: {
    ...Tipografia.cuerpo,
    marginTop: 16,
    textAlign: 'center',
    color: Colores.textoSecundario,
  },
  pie: {
    paddingVertical: 12,
  },
});