export type Resena = {
  id: string;
  usuario: string;
  puntaje: number;
  texto: string;
};

export type Juego = {
  id: string;
  titulo: string;
  genero: string;
  plataforma: string;
  anio: number;
  desarrollador: string;
  puntaje: number;
  descripcion: string;
  resenas: Resena[];
};

export const juegos: Juego[] = [
  {
    id: '1',
    titulo: 'Hollow Knight',
    genero: 'Metroidvania',
    plataforma: 'PC, Switch, PlayStation, Xbox',
    anio: 2017,
    desarrollador: 'Team Cherry',
    puntaje: 4.8,
    descripcion: 'Explora un reino de insectos en ruinas, con combates exigentes y un mapa lleno de secretos.',
    resenas: [
      { id: 'r1', usuario: 'camila_g', puntaje: 5, texto: 'El mapa es enorme y cada zona tiene su propia música. Quiero más.' },
      { id: 'r2', usuario: 'nico.dev', puntaje: 4, texto: 'Muy difícil al comienzo, pero cada jefe se siente justo.' },
    ],
  },
  {
    id: '2',
    titulo: 'Celeste',
    genero: 'Plataformas',
    plataforma: 'PC, Switch, PlayStation, Xbox',
    anio: 2018,
    desarrollador: 'Maddy Makes Games',
    puntaje: 4.7,
    descripcion: 'Escala una montaña con saltos precisos y una historia sobre la ansiedad y la superación.',
    resenas: [
      { id: 'r3', usuario: 'pablo_ch', puntaje: 5, texto: 'Controles perfectos. Morí cientos de veces y nunca me frustré.' },
      { id: 'r4', usuario: 'vale.m', puntaje: 5, texto: 'La banda sonora acompaña cada capítulo de una forma preciosa.' },
    ],
  },
  {
    id: '3',
    titulo: 'Hades',
    genero: 'Roguelike',
    plataforma: 'PC, Switch, PlayStation, Xbox',
    anio: 2020,
    desarrollador: 'Supergiant Games',
    puntaje: 4.9,
    descripcion: 'Escapa del inframundo con un combate rápido y una historia que avanza con cada intento.',
    resenas: [
      { id: 'r5', usuario: 'jose_r', puntaje: 5, texto: 'Cada intento fallido igual te cuenta algo nuevo de la historia.' },
      { id: 'r6', usuario: 'fran.k', puntaje: 5, texto: 'El mejor roguelike que he jugado, y lo digo en serio.' },
    ],
  },
  {
    id: '4',
    titulo: 'Stardew Valley',
    genero: 'Simulación',
    plataforma: 'PC, consolas y móviles',
    anio: 2016,
    desarrollador: 'ConcernedApe',
    puntaje: 4.6,
    descripcion: 'Hereda una granja, cultiva, pesca y conoce a los vecinos del pueblo a tu ritmo.',
    resenas: [
      { id: 'r7', usuario: 'dani_s', puntaje: 5, texto: 'Perfecto para relajarse después de clases.' },
      { id: 'r8', usuario: 'lucia.t', puntaje: 4, texto: 'Engancha mucho, pero el inicio es lento.' },
    ],
  },
];