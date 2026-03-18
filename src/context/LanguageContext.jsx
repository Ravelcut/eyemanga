import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    catalog: 'Catalog',
    about: 'About',
    contact: 'Contact',
    cart: 'Cart',
    checkout: 'Checkout via Instagram',
    buy_now: 'Buy Now (Order via IG)',
    add_to_cart: 'Add to Cart',
    total: 'Total',
    items: 'Items',
    name_label: 'Your Name / Contact Info',
    name_placeholder: 'How should I contact you?',
    notes_label: 'Special Instructions (Size, Color, etc.)',
    notes_placeholder: 'Add any specific details for your order...',
    copy_order: '1. COPY ORDER DETAILS',
    copied: 'COPIED!',
    send_ig: '2. SEND TO INSTAGRAM',
    instruction: 'After copying, click below and paste the details in a message to @eye_manga_official',
    back_to_catalog: 'Back to Catalog',
    finalize_order: 'Finalize Order',
    your_selection: 'Your Selection',
    empty_cart: 'Your cart is empty',
    clear_cart: 'Clear Cart',
    new_arrivals: 'New Arrivals',
    featured: 'Featured',
    search: 'Search products...',
    all: 'All',
    manga: 'Manga',
    apparel: 'Apparel',
    accessories: 'Accessories',
    all_rights_reserved: 'All rights reserved.',
    the_story: 'The Story',
    the_vision: 'The Vision',
    the_brand: 'The Brand',
    volumes_stat: 'Volumes',
    products_stat: 'Products',
    passion_stat: 'Passion',
    contact_us: 'Contact Us',
    get_in_touch: 'Get in Touch',
    send_message: 'Send Message',
    follow_us_ig: 'Follow us on Instagram',
    follow: 'FOLLOW',
    following: 'FOLLOWING',
    select_volume: 'Select Volume',
    volume: 'Volume',
    ig_caption_1: 'Volume 4 Limited Edition Cover ❤️',
    ig_caption_2: 'The embroidery detail on our new hoodies is insane.',
    ig_caption_3: 'Sneak peek of the next chapter...',
    ig_caption_4: 'Exclusive drop tomorrow at 6PM PST.',
    promo_code: 'Promo Code',
    apply: 'Apply',
    invalid_promo: 'Invalid Promo Code',
    discount: 'Discount',
    applied: 'Applied',
    promo_applied: 'Promo code applied!',
    promo_limit_reached: 'Promo code usage limit reached.',
    more: 'More',
    cur_sym: '₾'
  },
  ka: {
    catalog: 'კატალოგი',
    about: 'ჩვენს შესახებ',
    contact: 'კონტაქტი',
    cart: 'კალათა',
    checkout: 'შეკვეთა ინსტაგრამით',
    buy_now: 'შეიძინე ახლა (ინსტაგრამით)',
    add_to_cart: 'კალათაში დამატება',
    total: 'ჯამი',
    items: 'ნივთები',
    name_label: 'თქვენი სახელი / საკონტაქტო',
    name_placeholder: 'როგორ დაგიკავშირდეთ?',
    notes_label: 'დამატებითი ინსტრუქცია (ზომა, ფერი და ა.შ.)',
    notes_placeholder: 'მიუთითეთ დეტალები თქვენი შეკვეთისთვის...',
    copy_order: '1. დააკოპირეთ მონაცემები',
    copied: 'დაკოპირდა!',
    send_ig: '2. გაგზავნეთ ინსტაგრამზე',
    instruction: 'კოპირების შემდეგ დააჭირეთ ქვემოთ და ჩასვით (paste) მონაცემები @eye_manga_official-თან შეტყობინებაში',
    back_to_catalog: 'კატალოგში დაბრუნება',
    finalize_order: 'შეკვეთის დასრულება',
    your_selection: 'თქვენი არჩევანი',
    empty_cart: 'კალათა ცარიელია',
    clear_cart: 'კალათის გასუფთავება',
    new_arrivals: 'ახალი ნივთები',
    featured: 'რჩეული',
    search: 'პროდუქციის ძიება...',
    all: 'ყველა',
    manga: 'მანგა',
    apparel: 'ტანსაცმელი',
    accessories: 'აქსესუარები',
    all_rights_reserved: 'ყველა უფლება დაცულია',
    the_story: 'ჩვენი ისტორია',
    the_vision: 'ხედვა',
    the_brand: 'ბრენდი',
    volumes_stat: 'ტომი',
    products_stat: 'პროდუქცია',
    passion_stat: 'PASSION',
    contact_us: 'კონტაქტი',
    get_in_touch: 'დაგვიკავშირდით',
    send_message: 'შეტყობინების გაგზავნა',
    follow_us_ig: 'გამოგვყევით ინსტაგრამზე',
    follow: 'გამოწერა',
    following: 'გამოწერილია',
    select_volume: 'აირჩიეთ ტომი',
    volume: 'ტომი',
    ig_caption_1: 'მეოთხე ტომის შეზღუდული ვერსია ❤️',
    ig_caption_2: 'ჩვენი ახალი ჰუდების ქარგვის დეტალები საოცარია.',
    ig_caption_3: 'შემდეგი თავის მიმოხილვა...',
    ig_caption_4: 'ექსკლუზიური სიახლე ხვალ საღამოს 6 საათზე.',
    promo_code: 'პრომო კოდი',
    apply: 'გამოყენება',
    invalid_promo: 'პრომო კოდი არასწორია',
    discount: 'ფასდაკლება',
    applied: 'გამოყენებულია',
    promo_applied: 'პრომო კოდი გამოყენებულია!',
    promo_limit_reached: 'პრომო კოდის გამოყენების ლიმიტი ამოიწურა.',
    more: 'ვრცლად',
    cur_sym: '₾'
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'ka');

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => {
    return translations[lang][key] || key;
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ka' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
