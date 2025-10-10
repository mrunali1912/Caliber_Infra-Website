import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CountUp from "react-countup";
import { Building2, Shield, Truck, Award, ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Clock, Users, TrendingUp, ChevronLeft, ChevronRight, Package } from 'lucide-react';

const Home = () => {
  const images = [
    // "/carousal/carousal1.jpg",
    // "/carousal/carousal2.jpg",
    // "/carousal/carousal3.jpg",
    "/carousal/carousal7.jpg",
  ];
  const products = [
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
    {
      id: 3,
      category: 'Cement Bricks',
      name: 'Premium Cement Brick - 9 Inch',
      size: '9 inch',
      description: 'Extra thick cement bricks for maximum strength and thermal insulation.',
      price: 18,
      unit: 'per piece',
      specifications: {
        compressiveStrength: '3.5 N/mm²',
        waterAbsorption: '< 15%',
        dimensions: '190 x 90 x 190 mm'
      },
      images: [
        '/cement-brick-9-inch.webp',
        '/cement-brick-9-inch.webp',
        '/cement-brick-9-inch.webp',
        '/cement-brick-9-inch.webp',
      ]

    },
  ];

  const features = [
    {
      icon: Building2,
      title: 'State-of-the-Art Manufacturing Plant',
      description: 'Modern manufacturing facility ensuring consistent quality and large-scale production.'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'All our products undergo rigorous quality testing to meet industry standards and regulations.'
    },
    {
      icon: Truck,
      title: 'Timely Delivery',
      description: 'Reliable delivery network ensuring your orders reach you on time, every time.'
    },
    {
      icon: Award,
      title: 'Industry Experience',
      description: 'Years of expertise in brick manufacturing with a commitment to excellence and innovation.'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Construction Manager',
      company: 'ABC Construction Ltd.',
      text: 'Caliber Infra has been our trusted partner for over 3 years. Their cement bricks are of exceptional quality and have never failed us in any project.',
      image: '/employee-image.jpg'
    },
    {
      name: 'Priya Sharma',
      position: 'Project Director',
      company: 'Modern Builders',
      text: 'The flyash bricks from Caliber Infra are excellent for thermal insulation. Our clients are extremely satisfied with the energy efficiency.',
      image: '/employee-image2.webp'
    },
    {
      name: 'Amit Patel',
      position: 'Architect',
      company: 'Design Studio',
      text: 'I recommend Caliber Infra to all my clients. Their paver blocks are not only durable but also aesthetically pleasing for landscaping projects.',
      image: '/employee-image.jpg'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Quality Raw Materials',
      description: 'We source the finest quality cement, sand, and aggregates from certified suppliers to ensure superior brick strength.'
    },
    {
      step: '02',
      title: 'Advanced Manufacturing',
      description: 'Our state-of-the-art machinery and automated processes guarantee consistent quality and precise dimensions.'
    },
    {
      step: '03',
      title: 'Rigorous Testing',
      description: 'Every batch undergoes comprehensive testing for strength, durability, and water absorption before dispatch.'
    },
    {
      step: '04',
      title: 'Timely Delivery',
      description: 'Our efficient logistics network ensures your orders reach the construction site on schedule.'
    }
  ];

  const stats = [
    { number: '5+', label: 'Projects Completed', icon: Award },
    { number: '10000+', label: 'Bricks Daily Production', icon: TrendingUp },
    { number: '100%', label: 'Quality Assured', icon: Shield },
    { number: '10+', label: 'Years Experience', icon: Users }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] sm:h-[90vh] overflow-hidden">
        {/* Image Slides */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}

        {/* Navigation Buttons */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-3 rounded-full shadow-md"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-3 rounded-full shadow-md"
        >
          <ChevronRight className="h-6 w-6" />
        </button> */}

        {/* Dots Indicator */}
        {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-orange-600" : "bg-white/70"
            }`}
          />
        ))}
      </div> */}
      </section>
      <div className="h-20 bg-white"></div>

      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 lg:px-8">
          {/* Left Content */}
          <div>
            <h3 className="text-orange-500 text-lg font-semibold mb-3">Welcome To</h3>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Calliber Enterprise Bricks
            </h2>
            <div className="w-20 h-[3px] bg-orange-500 mb-8"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Calliber Enterprise is one of the leading brick manufacturers in India,
              specializing in cement bricks, flyash bricks, and paver blocks.
              We are committed to delivering strength, durability, and
              sustainability through our products.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our plant spans over 5 acres and is equipped with advanced machinery to
              ensure precision and quality in every brick. Whether it’s residential,
              commercial, or industrial construction, Calliber Enterprise Bricks stands for
              reliability and excellence.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/About-paver1.jpg"
              alt="Brick Building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>


      <section className="relative bg-white min-h-[70vh] flex items-center overflow-x-hidden">
        {/* Main content wrapper */}
        <div className="max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center justify-between gap-8 py-12">
          {/* Bricks image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/fly-ash_brick.jpg"
              loading="eager"
              alt="Brick Types"
              className="w-full max-w-xl object-contain"
            />
          </div>
          {/* Headline */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start space-y-6">
            <span className="text-2xl font-medium text-zinc-700">
              When it comes to building materials ?
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Best Building <br />
              Materials{" "}
              <span className="text-orange-500">
                Provider in <br />
                India
              </span>
            </h1>
            <span className="h-2 w-32 bg-orange-300 rounded-sm block mt-1 mb-2" />
          </div>
        </div>
      </section>


      {/* why choose US */}
      <section className="w-full bg-gray-900 py-8 relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left: Image */}
          <div className="animate-slideLeft ">
            <img
              src="/whychoose3.jpg"
              alt="brick building"
              className="w-full h-full object-cover rounded-1xl shadow-2xl"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center px-8 py-10 text-white bg-gray-900">
            <h3 className="text-orange-400 text-2xl font-semibold mb-3 tracking-tight uppercase">
              Why Choose Us?
            </h3>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-snug">
              Our commitment to <br /> quality and sustainability
            </h2>
            <div className="w-20 h-1 bg-orange-400 mb-4" />
            <p className="text-base text-zinc-100 leading-relaxed max-w-xl">
              Calliber Enterprise Bricks stands as one of India’s most trusted and innovative brick
              manufacturers. Recognized for delivering top-quality bricks for home and commercial
              construction, the company is driven by a strong commitment to excellence, modern technology,
              and complete customer satisfaction. Using advanced production methods, Calliber Enterprise
              Bricks crafts products that combine durability, strength, and elegant design.<br /><br />
              Their modern manufacturing facilities and rigorous quality assurance systems ensure every
              brick meets the highest industry benchmarks. That’s why builders, architects, and homeowners
              across India choose Calliber Enterprise Bricks for reliable performance and timeless
              quality.
            </p>
          </div>
        </div>
      </section>








      {/* Why Choose Caliber Enterprise Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Caliber Enterprise?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver
              the finest quality bricks for all your construction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${index % 2 === 0 ? 'bg-orange-100' : 'bg-orange-50'}`}>
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-orange-200">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* Manufacturing Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Manufacturing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure every brick meets the highest quality standards
              and delivers exceptional performance in construction projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform animate-float">
                  <span className="text-2xl font-bold text-orange-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">Our Premium Products</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality bricks and paver blocks,
              manufactured with precision and built to last.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.images ? product.images[0] : product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onClick={() => {
                      setSelectedProduct(product);
                      setSelectedImageIndex(0);
                      setShowImagePopup(true);
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center text-gray-500">Image not available</div>';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                    <span className="text-orange-600 font-bold text-base">
                      ₹{product.price} {product.unit}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-xs leading-snug">{product.description}</p>
                  </div>

                  {/* Specifications with Add to Cart button aligned to last line */}
                  <div className="flex justify-between mt-2 text-xs text-gray-600">
                    <div className="space-y-0.5">
                      <div>Strength: {product.specifications.compressiveStrength}</div>
                      <div>Water Absorption: {product.specifications.waterAbsorption}</div>
                      <div>Dimensions: {product.specifications.dimensions}</div>
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className={`ml-4 py-2 px-3 rounded-lg font-medium flex items-center justify-center space-x-1 transition-colors self-end ${(product.id)
                          ? "bg-orange-600 text-white cursor-default"
                          : "bg-orange-600 text-white hover:bg-orange-700"
                        }`}
                    >
                      <Package className="h-4 w-4" />
                      <span className="text-sm">
                        {"Add to Cart"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Explore More Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => (window.location.href = "/products")}
              className="py-3 px-6 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              Explore More
            </button>
          </div>
        </div>
      </section>




      {/* Projects Completed Section */}
      {/* <section className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by hundreds of clients across the region for quality construction materials.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                  <CountUp end={parseInt(stat.number)}
                    duration={2}
                    enableScrollSpy={true}
                  />
                  {stat.number.includes('+') && '+'}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section
        className="relative py-20 bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/Achievements/achievementsImage.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Our Achievements</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Trusted by hundreds of clients across the region for quality construction materials.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-orange-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  <CountUp
                    end={parseInt(stat.number)}
                    duration={2}
                    enableScrollSpy={true}
                  />
                  {stat.number.includes('+') && '+'}
                </div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say about
              our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-orange-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Contact us today for a free quote and let our experts help you choose
              the perfect bricks for your construction project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors transform hover:scale-105"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
