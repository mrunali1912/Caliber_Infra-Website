import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, ArrowRight, X } from 'lucide-react';

const Careers = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: 'Production Worker',
      department: 'Manufacturing',
      location: 'Manufacturing Facility',
      type: 'Full-time',
      experience: '0-2 years',
      salary: '₹15,000 - ₹20,000',
      description: 'Join our production team to operate machinery and ensure quality brick manufacturing.',
      responsibilities: [
        'Operating brick making machines and equipment',
        'Quality checking of finished products',
        'Maintaining production records and logs',
        'Following safety protocols and guidelines',
        'Assisting in material handling and storage'
      ],
      requirements: [
        'High school diploma or equivalent',
        'Basic mechanical understanding',
        'Ability to work in shifts',
        'Physical stamina for manual work',
        'Attention to detail and quality'
      ]
    },
    {
      id: 2,
      title: 'Sales Executive',
      department: 'Sales & Marketing',
      location: 'Field/Office',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹25,000 - ₹35,000 + Incentives',
      description: 'Drive sales growth by building relationships with contractors, builders, and distributors.',
      responsibilities: [
        'Identify and develop new business opportunities',
        'Maintain relationships with existing clients',
        'Prepare sales proposals and quotations',
        'Achieve monthly and quarterly sales targets',
        'Coordinate with production for order fulfillment'
      ],
      requirements: [
        "Bachelor's degree in Business or related field",
        'Proven sales experience in construction materials',
        'Excellent communication and negotiation skills',
        'Valid driving license and willingness to travel',
        'Knowledge of local market and construction industry'
      ]
    },
    {
      id: 3,
      title: 'Site Engineer',
      department: 'Engineering',
      location: 'Manufacturing Facility',
      type: 'Full-time',
      experience: '3-7 years',
      salary: '₹30,000 - ₹45,000',
      description: 'Oversee production processes, quality control, and facility maintenance operations.',
      responsibilities: [
        'Monitor and optimize production processes',
        'Ensure compliance with quality standards',
        'Supervise maintenance activities',
        'Coordinate with different departments',
        'Implement safety and efficiency improvements'
      ],
      requirements: [
        'BE/BTech in Civil/Mechanical Engineering',
        'Experience in construction materials manufacturing',
        'Knowledge of quality control processes',
        'Strong leadership and problem-solving skills',
        'Computer proficiency in relevant software'
      ]
    }
  ];

  const benefits = [
    'Competitive salary packages',
    'Performance-based incentives',
    'Health insurance coverage',
    'Annual leave and holidays',
    'Skills development programs',
    'Career growth opportunities',
    'Safe working environment',
    'Employee recognition programs'
  ];

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[350px] md:h-[450px] flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage: "url(employee-image2.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white space-y-4">
          <h1 className="text-5xl font-bold drop-shadow-lg">Careers</h1>
          <p className="text-2xl max-w-2xl mx-auto drop-shadow-lg">
            Join our team and help us build the future. Discover opportunities, culture, and growth at Caliber Enterprises.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Work With Caliber Enterprises?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe our employees are our greatest asset. Join a company that values growth, innovation, and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Great Team</h3>
              <p className="text-gray-600">Work with passionate professionals in a collaborative environment</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-gray-600">Opportunities for advancement and professional development</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Pay</h3>
              <p className="text-gray-600">Fair compensation with performance-based incentives</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Job Security</h3>
              <p className="text-gray-600">Stable employment with a growing, established company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600">
              Explore exciting career opportunities across different departments
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-orange-600 font-medium">{job.department}</p>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{job.type} • {job.experience}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>{job.salary}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{job.description}</p>
                <button 
                  onClick={() => handleApplyNow(job)}
                  className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors inline-flex items-center justify-center"
                >
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Employee Benefits</h2>
            <p className="text-lg text-gray-600">
              We offer comprehensive benefits to support our employees' well-being and success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-orange-50 p-4 rounded-lg text-center">
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 my-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Apply for {selectedJob.title}</h3>
              <button 
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            {/* Job Details */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Job Details:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="font-medium">Position:</span> {selectedJob.title}</div>
                <div><span className="font-medium">Department:</span> {selectedJob.department}</div>
                <div><span className="font-medium">Location:</span> {selectedJob.location}</div>
                <div><span className="font-medium">Experience:</span> {selectedJob.experience}</div>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Address *
                </label>
                <textarea
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Salary
                  </label>
                  <input
                    type="text"
                    placeholder="₹ per month"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Letter / Why do you want to work with us?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Tell us about your interest in this position and what you can bring to our team..."
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the terms and conditions and privacy policy. I consent to Caliber Enterprises processing my personal data for recruitment purposes.
                </label>
              </div>
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
