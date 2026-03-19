export const categories = ['all', 'manga'];

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
      { number: 1,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_01_-_English.webp', chapters_en: ['Dog & Chainsaw', 'The Place Where Pochita Is', 'Arrival in Tokyo', 'Power', 'A Way to Touch Some Boobs', 'Service', "Meowy's Whereabouts"], chapters_ka: ['ძაღლი და ბენზოხერხა', 'ადგილი, სადაც პოჩიტაა', 'ტოკიოში ჩასვლა', 'ძალა', 'გზა მკერდზე შეხებისკენ', 'სერვისი', 'მიაუს ადგილსამყოფელი'] },
      { number: 2,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_02_-_English.webp', chapters_en: ['Chainsaw vs. Bat', 'Rescue', 'Kon', 'Compromise', 'Squeeze', 'Gun Devil', 'French Kiss', 'Endless 8th Floor', 'The First Taste'], chapters_ka: ['ბენზოხერხა ღამურას წინააღმდეგ', 'გადარჩენა', 'კონ', 'კომპრომისი', 'გამოწურვა', 'იარაღის დემონი', 'ფრანგული კოცნა', 'უსასრულო მე-8 სართული', 'პირველი გემო'] },
      { number: 3,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_03_-_English.webp', chapters_en: ['Kill Denji', 'Chainsaw vs. Eternity', 'Nobel Prize', 'Drinking', 'Taste of a Kiss', 'Cola-Flavor Chupa Chups', 'Gunfire', 'Curse', 'Ghost, Snake, Chainsaw'], chapters_ka: ['მოკალი დენჯი', 'ბენზოხერხა მარადისობის წინააღმდეგ', 'ნობელის პრემია', 'დალევა', 'კოცნის გემო', 'კოლას არომატიანი ჩუპა-ჩუპსი', 'სროლა', 'წყევლა', 'მოჩვენება, გველი, ბენზოხერხა'] },
      { number: 4,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_04_-_English.webp', chapters_en: ['The Gun is Mightier', 'The Way to Use a Curse', 'Supernatural', 'Secret', 'Mission Start', 'Training', 'Training, Part 2', 'A Solid Plan', 'Katana vs. Chainsaw'], chapters_ka: ['იარაღი უფრო ძლიერია', 'წყევლის გამოყენების გზა', 'ზებუნებრივი', 'საიდუმლო', 'მისიის დაწყება', 'ვარჯიში', 'ვარჯიში, ნაწილი 2', 'მყარი გეგმა', 'კატანა ბენზოხერხის წინააღმდეგ'] },
      { number: 5,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_05.webp', chapters_en: ['Minor', 'Suddenly', 'Train, Head, Chainsaw', 'Easy Revenge!', 'The Future Rules', 'Vanished', 'Vengeance', 'Katana vs. Chainsaw', 'Beach'], chapters_ka: ['უმნიშვნელო', 'მოულოდნელად', 'მატარებელი, თავი, ბენზოხერხა', 'ადვილი შურისძიება!', 'მომავალი მართავს', 'გაუჩინარებული', 'შურისძიება', 'კატანა ბენზოხერხის წინააღმდეგ', 'პლაჟი'] },
      { number: 6,  price: 15.00, image: '/chainsaw-man/Chainsaw_Man_Volume_Volume_06_-_English.webp', chapters_en: ['Boom Boom Boom', 'A Fine Day for Shark Hunting', 'Shark-nado', 'Shark Hurricane', 'Massage', 'A Girl\'s Heart', 'Love, Flower, Chainsaw', 'The Way of the Devil', 'Looking Forward'], chapters_ka: ['ბუმ ბუმ ბუმ', 'კარგი დღე ზვიგენზე სანადიროდ', 'ზვიგენის ტორნადო', 'ზვიგენის ქარიშხალი', 'მასაჟი', 'გოგონას გული', 'სიყვარული, ყვავილი, ბენზოხერხა', 'დემონის გზა', 'მოლოდინში'] },
      ...Array.from({ length: 15 }, (_, i) => ({ 
        number: i + 7, 
        price: 15.00,
        image: `/chainsaw-man/Chainsaw_Man_Volume_Volume_${(i + 7).toString().padStart(2, '0')}${i + 7 >= 11 ? '_-_English' : ''}.webp`,
        chapters_en: Array.from({ length: 9 }, (_, j) => `Chapter ${i * 9 + j + 53}`),
        chapters_ka: Array.from({ length: 9 }, (_, j) => `თავი ${i * 9 + j + 53}`)
      }))
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
    volumes: [
      { number: 1,  price: 15.00, image: '/nana/Nana-vol-1.webp', chapters_en: ['Nana Komatsu', 'Nana Osaki'], chapters_ka: ['ნანა კომაცუ', 'ნანა ოსაკი'] },
      { number: 2,  price: 15.00, image: '/nana/Nana-vol-2.webp', chapters_en: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'], chapters_ka: ['თავი 1', 'თავი 2', 'თავი 3', 'თავი 4'] },
      ...Array.from({ length: 19 }, (_, i) => ({ 
        number: i + 3, 
        price: 15.00,
        image: `/nana/Nana-vol-${i + 3}.webp`,
        chapters_en: Array.from({ length: 4 }, (_, j) => `Chapter ${i * 4 + j + 5}`),
        chapters_ka: Array.from({ length: 4 }, (_, j) => `თავი ${i * 4 + j + 5}`)
      }))
    ]
  },
  {
    id: 'banana-fish',
    title: 'Banana Fish',
    title_ka: 'ბანანის თევზი',
    category: 'manga',
    image: '/banana-fish/Banana_Fish_main.webp',
    author: 'Akimi Yoshida',
    author_ka: 'აკიმი იოშიდა',
    description: 'Nature made Ash Lynx beautiful; nurture made him a cold ruthless killer.',
    description_ka: 'ბუნებამ ეშ ლინქსი მშვენიერი გახადა; აღზრდამ კი - ცივსისხლიანი მკვლელი.',
    spanRow: 1,
    spanCol: 1,
    featured: true,
    volumes: [
      { number: 1,  price: 15.00, image: '/banana-fish/Banana_Fish_Volume_1_Cover.webp', chapters_en: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5', 'Chapter 6'], chapters_ka: ['თავი 1', 'თავი 2', 'თავი 3', 'თავი 4', 'თავი 5', 'თავი 6'] },
      ...Array.from({ length: 18 }, (_, i) => ({ 
        number: i + 2, 
        price: 15.00,
        image: `/banana-fish/Banana_Fish_Volume_${i + 2}_Cover.webp`,
        chapters_en: Array.from({ length: 6 }, (_, j) => `Chapter ${i * 6 + j + 7}`),
        chapters_ka: Array.from({ length: 6 }, (_, j) => `თავი ${i * 6 + j + 7}`)
      }))
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
    volumes: [
      { number: 1,  price: 15.00, image: '/attack-on-titan/AoTVol01.webp', chapters_en: ['To You, 2,000 Years From Now', 'That Day', 'Night of the Disbanding Ceremony', 'First Battle'], chapters_ka: ['შენ, 2,000 წლის შემდეგ', 'ის დღე', 'დაშლის ცერემონიის ღამე', 'პირველი ბრძოლა'] },
      { number: 2,  price: 15.00, image: '/attack-on-titan/AoTVol02.webp', chapters_en: ['A Dim Light Amid Despair', 'The World the Girl Saw', 'Small Blade', 'I Can Hear a Heartbeat', 'Where\'s the Left Arm?'], chapters_ka: ['მბჟუტავი სინათლე სასოწარკვეთაში', 'სამყარო, რომელიც გოგონამ დაინახა', 'პატარა დანა', 'გულისცემა მესმის', 'სად არის მარცხენა მკლავი?'] },
      ...Array.from({ length: 32 }, (_, i) => ({ 
        number: i + 3, 
        price: 15.00,
        image: `/attack-on-titan/AoTVol${(i + 3).toString().padStart(2, '0')}.webp`,
        chapters_en: Array.from({ length: 4 }, (_, j) => `Chapter ${i * 4 + j + 10}`),
        chapters_ka: Array.from({ length: 4 }, (_, j) => `თავი ${i * 4 + j + 10}`)
      }))
    ]
  },
  {
    id: 'jujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    title_ka: 'ჯუჯუცუ კაისენი',
    category: 'manga',
    image: '/jujutsu-kaisen/Jujutsu_Kaisen_main.webp',
    author: 'Gege Akutami',
    author_ka: 'გეგე აკუტამი',
    description: 'A boy fights for his life against curses and monsters in the world of Jujutsu.',
    description_ka: 'ბიჭი იბრძვის სიცოცხლისთვის წყევლებისა და მონსტრების წინააღმდეგ ჯუჯუცუს სამყაროში.',
    spanRow: 1,
    spanCol: 1,
    featured: true,
    volumes: [
      { number: 0,  price: 15.00, image: '/jujutsu-kaisen/Jujutsu_Kaisen_Volume_0.webp', chapters_en: ['The Cursed Child', 'Blacker and Blacker', 'Punishment for the Weak', 'Bright Darkness'], chapters_ka: ['დაწყევლილი ბავშვი', 'უფრო შავი და შავი', 'სასჯელი სუსტებისთვის', 'კაშკაშა სიბნელე'] },
      { number: 1,  price: 15.00, image: '/jujutsu-kaisen/Jujutsu_Kaisen_Volume_1.webp', chapters_en: ['Ryomen Sukuna', 'Secret Execution', 'For Myself', 'Girl of Steel', 'Start', 'Fearsome Womb', 'Fearsome Womb, Part 2'], chapters_ka: ['რიომენ სუკუნა', 'საიდუმლო სიკვდილით დასჯა', 'ჩემი თავისთვის', 'ფოლადის გოგონა', 'დასაწყისი', 'საშინელი საშვილოსნო', 'საშინელი საშვილოსნო, ნაწილი 2'] },
      ...Array.from({ length: 29 }, (_, i) => ({ 
        number: i + 2, 
        price: 15.00,
        image: `/jujutsu-kaisen/Jujutsu_Kaisen_Volume_${i + 2}.webp`,
        chapters_en: Array.from({ length: 9 }, (_, j) => `Chapter ${i * 9 + j + 8}`),
        chapters_ka: Array.from({ length: 9 }, (_, j) => `თავი ${i * 9 + j + 8}`)
      }))
    ]
  },
  {
    id: 'custom-manga-request',
    title: 'Request Your Own Manga',
    title_ka: 'მანგის მოთხოვნა',
    category: 'manga',
    image: '/logo.jpg',
    author: 'Special Order',
    author_ka: 'სპეციალური შეკვეთა',
    description: "request a manga that isn't listed here, make sure to include details at the checkout",
    description_ka: 'მოითხოვეთ მანგა, რომელიც აქ არ არის ჩამოთვლილი. აუცილებლად მიუთითეთ დეტალები შეკვეთისას.',
    spanRow: 1,
    spanCol: 1,
    featured: true,
    volumes: [{ number: 1, price: 20.00, chapters_en: ['Special Request'], chapters_ka: ['სპეციალური მოთხოვნა'] }]
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
