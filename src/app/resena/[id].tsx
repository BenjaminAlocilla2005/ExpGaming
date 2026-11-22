import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BotonPrimario } from '@/components/BotonPrimario';
import { CampoTexto } from '@/components/CampoTexto';
import { EncabezadoPantalla } from '@/components/EncabezadoPantalla';
import { SelectorPuntaje } from '@/components/SelectorPuntaje';
import { Colores } from '@/constants/colores';
import { Medidas } from '@/constants/medidas';
import { Tipografia } from '@/constants/tipografia';
import { useJuegos } from '@/context/JuegosContext';

export default function CrearResena() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { juegos, agregarResena } = useJuegos();
  const juego = juegos.find((j) => j.id === id);

  const [nombre, setNombre] = useState('');
  const [puntaje, setPuntaje] = useState(0);
  const [texto, setTexto] = useState('');
  const [error, setError] = useState('');

  const publicar = () => {
    if (!nombre.trim() || puntaje === 0 || !texto.trim()) {
      setError('Completa tu nombre, elige un puntaje y escribe tu reseña.');
      return;
    }
    agregarResena(id, {
      usuario: nombre.trim(),
      puntaje,
      texto: texto.trim(),
    });
    router.back();
  };

  return (
    <SafeAreaView style={estilos.pantalla}>
      <EncabezadoPantalla texto="← Cancelar" onPress={() => router.back()} />
      <KeyboardAvoidingView
        style={estilos.teclado}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <Text style={estilos.titulo}>Reseña de {juego?.titulo ?? 'juego'}</Text>
          <CampoTexto
            etiqueta="Tu nombre"
            valor={nombre}
            onCambio={setNombre}
            placeholder="Ej: camila_g"
          />
          <SelectorPuntaje valor={puntaje} onCambio={setPuntaje} />
          <CampoTexto
            etiqueta="Tu reseña"
            valor={texto}
            onCambio={setTexto}
            placeholder="Cuenta qué te pareció el juego..."
            variasLineas
          />
          {error !== '' && <Text style={estilos.error}>{error}</Text>}
        </ScrollView>
        <View style={estilos.pie}>
          <BotonPrimario texto="Publicar reseña" onPress={publicar} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    paddingHorizontal: Medidas.espacio,
    backgroundColor: Colores.fondo,
  },
  teclado: {
    flex: 1,
  },
  titulo: {
    ...Tipografia.titulo,
    marginBottom: 16,
    color: Colores.textoPrincipal,
  },
  error: {
    ...Tipografia.etiqueta,
    color: Colores.error,
  },
  pie: {
    paddingVertical: 12,
  },
});