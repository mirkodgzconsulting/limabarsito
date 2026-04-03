export type MenuCategoryId =
  | "menu"
  | "dessert"
  | "bar"
  | "colazione"
  | "condividere";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  img: string;
  alt: string;
};

export const MENU_BY_CATEGORY: Record<MenuCategoryId, MenuItem[]> = {
  menu: [
    {
      name: "Tagliatelle al ragù",
      description: "Pasta fresca, ragù di manzo lunga cottura, Parmigiano 36 mesi.",
      price: "€16",
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
      alt: "Tagliatelle al ragù",
    },
    {
      name: "Risotto allo zafferano",
      description: "Carnaroli, midollo, zafferano di Navelli, burro montato.",
      price: "€18",
      img: "https://images.unsplash.com/photo-1476124369491-e7addf5db179?w=600&q=80",
      alt: "Risotto giallo",
    },
    {
      name: "Branzino in crosta",
      description: "Erbe mediterranee, patate novelle, salsa al limone.",
      price: "€24",
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
      alt: "Pesce al forno",
    },
  ],
  dessert: [
    {
      name: "Tiramisù della casa",
      description: "Mascarpone, caffè, savoiardi, cacao amaro.",
      price: "€8",
      img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
      alt: "Tiramisù",
    },
    {
      name: "Panna cotta ai frutti rossi",
      description: "Vaniglia bourbon, coulis di frutti di bosco.",
      price: "€7",
      img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
      alt: "Panna cotta",
    },
    {
      name: "Sorbetto al limone",
      description: "Limoni di Amalfi, basilico fresco.",
      price: "€6",
      img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&q=80",
      alt: "Sorbetto",
    },
  ],
  bar: [
    {
      name: "Negroni sbagliato",
      description: "Bitter, vermouth, spumante metodo classico.",
      price: "€10",
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
      alt: "Cocktail arancione",
    },
    {
      name: "Limabar Spritz",
      description: "Select, rabarbaro, prosecco, soda, arancia bruciata.",
      price: "€9",
      img: "https://images.unsplash.com/photo-1527761933662-4b7e979e8d3b?w=600&q=80",
      alt: "Spritz",
    },
    {
      name: "Amaro del giorno",
      description: "Rotazione di piccoli produttori italiani.",
      price: "€6",
      img: "https://images.unsplash.com/photo-1514362540147-233f32a03ce5?w=600&q=80",
      alt: "Drink al bancone",
    },
  ],
  colazione: [
    {
      name: "Cornetto caldo",
      description: "Burro francese, marmellata fatta in casa.",
      price: "€2,50",
      img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
      alt: "Cornetto",
    },
    {
      name: "Cappuccino",
      description: "Miscela tostata leggera, latte bio microschiumato.",
      price: "€3,50",
      img: "https://images.unsplash.com/photo-1572442388796-9c4b20a2d7b3?w=600&q=80",
      alt: "Cappuccino",
    },
    {
      name: "Avocado toast",
      description: "Pane ai cereali, avocado, semi, lime.",
      price: "€9",
      img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80",
      alt: "Avocado toast",
    },
  ],
  condividere: [
    {
      name: "Tagliere di salumi",
      description: "Prosciutto, salame, coppa, gnocco fritto.",
      price: "€22",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
      alt: "Tagliere salumi",
    },
    {
      name: "Fritto misto di mare",
      description: "Calamari, gamberi, verdure, maionese al limone.",
      price: "€26",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
      alt: "Fritto misto",
    },
    {
      name: "Bruschette trio",
      description: "Pomodoro, olive e finocchiona, crema di ceci.",
      price: "€14",
      img: "https://images.unsplash.com/photo-1506282250354-b09a877d94bc?w=600&q=80",
      alt: "Bruschette",
    },
  ],
};

export const MENU_TABS: { id: MenuCategoryId; label: string }[] = [
  { id: "menu", label: "Menu" },
  { id: "dessert", label: "Dessert" },
  { id: "bar", label: "Il Bar" },
  { id: "colazione", label: "Colazione" },
  { id: "condividere", label: "Da condividere" },
];
