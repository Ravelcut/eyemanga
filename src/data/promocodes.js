export const promocodes = [
  {
    code: 'START20',
    discount: 20, // 20% off
  },
  {
    code: 'testbeja1958',
    discount: 100, // 100% off
  },
  {
    code: 'EYEMANGA',
    discount: 15,
    limit: 5,
  },
  {
    code: 'GEORGIA',
    discount: 10,
  }
];

export const validatePromocode = (code) => {
  const promo = promocodes.find(p => p.code.toUpperCase() === code.toUpperCase());
  if (!promo) return null;

  if (promo.limit) {
    const usage = Number(localStorage.getItem(`promo_usage_${promo.code.toUpperCase()}`)) || 0;
    if (usage >= promo.limit) {
      return { ...promo, error: 'limit_reached' };
    }
  }
  return promo;
};

export const recordPromoUsage = (code) => {
  if (!code) return;
  const key = `promo_usage_${code.toUpperCase()}`;
  const usage = Number(localStorage.getItem(key)) || 0;
  localStorage.setItem(key, usage + 1);
};
