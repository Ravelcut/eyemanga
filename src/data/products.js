export const categories = ['all', 'manga', 'apparel', 'accessories'];

export const products = [
  {
    id: 1,
    title: 'Vol. 1: The Beginning',
    price: 12.99,
    category: 'manga',
    image: 'https://picsum.photos/seed/manga1/400/600',
    description: 'The story that started it all. Follow our hero as they discover a hidden world beyond the veil of reality. Packed with action, mystery, and stunning artwork.',
    spanRow: 2,
    spanCol: 2,
    featured: true,
  },
  {
    id: 2,
    title: 'Vol. 2: Shadows',
    price: 12.99,
    category: 'manga',
    image: 'https://picsum.photos/seed/manga2/400/600',
    description: 'Darkness descends as new enemies emerge from the shadows. Alliances are tested and secrets are revealed in this gripping second volume.',
    spanRow: 1,
    spanCol: 1,
    featured: false,
  },
  {
    id: 3,
    title: 'Vol. 3: Light',
    price: 12.99,
    category: 'manga',
    image: 'https://picsum.photos/seed/manga3/400/600',
    description: 'A ray of hope shines through the darkness. New powers awaken as our heroes prepare for the ultimate confrontation.',
    spanRow: 1,
    spanCol: 2,
    featured: true,
  },
  {
    id: 4,
    title: 'Vol. 4: Awakening',
    price: 14.99,
    category: 'manga',
    image: 'https://picsum.photos/seed/manga4/400/600',
    description: 'The truth behind the Eye is finally revealed. Nothing will ever be the same after this game-changing volume.',
    spanRow: 2,
    spanCol: 1,
    featured: true,
  },
  {
    id: 5,
    title: 'Vol. 5: Convergence',
    price: 14.99,
    category: 'manga',
    image: 'https://picsum.photos/seed/manga5/400/600',
    description: 'Worlds collide as every storyline converges into one explosive narrative. The penultimate chapter before the grand finale.',
    spanRow: 1,
    spanCol: 1,
    featured: false,
  },
  {
    id: 6,
    title: 'Vol. 6: Eclipse',
    price: 14.99,
    category: 'manga',
    image: 'https://picsum.photos/seed/manga6/400/600',
    description: 'The final chapter. Everything has been building to this moment. Witness the breathtaking conclusion to the Eye Manga saga.',
    spanRow: 1,
    spanCol: 1,
    featured: false,
  },
  {
    id: 7,
    title: 'Eye Manga Black Tee',
    price: 24.99,
    category: 'apparel',
    image: 'https://picsum.photos/seed/tee1/400/500',
    description: 'Premium cotton t-shirt featuring the iconic Eye Manga logo. Comfortable fit with bold manga-inspired graphic print.',
    spanRow: 1,
    spanCol: 1,
    featured: true,
  },
  {
    id: 8,
    title: 'Manga Hoodie — Shadow Edition',
    price: 49.99,
    category: 'apparel',
    image: 'https://picsum.photos/seed/hoodie1/400/500',
    description: 'Heavyweight hoodie with embroidered Eye Manga design. Oversized fit, ribbed cuffs, and kangaroo pocket. Limited edition Shadow colorway.',
    spanRow: 1,
    spanCol: 1,
    featured: false,
  },
  {
    id: 9,
    title: 'Eye Logo Cap',
    price: 19.99,
    category: 'apparel',
    image: 'https://picsum.photos/seed/cap1/400/400',
    description: 'Structured snapback cap with embroidered Eye logo on the front. Adjustable strap, one size fits all.',
    spanRow: 1,
    spanCol: 1,
    featured: false,
  },
  {
    id: 10,
    title: 'Poster Collection — Vol. 1-3',
    price: 18.99,
    category: 'accessories',
    image: 'https://picsum.photos/seed/poster1/400/600',
    description: 'Set of three 18"x24" premium art prints featuring cover art from Volumes 1 through 3. Printed on heavyweight matte paper.',
    spanRow: 1,
    spanCol: 1,
    featured: false,
  },
  {
    id: 11,
    title: 'Sticker Pack — Characters',
    price: 8.99,
    category: 'accessories',
    image: 'https://picsum.photos/seed/sticker1/400/400',
    description: 'Pack of 12 die-cut vinyl stickers featuring all major characters from the Eye Manga series. Waterproof and scratch-resistant.',
    spanRow: 1,
    spanCol: 1,
    featured: false,
  },
  {
    id: 12,
    title: 'Eye Keychain — Metal',
    price: 11.99,
    category: 'accessories',
    image: 'https://picsum.photos/seed/keychain1/400/400',
    description: 'Solid zinc alloy keychain with the Eye Manga symbol. Polished black finish with enamel color fill. Comes with split ring attachment.',
    spanRow: 1,
    spanCol: 1,
    featured: false,
  },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductById = (id) => products.find(p => p.id === Number(id));

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};

export const searchProducts = (query) => {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
};
