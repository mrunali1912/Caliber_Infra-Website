import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Building2, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    brickType: '',
    quantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        brickType: '',
        quantity: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      action: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@gauravinfra.com', 'sales@gauravinfra.com'],
      action: 'Send us your requirements'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['5-Acre Manufacturing Plant', 'Industrial Area, Your City', 'State - 123456'],
      action: 'Visit our facility'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 8:00 AM - 6:00 PM', 'Sunday: 9:00 AM - 4:00 PM'],
      action: '24/7 emergency support available'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Contact Caliber Infra</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Get in touch with our team for expert guidance, 
            custom quotes, and premium quality bricks delivered on time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Building2 className="h-8 w-8 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <info.icon className="h-5 w-5 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    </div>
                    <div className="ml-10 space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                      <p className="text-sm text-orange-600 font-medium">{info.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CEO Contact */}
            <div className="bg-orange-600 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <User className="h-8 w-8" />
                <div>
                  <h3 className="text-xl font-bold">Gaurav Giri</h3>
                  <p className="text-orange-100">Founder & CEO</p>
                </div>
              </div>
              <p className="text-orange-100 mb-4">
                Have a large project or special requirements? Connect directly with our CEO 
                for personalized service and custom solutions.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Direct Line: +91 99999 88888</p>
                <p className="font-semibold">Email: gaurav@gauravinfra.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <MessageSquare className="h-8 w-8 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Request a Quote</h2>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="infrastructure">Infrastructure Project</option>
                      <option value="landscaping">Landscaping/Paving</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="brickType" className="block text-sm font-medium text-gray-700 mb-2">
                      Brick Type Needed
                    </label>
                    <select
                      id="brickType"
                      name="brickType"
                      value={formData.brickType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="">Select brick type</option>
                      <option value="cement-4">Cement Bricks - 4 inch</option>
                      <option value="cement-6">Cement Bricks - 6 inch</option>
                      <option value="cement-9">Cement Bricks - 9 inch</option>
                      <option value="flyash-4">Flyash Bricks - 4 inch</option>
                      <option value="flyash-6">Flyash Bricks - 6 inch</option>
                      <option value="paver">Paver Blocks</option>
                      <option value="mixed">Multiple Types</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="e.g., 10,000 pieces or 500 sq ft"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details & Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder="Please provide details about your project, timeline, delivery location, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-700 disabled:bg-orange-400 transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message & Get Quote</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our terms of service. We'll respond within 24 hours with a detailed quote.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Visit Our Manufacturing Facility</h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="h-16 w-16 text-orange-600 mx-auto" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">5-Acre Manufacturing Plant</h3>
                <p className="text-gray-600">Industrial Area, Your City</p>
                <p className="text-sm text-gray-500 mt-2">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
