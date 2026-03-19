export const categories = ['all', 'manga', 'apparel', 'accessories'];

export const products = [
  {
    id: 'chainsaw-man',
    title: 'Chainsaw Man',
    title_ka: 'ბენზოხერხა კაცი',
    category: 'manga',
    image: '/chainsaw-man/Chainsaw_Man_main.png',
    author: 'Tatsuki Fujimoto',
    author_ka: 'ტაცუკი ფუჯიმოტო',
    description: 'Denjis life of poverty is changed forever when he merges with his pet chainsaw dog, Pochita!',
    description_ka: 'დენჯის ღარიბული ცხოვრება სამუდამოდ იცვლება, როდესაც ის თავის ბენზოხერხა ძაღლს, პოჩიტას უერთდება!',
    spanRow: 2,
    spanCol: 1,
    featured: true,
    volumes: [
      { number: 1,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_01_-_English.webp' },
      { number: 2,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_02_-_English.webp' },
      { number: 3,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_03_-_English.webp' },
      { number: 4,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_04_-_English.webp' },
      { number: 5,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_05.webp' },
      { number: 6,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_06_-_English.webp' },
      { number: 7,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_07_-_English.webp' },
      { number: 8,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_08_-_English.webp' },
      { number: 9,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_09_-_English.webp' },
      { number: 10, price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_10_-_English.webp' },
      { number: 11, price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_11_-_English.webp' },
      { number: 12, price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_12_-_English.webp' },
      { number: 13, price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_13_-_English.webp' },
      { number: 14, price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_14_-_English.webp' },
      { number: 15, price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_15_-_English.webp' },
      { number: 16, price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_16_-_English.webp' },
      { number: 17, price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_17_-_English.webp' },
      { number: 18, price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_18_-_English.webp' },
      { number: 19, price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_19_-_English.webp' },
      { number: 20, price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_20_-_English.webp' },
      { number: 21, price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_21.webp' },
    ]
  },
  {
    id: 'nana',
    title: 'Nana',
    title_ka: 'ნანა',
    category: 'manga',
    image: '/nana/Nana-main.webp',
    author: 'Ai Yazawa',
    author_ka: 'აი იაზავა',
    description: 'Two girls with the same name but completely different lives move to Tokyo to pursue their dreams.',
    description_ka: 'ორი გოგონა ერთი და იგივე სახელით, მაგრამ სრულიად განსხვავებული ცხოვრებით, ტოკიოში ოცნებების ასასრულებლად გადადის.',
    spanRow: 1,
    spanCol: 1,
    featured: true,
    volumes: Array.from({ length: 21 }, (_, i) => ({ 
      number: i + 1, 
      price: 15.00,
      image: `/nana/Nana-vol-${i + 1}.webp`
    }))
  },
  {
    id: 'banana-fish',
    title: 'Banana Fish',
    title_ka: 'ბანანის თევზი',
    category: 'manga',
    image: '/banana-fish/Banana_Fish_main.webp',
    author: 'Yoshihiro Togashi',
    author_ka: 'იოშიჰირო ტოგაში',
    description: 'Nature made Ash Lynx beautiful; nurture made him a cold ruthless killer.',
    description_ka: 'ბუნებამ ეშ ლინქსი მშვენიერი გახადა; აღზრდამ კი - ცივსისხლიანი მკვლელი.',
    spanRow: 1,
    spanCol: 1,
    featured: true,
    volumes: [
      { number: 1,  price: 15.00, image: '/banana-fish/Banana_Fish_Volume_1_Cover.webp' },
      { number: 2,  price: 15.00, image: '/banana-fish/Banana_Fish_Volume_2_Cover.webp' },
      { number: 3,  price: 15.00, image: '/banana-fish/Banana_Fish_Volume_3_Cover.webp' },
      { number: 4,  price: 15.00, image: '/banana-fish/Banana_Fish_Volume_4_Cover.webp' },
      { number: 5,  price: 15.00, image: '/banana-fish/Banana_Fish_Volume_5_Cover.webp' },
      { number: 6,  price: 15.00, image: '/banana-fish/Banana_Fish_Volume_6_Cover.webp' },
      { number: 7,  price: 15.00, image: '/banana-fish/Banana_Fish_Volume_7_Cover.webp' },
      { number: 8,  price: 15.00, image: '/banana-fish/Banana_Fish_Volume_8_Cover.webp' },
      { number: 9,  price: 15.00, image: '/banana-fish/Banana_Fish_Volume_9_Cover.webp' },
      { number: 10, price: 15.00, image: '/banana-fish/Banana_Fish_Volume_10_Cover.webp' },
      { number: 11, price: 15.00, image: '/banana-fish/Banana_Fish_Volume_11_Cover.webp' },
      { number: 12, price: 15.00, image: '/banana-fish/Banana_Fish_Volume_12_Cover.webp' },
      { number: 13, price: 15.00, image: '/banana-fish/Banana_Fish_Volume_13_Cover.webp' },
      { number: 14, price: 15.00, image: '/banana-fish/Banana_Fish_Volume_14_Cover.webp' },
      { number: 15, price: 15.00, image: '/banana-fish/Banana_Fish_Volume_15_Cover.webp' },
      { number: 16, price: 15.00, image: '/banana-fish/Banana_Fish_Volume_16_Cover.webp' },
      { number: 17, price: 15.00, image: '/banana-fish/Banana_Fish_Volume_17_Cover.webp' },
      { number: 18, price: 15.00, image: '/banana-fish/Banana_Fish_Volume_18_Cover.webp' },
      { number: 19, price: 15.00, image: '/banana-fish/Banana_Fish_Volume_19_Cover.webp' },
    ]
  },
  {
    id: 'attack-on-titan',
    title: 'Attack on Titan',
    title_ka: 'ტიტანების თავდასხმა',
    category: 'manga',
    image: '/attack-on-titan/aot_main.jpg',
    author: 'Hajime Isayama',
    author_ka: 'ჰაჯიმე იზაიამა',
    description: 'Humanity is on the brink of extinction as giant humanoids devour everyone in sight.',
    description_ka: 'კაცობრიობა გადაშენების პირასაა, როდესაც გიგანტური ჰუმანოიდები ყველას ჭამენ.',
    spanRow: 1,
    spanCol: 1,
    featured: false,
    volumes: Array.from({ length: 34 }, (_, i) => {
      const num = i + 1;
      const fileName = `AoTVol${num.toString().padStart(2, '0')}.webp`;
      return { 
        number: num, 
        price: 15.00,
        image: `/attack-on-titan/${fileName}`
      };
    })
  },
  {
    id: 'jujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    title_ka: 'ჯუჯუცუ კაისენი',
    category: 'manga',
    image: '/jujutsu-kaisen/Jujutsu_Kaisen_main.webp', // Assuming .webp for consistency
    author: 'Gege Akutami',
    author_ka: 'გეგე აკუტამი',
    description: 'A boy fights for his life against curses and monsters in the world of Jujutsu.',
    description_ka: 'ბიჭი იბრძვის სიცოცხლისთვის წყევლებისა და მონსტრების წინააღმდეგ ჯუჯუცუს სამყაროში.',
    spanRow: 1,
    spanCol: 1,
    featured: true,
    volumes: Array.from({ length: 31 }, (_, i) => ({ 
      number: i, // Volumes 0 to 30
      price: 15.00,
      image: `/jujutsu-kaisen/Jujutsu_Kaisen_Volume_${i}.webp`
    }))
  },
  {
    id: 'guts-hoodie',
    title: 'Guts "Berserk" Hoodie',
    title_ka: 'Guts "Berserk" ჰუდი',
    category: 'apparel',
    image: '/logo.jpg',
    author: 'Limited Edition',
    description: 'Premium heavyweight hoodie featuring minimalist Guts embroidery.',
    description_ka: 'პრემიუმ ხარისხის ჰუდი მინიმალისტური Guts-ის ქარგვით.',
    spanRow: 1,
    spanCol: 1,
    featured: false,
    volumes: [{ number: 1, price: 85.00 }]
  },
  {
    id: 'musashi-tote',
    title: 'Musashi Tote Bag',
    title_ka: 'მუსაშის ჩანთა',
    category: 'accessories',
    image: '/logo.jpg',
    author: 'Art Series',
    description: 'Durable canvas tote with Musashi ink-wash illustration.',
    description_ka: 'გამძლე ტილოს ჩანთა მუსაშის ილუსტრაციით.',
    spanRow: 1,
    spanCol: 1,
    featured: false,
    volumes: [{ number: 1, price: 25.00 }]
  },
  {
    id: 'akira-tee',
    title: 'Neo-Tokyo Oversized Tee',
    title_ka: 'Neo-Tokyo-ს მაისური',
    category: 'apparel',
    image: '/logo.jpg',
    author: 'Cyberpunk Collection',
    description: 'High-quality cotton oversized t-shirt with Akira back graphic.',
    description_ka: 'მაღალი ხარისხის ბამბის მაისური Akira-ს პრინტით.',
    spanRow: 1,
    spanCol: 1,
    featured: false,
    volumes: [{ number: 1, price: 45.00 }]
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductById = (id) => products.find(p => p.id === id);

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
