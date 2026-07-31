// ============================================================
// Assunta Recipe Data
// ============================================================
// Add or edit recipes here. Each recipe must have a unique slug.
// Images should be 16:9 ratio from Unsplash or similar.
// Categories: "pasta" | "sauce" | "soup" | "secondi" | "dolci"
// ============================================================

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;         // 1-2 sentence teaser
  image: string;               // primary Unsplash URL (also first in images[])
  images: string[];            // 2-3 images for thumbnail crossfade animation
  category: "pasta" | "sauce" | "soup" | "secondi" | "dolci";
  prepTime: string;            // e.g. "20 min"
  cookTime: string;            // e.g. "3 hrs"
  servings: number;
  ingredients: string[];       // each item is a full ingredient string e.g. "2 tbsp olive oil"
  steps: string[];             // each item is a full step paragraph
  featured?: boolean;          // if true, shown on homepage
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Assunta's Original Ragù Bolognese",
    slug: "ragu-bolognese",
    description: "The legendary slow-simmered meat sauce from Bologna that started it all. Three hours of patience, a lifetime of flavor.",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=450&fit=crop",
    ],
    category: "sauce",
    prepTime: "20 min",
    cookTime: "3 hrs",
    servings: 8,
    featured: true,
    ingredients: [
      "3 tablespoons extra virgin olive oil",
      "2 tablespoons unsalted butter",
      "1 medium yellow onion, finely diced",
      "2 medium carrots, finely diced",
      "2 celery stalks, finely diced",
      "500g ground beef (preferably chuck)",
      "250g ground pork",
      "150ml dry white wine",
      "800g San Marzano tomatoes, crushed by hand",
      "2 tablespoons tomato paste",
      "500ml whole milk",
      "1 bay leaf",
      "Freshly grated nutmeg, to taste",
      "Sea salt and freshly ground black pepper",
    ],
    steps: [
      "In a large, heavy-bottomed pot, heat the olive oil and butter over medium heat until the butter melts and begins to foam. This combination is the foundation of authentic ragù: the butter adds richness while the oil prevents burning.",
      "Add the onion, carrots, and celery (the soffritto). Cook slowly, stirring occasionally, for 15-20 minutes until the vegetables are completely soft and sweet. Assunta always said: 'If you rush the soffritto, you rush the soul of the sauce.'",
      "Increase heat to medium-high and add the ground beef and pork. Break up the meat with a wooden spoon and cook until no pink remains and the meat has begun to brown, about 10 minutes. The meat should sizzle and caramelize at the edges.",
      "Pour in the wine and let it bubble vigorously, scraping up any browned bits from the bottom of the pot. Cook until the wine has almost completely evaporated, about 5 minutes. Add the crushed tomatoes, tomato paste, and bay leaf. Season generously with salt, pepper, and a few gratings of fresh nutmeg.",
      "Bring to a gentle simmer, then reduce heat to the lowest setting. Partially cover the pot and let the ragù cook for 2 hours, stirring every 20-30 minutes. The sauce should barely bubble. Assunta called this 'il sussurro,' the whisper.",
      "After 2 hours, add the milk and stir well. Continue cooking uncovered for another 45 minutes to 1 hour, until the sauce is thick, rich, and the fat glistens on the surface. Taste and adjust seasoning. Remove the bay leaf. The ragù can be used immediately or refrigerated for up to 5 days. It tastes even better the next day.",
    ],
  },
  {
    id: "2",
    title: "Tagliatelle al Ragù",
    slug: "tagliatelle-al-ragu",
    description: "Fresh egg tagliatelle ribbons cradling Assunta's ragù, the way Bologna has been eating it for centuries.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&h=450&fit=crop",
    ],
    category: "pasta",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: 6,
    featured: true,
    ingredients: [
      "500g fresh egg tagliatelle (or dried if unavailable)",
      "2 cups Assunta's Ragù Bolognese, warmed",
      "2 tablespoons unsalted butter",
      "1/2 cup reserved pasta cooking water",
      "1 cup Parmigiano-Reggiano, freshly grated",
      "Sea salt for pasta water",
      "Extra Parmigiano-Reggiano for serving",
    ],
    steps: [
      "Bring a large pot of water to a rolling boil. Add enough salt so the water tastes like the sea. This is your only chance to season the pasta itself. Assunta used to say, 'Pasta cooked in bland water stays bland forever.'",
      "While the water heats, gently warm the ragù in a large, wide skillet or sauté pan over low heat. You want it hot but not bubbling. Add the butter to the ragù and let it melt into the sauce.",
      "Drop the tagliatelle into the boiling water. Fresh pasta cooks quickly, usually 2-3 minutes. Dried tagliatelle will take 8-10 minutes. Just before draining, scoop out 1 cup of the starchy pasta cooking water and set aside.",
      "Drain the tagliatelle when it's al dente (it should still have a slight bite) and immediately transfer it to the skillet with the ragù. Do not rinse the pasta; the surface starch helps the sauce cling.",
      "Over medium heat, toss the pasta and ragù together using tongs or two wooden spoons, adding splashes of pasta water as needed to create a silky, cohesive sauce that coats every ribbon. Add the grated Parmigiano and toss again until it melts into the sauce.",
      "Divide among warm bowls and serve immediately with extra Parmigiano on the side. In Bologna, they say the perfect tagliatelle al ragù should be eaten with a fork only. No spoon needed.",
    ],
  },
  {
    id: "3",
    title: "Ribollita Toscana",
    slug: "ribollita-toscana",
    description: "The twice-cooked Tuscan bread soup that transforms humble ingredients into something extraordinary. Cucina povera at its finest.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&h=450&fit=crop",
    ],
    category: "soup",
    prepTime: "30 min",
    cookTime: "1.5 hrs",
    servings: 8,
    featured: true,
    ingredients: [
      "1/4 cup extra virgin olive oil, plus more for drizzling",
      "1 large yellow onion, diced",
      "3 carrots, diced",
      "3 celery stalks, diced",
      "4 garlic cloves, minced",
      "1 bunch Tuscan kale (cavolo nero), stems removed and leaves chopped",
      "1 small Savoy cabbage, cored and chopped",
      "400g canned cannellini beans, drained (reserve liquid)",
      "400g canned borlotti beans, drained",
      "800g canned San Marzano tomatoes, crushed",
      "6 cups vegetable stock",
      "4-6 thick slices day-old Tuscan bread, torn into chunks",
      "1 Parmigiano-Reggiano rind (optional but recommended)",
      "Sea salt and freshly ground black pepper",
      "Red pepper flakes (optional)",
    ],
    steps: [
      "Heat the olive oil in a large, heavy pot over medium heat. Add the onion, carrots, and celery and cook, stirring occasionally, until softened and sweet, about 15 minutes. Add the garlic and cook until fragrant, about 1 minute.",
      "Add the kale and cabbage in batches, stirring and letting each addition wilt before adding more. The greens will reduce significantly. Season with salt, pepper, and a pinch of red pepper flakes if desired.",
      "Add the cannellini and borlotti beans (including the reserved cannellini liquid), crushed tomatoes, and vegetable stock. Drop in the Parmigiano rind if using. Bring to a boil, then reduce heat and simmer uncovered for 45 minutes, stirring occasionally.",
      "Using a potato masher or the back of a wooden spoon, roughly mash some of the beans against the side of the pot to thicken the soup. The texture should be hearty and chunky, not smooth.",
      "Stir in the torn bread and cook for another 15-20 minutes, until the bread has absorbed the liquid and the soup has become thick and porridge-like. Remove the Parmigiano rind. At this point, the soup can be cooled and refrigerated overnight. This is traditional and improves the flavor.",
      "The next day (or if serving immediately), reheat the ribollita over low heat, adding a splash of water or stock if it's too thick. The soup should be dense enough to eat with a fork. Serve in shallow bowls with a generous drizzle of your best olive oil and a crack of black pepper.",
    ],
  },
  {
    id: "4",
    title: "Pollo alla Cacciatora",
    slug: "pollo-alla-cacciatora",
    description: "Hunter's chicken braised in tomatoes, white wine, and aromatics. Rustic, hearty, and deeply satisfying.",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&h=450&fit=crop",
    ],
    category: "secondi",
    prepTime: "20 min",
    cookTime: "1 hr",
    servings: 6,
    ingredients: [
      "1.5 kg chicken pieces (thighs and drumsticks preferred), bone-in and skin-on",
      "3 tablespoons extra virgin olive oil",
      "1 medium yellow onion, sliced",
      "3 garlic cloves, smashed",
      "150ml dry white wine",
      "400g canned San Marzano tomatoes, crushed",
      "1/2 cup Kalamata olives, pitted",
      "2 tablespoons capers, drained",
      "2 sprigs fresh rosemary",
      "4 fresh sage leaves",
      "1 bay leaf",
      "Sea salt and freshly ground black pepper",
      "Fresh parsley, chopped, for garnish",
    ],
    steps: [
      "Pat the chicken pieces completely dry with paper towels and season generously with salt and pepper on all sides. Wet chicken will not brown properly.",
      "Heat the olive oil in a large, deep skillet or Dutch oven over medium-high heat. Working in batches to avoid crowding, brown the chicken pieces skin-side down first, about 5-6 minutes per side, until deeply golden. Transfer to a plate and set aside.",
      "Pour off all but 2 tablespoons of fat from the pan. Reduce heat to medium, add the onion, and cook until softened and lightly golden, about 8 minutes. Add the garlic and cook for 1 minute until fragrant.",
      "Pour in the wine and scrape up all the browned bits from the bottom of the pan. Let the wine bubble and reduce by half, about 3 minutes. Add the crushed tomatoes, olives, capers, rosemary, sage, and bay leaf. Stir to combine.",
      "Return the chicken pieces to the pan, nestling them into the sauce. The chicken should be partially submerged but not completely covered. Bring to a gentle simmer, then reduce heat to low, cover, and cook for 35-40 minutes, turning the chicken once halfway through.",
      "Remove the lid and continue cooking for another 10-15 minutes to let the sauce thicken and the chicken skin crisp slightly. Remove the herb sprigs and bay leaf. Taste the sauce and adjust seasoning. Serve the chicken with plenty of sauce, garnished with fresh parsley. Excellent with crusty bread or creamy polenta.",
    ],
  },
  {
    id: "5",
    title: "Tiramisù della Nonna",
    slug: "tiramisu-della-nonna",
    description: "Grandma's tiramisù: espresso-soaked ladyfingers layered with silky mascarpone cream. No baking required, just patience.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1551024601-bec78de5b69e?w=800&h=450&fit=crop",
    ],
    category: "dolci",
    prepTime: "30 min",
    cookTime: "No bake (chill 4 hrs)",
    servings: 8,
    ingredients: [
      "6 large egg yolks",
      "3/4 cup granulated sugar",
      "500g mascarpone cheese, at room temperature",
      "1 1/2 cups strong espresso or coffee, cooled to room temperature",
      "3 tablespoons dark rum or Marsala wine (optional)",
      "300g Savoiardi (Italian ladyfinger cookies)",
      "Unsweetened cocoa powder, for dusting",
      "Dark chocolate shavings, for garnish (optional)",
    ],
    steps: [
      "In a large heatproof bowl, whisk together the egg yolks and sugar. Set the bowl over a pot of barely simmering water (do not let the bottom of the bowl touch the water). Whisk constantly until the mixture is pale, thick, and reaches 160°F on a thermometer, about 5-8 minutes. This pasteurizes the eggs.",
      "Remove from heat and let cool for 5 minutes, whisking occasionally. Add the mascarpone and whisk until completely smooth and creamy. If you see any lumps, keep whisking until the mixture is silky and spreadable.",
      "In a shallow dish, combine the cooled espresso with the rum or Marsala if using. One at a time, quickly dip each ladyfinger into the coffee mixture for just 1-2 seconds per side. The cookies should be moistened but not soggy; they will continue to absorb liquid as the tiramisù sits.",
      "Arrange a layer of soaked ladyfingers in the bottom of a 9x13 inch dish or individual serving glasses. Spread half of the mascarpone cream over the ladyfingers, smoothing it into an even layer.",
      "Repeat with another layer of coffee-dipped ladyfingers and the remaining mascarpone cream. Cover with plastic wrap and refrigerate for at least 4 hours, or preferably overnight. The tiramisù must be completely chilled for the flavors to meld and the texture to set.",
      "Just before serving, dust generously with cocoa powder using a fine-mesh sieve. Add dark chocolate shavings if desired. Assunta always said to dust the cocoa at the last moment so it stays powdery and doesn't absorb moisture. Serve chilled.",
    ],
  },
];
