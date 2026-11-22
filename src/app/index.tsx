import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TarjetaJuego } from '@/components/TarjetaJuego';
import { Colores } from '@/constants/colores';
import { Medidas } from '@/constants/medidas';
import { Tipografia } from '@/constants/tipografia';
import { useJuegos } from '@/context/JuegosContext';

export default function Inicio() {
  const router = useRouter();
  const { juegos } = useJuegos();
  const [busqueda, setBusqueda] = useState('');

  const juegosFiltrados = juegos.filter((j) =>
    j.titulo.toLowerCase().includes(busqueda.trim().toLowerCase())
  );

  return (
    <SafeAreaView style={estilos.pantalla} edges={['top']}>
      <Text style={estilos.titulo}>ExpGaming</Text>
      <TextInput
        style={estilos.buscador}
        value={busqueda}
        onChangeText={setBusqueda}
        placeholder="Buscar juego..."
        placeholderTextColor={Colores.textoSecundario}
      />
      <FlatList
        data={juegosFiltrados}
        keyExtractor={(juego) => juego.id}
        renderItem={({ item }) => (
          <TarjetaJuego
            juego={item}
            onPress={() => router.push(`/juego/${item.id}`)}
          />
        )}
        ListEmptyComponent={
          <Text style={estilos.vacio}>No hay juegos que coincidan.</Text>
        }
        contentContainerStyle={estilos.lista}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    paddingHorizontal: Medidas.espacio,
    backgroundColor: Colores.fondo,
  },
  titulo: {
    ...Tipografia.titulo,
    marginTop: 8,
    marginBottom: 16,
    textAlign: 'center',
    color: Colores.textoPrincipal,
  },
  buscador: {
    minHeight: Medidas.tactilMinimo,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderRadius: Medidas.radio,
    backgroundColor: Colores.superficie,
    color: Colores.textoPrincipal,
    ...Tipografia.cuerpo,
  },
  lista: {
    paddingBottom: 24,
  },
  vacio: {
    ...Tipografia.cuerpo,
    marginTop: 24,
    textAlign: 'center',
    color: Colores.textoSecundario,
  },
});