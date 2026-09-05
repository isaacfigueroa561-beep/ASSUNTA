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

// English display labels for the category keys — the site is English-only,
// so never render `recipe.category` directly.
export const categoryLabels: Record<Recipe['category'], string> = {
  pasta: 'Pasta',
  secondi: 'Mains',
};

// NOTE: "Creamy Shrimp Alfredo" below is a drafted recipe written to match the
// client-supplied hero photo (shrimp + pasta + jar), not official copy from the
// client's agency. Swap in their official ingredients/steps if/when they arrive.
export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Creamy Shrimp Alfredo",
    slug: "creamy-shrimp-alfredo",
    description: "Seared shrimp and ruffled pasta tossed in Assunta's Creamy Alfredo, brightened with lemon and parsley.",
    image: "/shrimp-alfredo-hero.jpg",
    images: [
      "/shrimp-alfredo-hero-thumb.jpg",
    ],
    category: "secondi",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 4,
    featured: true,
    ingredients: [
      "12 oz pappardelle or other wide ribbon pasta",
      "1 jar (22 oz) Assunta's Creamy Alfredo, warmed",
      "1 pound large shrimp, peeled and deveined, tails on",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "1/2 teaspoon paprika",
      "Sea salt and freshly ground black pepper",
      "Fresh parsley, chopped, for garnish",
      "Lemon wedges, for serving",
    ],
    steps: [
      "Cook the pasta in a large pot of salted boiling water until al dente, then drain.",
      "While the pasta cooks, pat the shrimp dry and season with the paprika, salt, and pepper. Heat the olive oil in a large skillet over medium-high heat and add the shrimp in a single layer.",
      "Sear the shrimp for about 2 minutes per side, until pink and lightly charred at the edges. Add the garlic in the last 30 seconds and cook until fragrant, then transfer the shrimp to a plate.",
      "Reduce the heat to low and pour Assunta's Creamy Alfredo into the same skillet, stirring to pick up any browned bits. Warm gently, never letting it come to a hard boil.",
      "Add the drained pasta to the skillet and toss until every piece is coated. Return the shrimp to the pan and toss once more to combine.",
      "Serve right away, finished with a scatter of parsley and lemon wedges for squeezing over the top.",
    ],
  },
  {
    id: "2",
    title: "Classic Fettuccine Alfredo",
    slug: "fettuccine-alfredo",
    description: "Hot pasta and warm Assunta's Creamy Alfredo, tossed together in one pan. The quickest way to taste the sauce.",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800&h=450&fit=crop",
    ],
    category: "pasta",
    prepTime: "20 min",
    cookTime: "5 min",
    servings: 6,
    featured: true,
    ingredients: [
      "1 package (12 oz) fettuccine, cooked and drained",
      "1 jar (22 oz) Assunta's Creamy Alfredo, warmed",
      "Freshly ground black pepper, to taste",
      "Fresh parsley, chopped, for garnish",
      "Optional: 1 package frozen mixed vegetables, thawed and warmed, for a primavera twist",
      "Optional: 2 cups diced cooked chicken",
    ],
    steps: [
      "Cook the fettuccine in a large pot of salted boiling water until al dente, then drain well.",
      "While the pasta cooks, warm Assunta's Creamy Alfredo gently in a saucepan over low heat, stirring occasionally so it heats evenly without breaking.",
      "Add the hot, drained fettuccine directly to the warm sauce and toss thoroughly until every strand is coated.",
      "Finish with a generous crack of black pepper and a scatter of fresh parsley. For a heartier plate, stir in the warmed vegetables for primavera, or the diced cooked chicken.",
      "Serve right away, while the sauce is at its silkiest.",
    ],
  },
  {
    id: "3",
    title: "Alfredo Florentine Lasagna",
    slug: "alfredo-florentine-lasagna",
    description: "Layers of tender noodles, spinach, ricotta, and Assunta's Creamy Alfredo, baked until bubbling and golden.",
    image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1619895092538-128341789043?w=800&h=450&fit=crop",
    ],
    category: "secondi",
    prepTime: "20 min",
    cookTime: "50 min",
    servings: 8,
    featured: true,
    ingredients: [
      "1 container (15 oz) ricotta cheese",
      "1 egg",
      "1 box (10 oz) frozen chopped spinach, thawed and squeezed dry",
      "1/2 teaspoon salt",
      "1/4 teaspoon ground black pepper",
      "1/8 teaspoon ground nutmeg (optional)",
      "1 jar (22 oz) Assunta's Creamy Alfredo",
      "12 lasagna noodles, cooked and drained",
      "1 pound fresh mozzarella cheese, thinly sliced",
    ],
    steps: [
      "Heat the oven to 350°F.",
      "In a bowl, blend the ricotta, egg, spinach, salt, pepper, and nutmeg until combined. Spread a thin layer of Alfredo across the bottom of a 13x9-inch baking dish.",
      "Layer 4 noodles over the sauce, followed by half the ricotta mixture, a layer of Alfredo, and a third of the mozzarella. Repeat the layers once more, then finish with a final layer of noodles and Alfredo.",
      "Cover the dish with foil and bake for 40 minutes. Uncover, scatter the remaining mozzarella on top, and bake 10 minutes more until melted and bubbling.",
      "Let the lasagna rest for 10 minutes before slicing and serving. This keeps the layers intact.",
    ],
  },
];
