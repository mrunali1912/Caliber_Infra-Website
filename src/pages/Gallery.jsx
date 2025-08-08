import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Images' },
    { id: 'facility', name: 'Manufacturing Facility' },
    { id: 'machinery', name: 'Machinery & Equipment' },
    { id: 'products', name: 'Products' },
    { id: 'raw-materials', name: 'Raw Materials Stock' },
    { id: 'team', name: 'Our Team' },
    { id: 'projects', name: 'Completed Projects' }
  ];
    


  const galleryImages = [
    {
      id: 1,
      category: 'facility',
      title: '5-Acre Manufacturing Facility Overview',
      image: 'gallary-5-acre-manufacturing-plant.jpg',
      // image: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg',
      description: 'Aerial view of our state-of-the-art manufacturing facility'
    },
    {
      id: 2,
      category: 'machinery',
      title: 'Automated Brick Making Machine',
       image: 'gallary-automated-brick-making-machine.jpg',
      // image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
      description: 'High-capacity automated brick production line'
    },
    {
      id: 3,
      category: 'products',
      title: 'Premium Cement Bricks',
      image: 'brick.jpg',
      // image: 'https://images.pexels.com/photos/162539/architecture-block-building-business-162539.jpeg',
      description: 'Finished cement bricks ready for dispatch'
    },
    {
      id: 4,
      category: 'raw-materials',
      title: 'Raw Material Storage Area',
       image: 'gallary-raw-material-storage-area.webp',
      // image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
      description: 'Organized storage of cement, sand, and aggregates'
    },
    {
      id: 5,
      category: 'machinery',
      title: 'Quality Control Laboratory',
       image: 'gallary-qulality-control-laboratory1.jpg',
      // image: 'https://images.pexels.com/photos/3735780/pexels-photo-3735780.jpeg',
      description: 'Modern testing equipment for quality assurance'
    },
    {
      id: 6,
      category: 'products',
      title: 'Colorful Paver Blocks Display',
      image: 'gallary-Paver-Block.jpg',
      // image: 'https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg',
      description: 'Various patterns and colors of paver blocks'
    },
    {
      id: 7,
      category: 'team',
      title: 'Production Team at Work',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
      description: 'Our skilled workforce ensuring quality production'
    },
    {
      id: 8,
      category: 'facility',
      title: 'Curing Yard',
      image: 'gallary-curing-yard-2.webp',
      // image: 'https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg',
      description: 'Systematic curing process for optimal strength development'
    },
    {
      id: 9,
      category: 'projects',
      title: 'Residential Project - Brick Installation',
      image: 'gallary-residential2.webp',
      // image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
      description: 'Our bricks being used in a premium residential project'
    },
    {
      id: 10,
      category: 'raw-materials',
      title: 'Quality Raw Materials',
       image: 'gallary-grey-sand.webp',
      // image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
      description: 'Premium grade cement and aggregates in storage'
    },
    {
      id: 11,
      category: 'machinery',
      title: 'Conveyor System',
       image: 'gallay-conveyor-system.png',
      // image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
      description: 'Automated material handling and transportation system'
    },
    {
      id: 12,
      category: 'products',
      title: 'Flyash Bricks Stack',
      image: 'gallary-fly-ash-brick.webp',
      // image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg',
      description: 'Eco-friendly flyash bricks ready for delivery'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section (with construction building image) */}
      <section
        className="relative h-[250px] md:h-[300px] flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white space-y-4">
          <h1 className="text-5xl font-bold drop-shadow-lg">Gallery</h1>
          <p className="text-2xl max-w-2xl mx-auto drop-shadow-lg">
            Explore our journey, projects, and manufacturing excellence through a visual showcase of our work and achievements.
          </p>
        </div>
      </section>
      {/* Add extra space below hero section */}
      <div className="h-8 md:h-12"></div>

      {/* Category Filter (tabs, now orange) */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(image.image)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Highlights (orange highlights) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Facility Highlights</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our manufacturing facility is equipped with the latest technology and maintained to the highest standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-gray-700">Acres of Land</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-700">Production Lines</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-700">Skilled Workers</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700">Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
