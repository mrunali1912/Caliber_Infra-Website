import React from 'react';
import { User, Building2, Award, Target, Users, Leaf, CheckCircle } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2018', event: 'Company Founded', description: 'Gaurav Giri established Caliber Enterprises with a vision to provide quality construction materials.' },
    { year: '2019', event: 'Manufacturing Plant', description: 'Set up our state-of-the-art 5-acre manufacturing facility with modern equipment.' },
    { year: '2020', event: 'Product Diversification', description: 'Expanded our product line to include flyash bricks and paver blocks.' },
    { year: '2021', event: 'Quality Certification', description: 'Achieved ISO certification for quality management systems.' },
    { year: '2022', event: 'Market Expansion', description: 'Expanded operations to serve multiple cities and regions.' },
    { year: '2023', event: 'Sustainability Initiative', description: 'Launched eco-friendly production processes and sustainable practices.' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in manufacturing, ensuring every brick meets rigorous quality specifications.'
    },
    {
      icon: Leaf,
      title: 'Environmental Responsibility',
      description: 'Our flyash bricks and sustainable practices demonstrate our commitment to environmental conservation.'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: "We prioritize our customers' needs and work tirelessly to exceed their expectations in every project."
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuous improvement and adoption of new technologies keep us at the forefront of the industry.'
    }
  ];

  const achievements = [
    'Successfully completed 500+ projects',
    'ISO 9001:2015 Certified Facility',
    'Serving over 20 cities across India',
    '3 Product Categories: Flyash Bricks, Paver Blocks, and Concrete Blocks',
    '10,000+ Bricks Manufactured Daily',
    'Awarded Best SME in Construction Materials 2023'
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-gray-900">About Caliber Enterprises</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building the future with quality, innovation, and sustainable practices. 
            Learn about our journey, leadership, and commitment to excellence.
          </p>
        </div>

        {/* CEO Section */}
        <section className="bg-white rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <User className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Gaurav Giri</h2>
                  <p className="text-xl text-orange-600 font-semibold">Founder & CEO</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With a vision to revolutionize the construction materials industry, Gaurav Giri founded 
                  Caliber Enterprises with the mission of providing high-quality, sustainable building materials 
                  to construction professionals across the region.
                </p>
                <p>
                  Under his leadership, the company has grown from a small operation to a major player 
                  in the brick manufacturing industry, operating a state-of-the-art 5-acre manufacturing 
                  facility that produces thousands of bricks daily while maintaining the highest quality standards.
                </p>
                <p>
                  Gaurav's commitment to innovation, quality, and environmental sustainability has positioned 
                  Caliber Enterprises as a trusted partner for construction projects of all sizes, from residential 
                  homes to large commercial developments.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">6+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                alt="CEO Gaurav Giri"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">ISO</div>
                  <div className="text-sm">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Section */}
        <section className="bg-white rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                // src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg"
                src="gallary-5-acre-manufacturing-plant.jpg"
                alt="Manufacturing Facility"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-8 w-8 text-orange-600" />
                  <div>
                    <div className="font-bold text-gray-900">5-Acre Facility</div>
                    <div className="text-sm text-gray-600">Modern Manufacturing</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Manufacturing Excellence</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our state-of-the-art 5-acre manufacturing facility is equipped with the latest 
                  technology and machinery to ensure consistent quality and efficient production. 
                  We maintain strict quality control measures at every stage of the manufacturing process.
                </p>
                <p>
                  From raw material selection to final product testing, our experienced team 
                  ensures that every brick that leaves our facility meets or exceeds industry 
                  standards for strength, durability, and dimensional accuracy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">10,000+</div>
                  <div className="text-sm text-gray-600">Bricks per Day</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Product Categories</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Quality Control</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our operations and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
              <p className="text-lg text-gray-600">
                Milestones that reflect our commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600">
                Experienced professionals driving our success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" 
                  alt="CEO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">Gaurav Giri</h3>
                <p className="text-blue-600">Founder & CEO</p>
                <p className="text-gray-600 mt-2">Visionary leader with 15+ years in construction industry</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" 
                  alt="COO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">Rajesh Kumar</h3>
                <p className="text-blue-600">Chief Operations Officer</p>
                <p className="text-gray-600 mt-2">Manufacturing expert ensuring quality and efficiency</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                  alt="CTO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">Priya Sharma</h3>
                <p className="text-blue-600">Head of Quality Control</p>
                <p className="text-gray-600 mt-2">Quality assurance specialist with technical expertise</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
