export interface Game {
  id: string;
  title: string;
  ESRB: string;
  price: number;
  originalPrice?: number;
  genre: string;
  rating: number;
  imageUrl: string;
  description: string;
  tags: string[];
}

export const games: Game[] = [
  {
    id: "1",
    title: "Mystic Realms",
    ESRB: 'E',
    price: 49.99,
    originalPrice: 59.99,
    genre: "Fantasy RPG",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1562576650-27130b06c0ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZSUyMGNvdmVyJTIwYXJ0fGVufDF8fHx8MTc3NDQ3MDk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Embark on an epic journey through mystical lands filled with ancient magic and legendary creatures.",
    tags: ["RPG", "Fantasy", "Open World", "Multiplayer"]
  },
  {
    id: "2",
    title: "Galactic Frontier",
    ESRB: 'E',
    price: 39.99,
    genre: "Sci-Fi Adventure",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1765881736141-bda98391c3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBnYW1lJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NDQ3MDk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Explore the far reaches of space in this thrilling sci-fi adventure with stunning visuals.",
    tags: ["Sci-Fi", "Exploration", "Story-Rich", "Single Player"]
  },
  {
    id: "3",
    title: "Street Racer X",
    ESRB: 'E10',
    price: 29.99,
    originalPrice: 39.99,
    genre: "Racing",
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1723360480597-d21deccaf3d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBnYW1lfGVufDF8fHx8MTc3NDM5MzkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Feel the adrenaline rush in intense street racing action with customizable vehicles.",
    tags: ["Racing", "Action", "Multiplayer", "Competitive"]
  },
  {
    id: "4",
    title: "The Haunting",
    ESRB: 'M',
    price: 24.99,
    genre: "Horror",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1551536637-f5f1984f1398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBkYXJrJTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NzQzOTg3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Experience pure terror in this atmospheric horror game that will keep you on edge.",
    tags: ["Horror", "Atmospheric", "Psychological", "Single Player"]
  },
  {
    id: "5",
    title: "Mountain Explorer",
    ESRB: 'E10',
    price: 34.99,
    genre: "Adventure",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQ0NzA3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Scale treacherous peaks and discover hidden secrets in this breathtaking adventure game.",
    tags: ["Adventure", "Exploration", "Survival", "Beautiful"]
  },
  {
    id: "6",
    title: "Neon Runners",
    ESRB: 'T',
    price: 44.99,
    originalPrice: 54.99,
    genre: "Cyberpunk Action",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1641650265007-b2db704cd9f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwY2l0eXxlbnwxfHx8fDE3NzQzNjkwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Navigate a dystopian future in this fast-paced cyberpunk action game with stunning neon aesthetics.",
    tags: ["Cyberpunk", "Action", "Fast-Paced", "Story-Rich"]
  }
];
