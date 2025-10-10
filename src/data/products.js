  export const products = [
    {
      id: 1,
      category: 'Cement Bricks',
      name: 'Premium Cement Brick - 4 Inch',
      size: '4 inch',
      description: 'High-strength cement bricks ideal for load-bearing walls and structural applications.',
      price: 8,
      unit: 'per piece',
      specifications: {
        compressiveStrength: '3.5 N/mm²',
        waterAbsorption: '< 15%',
        dimensions: '190 x 90 x 90 mm'
      },
      images: ['/4-inch-cement-brick.jpg',
        '/4inch-concrete1.png',
        '/4-inch-cement-brick.jpg',
        '/4-inch-cement-brick.jpg'
      ]
    },
    {
      id: 2,
      category: 'Cement Bricks',
      name: 'Premium Cement Brick - 6 Inch',
      size: '6 inch',
      description: 'Robust cement bricks perfect for heavy-duty construction and commercial buildings.',
      price: 12,
      unit: 'per piece',
      specifications: {
        compressiveStrength: '3.5 N/mm²',
        waterAbsorption: '< 15%',
        dimensions: '190 x 90 x 140 mm'
      },
      images: [
        '/6-inch-cement-brick1.png',
        '/6-inch-cement-brick2.png',
        '/6-inch-cement-brick3.png',
        '/6-inch-cement-brick4.png',
      ],
    },
    // {
    //   id: 3,
    //   category: 'Cement Bricks',
    //   name: 'Premium Cement Brick - 9 Inch',
    //   size: '9 inch',
    //   description: 'Extra thick cement bricks for maximum strength and thermal insulation.',
    //   price: 18,
    //   unit: 'per piece',
    //   specifications: {
    //     compressiveStrength: '3.5 N/mm²',
    //     waterAbsorption: '< 15%',
    //     dimensions: '190 x 90 x 190 mm'
    //   },
    //   images: [
    //     '/cement-brick-9-inch.webp',
    //     '/cement-brick-9-inch.webp',
    //     '/cement-brick-9-inch.webp',
    //     '/cement-brick-9-inch.webp',
    //   ]

    // },
    {
      id: 4,
      category: 'Flyash Bricks',
      name: 'Eco-Friendly Flyash Brick - 4 Inch',
      size: '4 inch',
      description: 'Environmentally sustainable flyash bricks with excellent thermal properties.',
      price: 7,
      unit: 'per piece',
      specifications: {
        compressiveStrength: '4.0 N/mm²',
        waterAbsorption: '< 12%',
        dimensions: '190 x 90 x 90 mm'
      },
      images: [
        '/fly-ash_brick.jpg',
        '/fly-ash_brick.jpg',
        '/fly-ash_brick.jpg',
        '/fly-ash_brick.jpg'
      ]

    },
    {
      id: 5,
      category: 'Flyash Bricks',
      name: 'Eco-Friendly Flyash Brick - 6 Inch',
      size: '6 inch',
      description: 'High-performance flyash bricks offering superior strength and eco-friendliness.',
      price: 11,
      unit: 'per piece',
      specifications: {
        compressiveStrength: '4.0 N/mm²',
        waterAbsorption: '< 12%',
        dimensions: '190 x 90 x 140 mm'
      },
      images: [
        '/6-inch-fly-ash-bricks.webp',
        '/6-inch-fly-ash-bricks.webp',
        '/6-inch-fly-ash-bricks.webp',
        '/6-inch-fly-ash-bricks.webp'
      ]

    },
    {
      id: 6,
      category: 'Paver Blocks',
      name: 'Decorative Paver Blocks',
      size: 'Various Designs',
      description: 'Beautiful and durable paver blocks for driveways, walkways, and landscaping.',
      price: 25,
      unit: 'per sq ft',
      specifications: {
        compressiveStrength: '40 N/mm²',
        waterAbsorption: '< 6%',
        dimensions: 'Multiple sizes available'
      },
      images: [
        '/paver-blocks.webp',
        '/paver-block1.jpg',
        '/paver-block2.webp',
        '/paver-block3.webp'
      ]

    }
  ];
  export default products;