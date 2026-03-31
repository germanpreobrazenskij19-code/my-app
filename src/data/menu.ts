export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "coffee" | "tea" | "desserts" | "breakfast";
  image: string;
}

export const categories = [
  { key: "coffee" as const, label: "Кофе" },
  { key: "tea" as const, label: "Чай" },
  { key: "desserts" as const, label: "Десерты" },
  { key: "breakfast" as const, label: "Завтраки" },
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Эспрессо",
    description: "Классический крепкий кофе из зёрен арабики",
    price: 180,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Капучино",
    description: "Нежная молочная пенка и насыщенный вкус",
    price: 280,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Латте",
    description: "Мягкий кофе с большим количеством молока",
    price: 300,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Раф",
    description: "Сливочный кофе с ванильным сахаром",
    price: 320,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Флэт Уайт",
    description: "Двойной эспрессо с бархатистым молоком",
    price: 290,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Матча Латте",
    description: "Японский зелёный чай матча с молоком",
    price: 340,
    category: "tea",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Облепиховый чай",
    description: "Горячий чай с облепихой, мёдом и имбирём",
    price: 260,
    category: "tea",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Чай Эрл Грей",
    description: "Чёрный чай с бергамотом и лимоном",
    price: 200,
    category: "tea",
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Тирамису",
    description: "Классический итальянский десерт с маскарпоне",
    price: 380,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Чизкейк",
    description: "Нью-Йоркский чизкейк с ягодным соусом",
    price: 350,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Круассан",
    description: "Свежий масляный круассан из слоёного теста",
    price: 180,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Авокадо-тост",
    description: "Тост с авокадо, яйцом пашот и микрозеленью",
    price: 420,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
  },
  {
    id: 13,
    name: "Овсянка с ягодами",
    description: "Каша на миндальном молоке с сезонными ягодами",
    price: 320,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&h=300&fit=crop",
  },
  {
    id: 14,
    name: "Сырники",
    description: "Домашние сырники со сметаной и вареньем",
    price: 360,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop",
  },
];