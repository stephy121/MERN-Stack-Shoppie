import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Stephy',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Alfred',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Ceramide Complex Face Cream',
      slug: 'Ceramide Complex Face Cream',
      category: 'Face Care',
      image: '/images/fc.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Ceramide',
      rating: 4.5,
      numReviews: 10,
      description:
        'The Derma Co 4% Ceramide Complex Face Cream With Ceramides & Cica For Skin Barrier Repair - 30ml',
    },
    {
      //_id: '2',
      name: 'MCaffeine Green Tea & Squalane Face Oil',
      slug: 'MCaffeine Green Tea & Squalane Face Oil',
      category: 'Face Care',
      image: '/images/fo.jpg',
      price: 250,
      countInStock: 0,
      brand: 'MCaffeine',
      rating: 4.0,
      numReviews: 10,
      description:
        'MCaffeine Green Tea & Squalane Face Oil for Dewy Glow - Hydrates, Reduces Dark Spots - Lightweight',
    },
    {
      //_id: '3',
      name: 'Skin Brightening Face Wash',
      slug: 'Skin Brightening Face Wash',
      category: 'Face Care',
      image: '/images/fw.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Glamveda',
      rating: 4.5,
      numReviews: 14,
      description:
        'Glamveda Rice Water & Ceramide Glass Skin Brightening Face Wash',
    },
    {
      //_id: '4',
      name: 'Adidas Fit Pant',
      slug: 'Cream-With-Hyaluronic-Acid',
      category: 'Face Care',
      image: '/images/fw2.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Omega',
      rating: 4.5,
      numReviews: 10,
      description:
        'Organic Kitchen Omega Repair Squalane + Ceramide Cream With Hyaluronic Acid',
    },
  ],
};
export default data;
