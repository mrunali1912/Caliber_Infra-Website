import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Shield, Truck, Award, ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Clock, Users, TrendingUp } from 'lucide-react';

const Home = () => {
  const products = [
    {
      title: 'Cement Bricks',
      description: 'High-quality cement bricks available in 4", 6", and 9" sizes. Perfect for construction projects requiring durability and strength.',
      sizes: ['4 inch', '6 inch', '9 inch'],
      image: '/brick.jpg'
    },
    {
      title: 'Flyash Bricks',
      description: 'Eco-friendly flyash bricks that provide excellent thermal insulation. Available in 4" and 6" sizes.',
      sizes: ['4 inch', '6 inch'],
      image: '/fly-ash_brick.jpg'
    },
    {
      title: 'Paver Blocks',
      description: 'Decorative and durable paver blocks ideal for driveways, walkways, and landscaping projects.',
      sizes: ['Various Designs'],
      image: '/paver-block.jpg'
    }
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
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '50,000+', label: 'Bricks Daily Production', icon: TrendingUp },
    { number: '100%', label: 'Quality Assured', icon: Shield },
    { number: '10+', label: 'Years Experience', icon: Users }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Premium Quality <span className="text-orange-600">Bricks</span> for Your Construction Needs
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Caliber Infra specializes in manufacturing high-quality cement bricks, flyash bricks, and paver blocks. 
                  With our state-of-the-art manufacturing facility, we deliver excellence in every brick.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <span>View Products</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors text-center transform hover:scale-105"
                >
                  Get Quote
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-orange-600 group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-orange-600 group-hover:scale-110 transition-transform">50K+</div>
                  <div className="text-sm text-gray-600">Daily Production</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-orange-600 group-hover:scale-110 transition-transform">100%</div>
                  <div className="text-sm text-gray-600">Quality Assured</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src='/construction-image.webp'
                alt="Brick Manufacturing"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">ISO Certified</div>
                    <div className="text-sm text-gray-600">Quality Manufacturing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Caliber Infra Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Caliber Infra?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver 
              the finest quality bricks for all your construction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Premium Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality bricks and paver blocks, 
              manufactured with precision and built to last.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-900">Available Sizes:</div>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, sizeIndex) => (
                        <span
                          key={sizeIndex}
                          className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Projects Completed Section */}
      <section className="py-16 bg-gray-50">
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
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
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
