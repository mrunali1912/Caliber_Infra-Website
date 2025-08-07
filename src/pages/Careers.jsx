import React from 'react';

const testimonials = [
  {
    name: 'Amit Sharma',
    position: 'Production Supervisor',
    text: 'Working at Caliber Infra has given me the opportunity to grow my skills and be part of a supportive team. The company truly values innovation and quality.'
  },
  {
    name: 'Priya Singh',
    position: 'Sales Executive',
    text: 'The work environment is positive and inclusive. I love being able to contribute to impactful projects and see the results of our hard work.'
  },
  {
    name: 'Rahul Verma',
    position: 'Logistics Coordinator',
    text: 'Caliber Infra offers great learning opportunities and encourages professional development. I feel proud to be part of this organization.'
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[350px] md:h-[450px] flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage:
            'url(employee-image2.webp)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white space-y-4">
          <h1 className="text-5xl font-bold drop-shadow-lg">Careers</h1>
          <p className="text-2xl max-w-2xl mx-auto drop-shadow-lg">
            Join our team and help us build the future. Discover opportunities, culture, and growth at Caliber Infra.
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Why Work With Us?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 text-left mx-auto max-w-xl">
            <li>Growth-oriented environment with clear career paths</li>
            <li>Competitive salary, health insurance, and performance bonuses</li>
            <li>Inclusive and diverse workplace culture</li>
            <li>Continuous learning and professional development</li>
            <li>Work on impactful, large-scale projects</li>
            <li>Modern manufacturing facility and advanced technology</li>
            <li>Supportive leadership and collaborative teams</li>
          </ul>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
          <ul className="space-y-6">
            <li className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row md:items-center justify-between hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
              <div>
                <h3 className="font-semibold text-lg text-orange-600">Sales Executive</h3>
                <p className="text-gray-700">Drive sales and build relationships with clients in the construction industry. <b>Requirements:</b> 2+ years experience, strong communication skills.</p>
              </div>
              <button className="mt-4 md:mt-0 bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">Apply Now</button>
            </li>
            <li className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row md:items-center justify-between hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
              <div>
                <h3 className="font-semibold text-lg text-orange-600">Production Supervisor</h3>
                <p className="text-gray-700">Oversee daily operations at our manufacturing plant and ensure quality standards. <b>Requirements:</b> 3+ years experience in manufacturing.</p>
              </div>
              <button className="mt-4 md:mt-0 bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">Apply Now</button>
            </li>
            <li className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row md:items-center justify-between hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
              <div>
                <h3 className="font-semibold text-lg text-orange-600">Logistics Coordinator</h3>
                <p className="text-gray-700">Manage supply chain and delivery logistics for timely project completion. <b>Requirements:</b> 1+ year experience, organizational skills.</p>
              </div>
              <button className="mt-4 md:mt-0 bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">Apply Now</button>
            </li>
          </ul>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Our Culture & Benefits</h2>
          <p className="text-lg text-gray-700">
            We foster a culture of respect, teamwork, and innovation. Our employees enjoy flexible work arrangements, regular team-building activities, and a safe, modern workplace. We celebrate diversity and encourage everyone to bring their unique perspectives to the table.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Employee Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg text-center animate-fade-in-up">
                <div className="text-xl font-bold text-orange-600 mb-2">{t.name}</div>
                <div className="text-sm text-gray-500 mb-2">{t.position}</div>
                <p className="text-gray-700">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
