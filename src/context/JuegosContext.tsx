import { createContext, useContext, useState, type ReactNode } from 'react';
import { juegos as juegosIniciales, type Juego } from '@/data/juegos';

export type Resena = Juego['resenas'][number];

type JuegosContextoTipo = {
  juegos: Juego[];
  agregarResena: (juegoId: string, resena: Omit<Resena, 'id'>) => void;
};

const JuegosContexto = createContext<JuegosContextoTipo | null>(null);

export function JuegosProvider({ children }: { children: ReactNode }) {
  const [juegos, setJuegos] = useState<Juego[]>(juegosIniciales);

  const agregarResena = (juegoId: string, resena: Omit<Resena, 'id'>) => {
    setJuegos((actual) =>
      actual.map((j) =>
        j.id === juegoId
          ? { ...j, resenas: [...j.resenas, { ...resena, id: `r${Date.now()}` }] }
          : j
      )
    );
  };

  return (
    <JuegosContexto.Provider value={{ juegos, agregarResena }}>
      {children}
    </JuegosContexto.Provider>
  );
}

export function useJuegos() {
  const contexto = useContext(JuegosContexto);
  if (!contexto) {
    throw new Error('useJuegos debe usarse dentro de JuegosProvider');
  }
  return contexto;
}