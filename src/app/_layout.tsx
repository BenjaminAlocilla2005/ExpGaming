import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Colores } from '@/constants/colores';
import { JuegosProvider } from '@/context/JuegosContext';

export default function RootLayout() {
  return (
    <JuegosProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colores.fondo },
        }}
      />
    </JuegosProvider>
  );
}