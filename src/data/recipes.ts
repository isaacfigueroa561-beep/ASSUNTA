// ============================================================
// Assunta Recipe Data
// ============================================================
// Add or edit recipes here. Each recipe must have a unique slug.
// Images should be 16:9 ratio from Unsplash or similar.
// Categories: "pasta" | "secondi"
// ============================================================

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;         // 1-2 sentence teaser
  image: string;               // primary Unsplash URL (also first in images[])
  images: string[];            // 1-3 images for thumbnail crossfade animation
  category: "pasta" | "secondi";
  prepTime: string;            // e.g. "20 min"
  cookTime: string;            // e.g. "3 hrs"
  servings: number;
  ingredients: string[];       // each item is a full ingredient string e.g. "2 tbsp olive oil"
  steps: string[];             // each item is a full step paragraph
  featured?: boolean;          // if true, shown on homepage
}

export const recipes: Recipe[] = [
  {
    id: "2",
    title: "Classic Fettuccine Alfredo",
    slug: "fettuccine-alfredo",
    description: "Wide ribbons of fresh egg pasta enrobed in velvety Alfredo. The definitive way to experience the sauce.",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800&h=450&fit=crop",
    ],
    category: "pasta",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    featured: true,
    ingredients: [
      "500g fresh egg fettuccine (or dried if unavailable)",
      "2 cups Assunta's Creamy Alfredo, warmed",
      "2 tablespoons unsalted butter",
      "1/2 cup reserved pasta cooking water",
      "1/2 cup Parmigiano Reggiano, freshly grated, plus more for serving",
      "Sea salt for pasta water",
      "Freshly ground black pepper and chopped parsley, to finish",
    ],
    steps: [
      "Bring a large pot of water to a rolling boil and salt it generously — it should taste like the sea. This is your only chance to season the pasta itself.",
      "While the water heats, warm the Alfredo sauce gently in a large, wide skillet over low heat. Add the butter and let it melt into the sauce. It should be hot but never bubbling.",
      "Drop the fettuccine into the boiling water. Fresh pasta cooks in 2-3 minutes; dried takes 8-10. Just before draining, scoop out a cup of the starchy cooking water.",
      "Drain the fettuccine al dente and transfer it directly into the skillet with the sauce. Do not rinse — the surface starch helps the Alfredo cling to every ribbon.",
      "Over the lowest heat, toss the pasta and sauce together with tongs, adding splashes of pasta water until the sauce is glossy and coats every strand. Add the grated Parmigiano and toss once more.",
      "Serve immediately in warm bowls with extra Parmigiano, black pepper, and a scatter of parsley. Alfredo waits for no one — it is at its silkiest the moment it leaves the pan.",
    ],
  },
  {
    id: "3",
    title: "Baked Chicken Alfredo",
    slug: "baked-chicken-alfredo",
    description: "Tender chicken and penne baked beneath a rich layer of Alfredo and mozzarella until golden and bubbling.",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&h=450&fit=crop",
    ],
    category: "secondi",
    prepTime: "20 min",
    cookTime: "40 min",
    servings: 6,
    featured: true,
    ingredients: [
      "500g penne rigate",
      "3 cups Assunta's Creamy Alfredo",
      "2 large chicken breasts, cut into bite-size pieces",
      "2 tablespoons olive oil",
      "1 teaspoon Italian seasoning",
      "200g mozzarella, shredded",
      "1/2 cup Parmigiano Reggiano, grated",
      "Sea salt and freshly ground black pepper",
      "Fresh basil or parsley, for garnish",
    ],
    steps: [
      "Preheat the oven to 190°C (375°F). Cook the penne in well-salted boiling water until two minutes shy of al dente — it will finish cooking in the oven. Drain and set aside.",
      "Season the chicken with salt, pepper, and Italian seasoning. Heat the olive oil in a large skillet over medium-high heat and sauté the chicken until golden on the outside and just cooked through, 6-8 minutes.",
      "In a large bowl, combine the penne, chicken, and Alfredo sauce, tossing until everything is evenly coated. If the mixture seems tight, loosen it with a splash of cream or pasta water — it will thicken as it bakes.",
      "Transfer to a buttered baking dish. Scatter the mozzarella and Parmigiano evenly over the top.",
      "Bake for 20-25 minutes, until the cheese is melted and the edges are golden and bubbling. For a deeper crust, finish under the broiler for the final 2 minutes.",
      "Rest for 5 minutes before serving, then garnish with fresh basil or parsley. The rest allows the sauce to settle back into the pasta.",
    ],
  },
  {
    id: "4",
    title: "Mushroom Alfredo Fettuccine",
    slug: "mushroom-alfredo-fettuccine",
    description: "Deeply browned cremini mushrooms folded into silky fettuccine Alfredo — an easy vegetarian dinner ready in under 30 minutes.",
    image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=800&h=450&fit=crop",
    ],
    category: "pasta",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    featured: true,
    ingredients: [
      "500g fresh fettuccine (or dried if unavailable)",
      "2 cups Assunta's Creamy Alfredo",
      "2 tablespoons olive oil",
      "300g cremini mushrooms, sliced",
      "2 cloves garlic, minced",
      "1/2 cup Parmigiano Reggiano, freshly grated, plus more for serving",
      "1/2 cup reserved pasta cooking water",
      "Sea salt and freshly ground black pepper",
      "Fresh parsley, chopped, for garnish",
    ],
    steps: [
      "Bring a large pot of well-salted water to a boil for the fettuccine.",
      "Heat the olive oil in a wide skillet over medium-high heat. Add the mushrooms in a single layer and let them cook undisturbed for 2-3 minutes until golden on one side, then stir and continue cooking until deeply browned all over, about 5 minutes total. Season with salt and pepper.",
      "Add the garlic and cook for 30 seconds until fragrant. Reduce the heat to low and pour in Assunta's Creamy Alfredo, stirring to combine with the mushrooms. Let it warm gently — never let it come to a hard boil.",
      "Meanwhile, cook the fettuccine until al dente. Reserve a cup of the starchy pasta water before draining.",
      "Add the drained fettuccine directly to the skillet with the mushrooms and sauce. Toss over low heat, adding splashes of pasta water until the sauce turns glossy and coats every strand. Stir in the Parmigiano.",
      "Serve immediately with extra Parmigiano, black pepper, and a scatter of parsley.",
    ],
  },
];
