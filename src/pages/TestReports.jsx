import React, { useState } from 'react';
import { FileText, Download, Calendar, Shield, Upload, X } from 'lucide-react';

const TestReports = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadData, setUploadData] = useState({
    title: '',
    category: 'quality',
    file: null
  });
  const [imageModal, setImageModal] = useState({ open: false, src: '', title: '', type: '' });

  const categories = [
    { id: 'all', name: 'All Reports' },
    { id: 'quality', name: 'Quality Control' },
    { id: 'safety', name: 'Safety Certificates' },
    { id: 'environmental', name: 'Environmental' },
    { id: 'iso', name: 'ISO Certifications' }
  ];

  const reports = [
    {
      id: 1,
      title: 'Compressive Strength Test Report - Cement Bricks',
      category: 'quality',
      date: '2024-01-15',
      type: 'PDF',
      size: '2.3 MB',
      description: 'Comprehensive compressive strength analysis of cement bricks batch CB-2024-001',
      file: '/test-reports/strength-test.pdf'
    },
    {
      id: 2,
      title: 'ISO 9001:2015 Quality Management Certificate',
      category: 'iso',
      date: '2024-01-10',
      type: 'PDF',
      size: '1.8 MB',
      description: 'Official ISO certification for quality management systems',
      file: '/test-reports/iso-certificate.pdf'
    },
    {
      id: 3,
      title: 'Flyash Brick Water Absorption Test',
      category: 'quality',
      date: '2024-01-08',
      type: 'DOCX',
      size: '1.5 MB',
      description: 'Water absorption rate testing for flyash bricks production batch FB-2024-003',
      file: '/test-reports/flyash-absorption.docx'
    },
    {
      id: 4,
      title: 'Environmental Impact Assessment Report',
      category: 'environmental',
      date: '2024-01-05',
      type: 'PDF',
      size: '4.2 MB',
      description: 'Environmental compliance and impact assessment for manufacturing facility',
      file: '/test-reports/environmental-impact.pdf'
    },
    {
      id: 5,
      title: 'Paver Block Durability Test Results',
      category: 'quality',
      date: '2024-01-03',
      type: 'PDF',
      size: '3.1 MB',
      description: 'Durability and wear resistance testing for interlocking paver blocks',
      file: '/test-reports/paver-durability.pdf'
    },
    {
      id: 6,
      title: 'Safety Compliance Certificate',
      category: 'safety',
      date: '2024-01-01',
      type: 'JPG',
      size: '0.8 MB',
      description: 'Workplace safety and occupational health compliance certificate',
      file: '/test-reports/safety-certificate.jpg'
    }
  ];

  const filteredReports = selectedCategory === 'all' 
    ? reports 
    : reports.filter(report => report.category === selectedCategory);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadData({ ...uploadData, file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the file upload to your server
    console.log('Upload data:', uploadData);
    setShowUploadModal(false);
    setUploadData({ title: '', category: 'quality', file: null });
  };

  const getFileIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return '📄';
      case 'docx':
        return '📝';
      case 'jpg':
      case 'png':
        return '🖼️';
      default:
        return '📄';
    }
  };

  const handleView = (report) => {
    const type = report.type.toLowerCase();
    if (["jpg", "jpeg", "png"].includes(type)) {
      setImageModal({ open: true, src: report.file, title: report.title, type: 'image' });
    } else if (type === 'pdf') {
      setImageModal({ open: true, src: report.file, title: report.title, type: 'pdf' });
    } else if (type === 'docx') {
      setImageModal({ open: true, src: report.file, title: report.title, type: 'docx' });
    }
  };

  const handleDownload = (report) => {
    const link = document.createElement('a');
    link.href = report.file;
    link.download = report.file.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen relative">
      {/* Hero Section (visually appealing) */}
      <section
        className="relative h-[220px] md:h-[300px] flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/261751/pexels-photo-261751.jpeg)', // Paper and pen image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Test Reports & Certifications</h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow-lg">
            Access our comprehensive quality testing reports and official certifications for Caliber Infra products.
          </p>
        </div>
      </section>
      {/* Add extra space below hero section */}
      <div className="h-8 md:h-12"></div>

      {/* Admin Upload Section */}
      {/* <section className="py-8 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Document Management</h2>
              <p className="text-gray-600">Upload and manage certification documents</p>
            </div>
            <button 
              onClick={() => setShowUploadModal(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <Upload className="mr-2 h-5 w-5" />
              Upload Document
            </button>
          </div>
        </div>
      </section> */}

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReports.map((report) => (
              <div key={report.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl mb-2">{getFileIcon(report.type)}</div>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                    {report.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{report.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{report.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(report.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{report.size}</span>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                    onClick={() => handleDownload(report)}
                  >
                    <Download className="mr-1 h-4 w-4" />
                    Download
                  </button>
                  <button
                    className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    onClick={() => handleView(report)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Quality Standards</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We adhere to the highest industry standards and undergo regular testing to ensure consistent quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">BIS Standards</h3>
              <p className="text-gray-600">All products meet Bureau of Indian Standards requirements</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO Certified</h3>
              <p className="text-gray-600">ISO 9001:2015 quality management system certified</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Regular Testing</h3>
              <p className="text-gray-600">Continuous quality monitoring and batch testing</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lab Verified</h3>
              <p className="text-gray-600">Third-party laboratory verification and certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Upload Document</h3>
              <button 
                onClick={() => setShowUploadModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Document Title
                </label>
                <input
                  type="text"
                  value={uploadData.title}
                  onChange={(e) => setUploadData({ ...uploadData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={uploadData.category}
                  onChange={(e) => setUploadData({ ...uploadData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="quality">Quality Control</option>
                  <option value="safety">Safety Certificates</option>
                  <option value="environmental">Environmental</option>
                  <option value="iso">ISO Certifications</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Document File (PDF, DOC, JPG, PNG)
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* File Modal (Image, PDF, DOCX) */}
      {imageModal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative shadow-2xl min-h-[300px] flex flex-col">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setImageModal({ open: false, src: '', title: '', type: '' })}
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{imageModal.title}</h3>
            {imageModal.type === 'image' && (
              <img src={imageModal.src} alt={imageModal.title} className="w-full rounded shadow" />
            )}
            {imageModal.type === 'pdf' && (
              <iframe
                src={imageModal.src}
                title={imageModal.title}
                className="w-full h-[60vh] rounded border"
                frameBorder="0"
              />
            )}
            {imageModal.type === 'docx' && (
              <div className="flex flex-col items-center justify-center h-40 text-gray-700">
                <p className="mb-2">Preview not available for Word documents.</p>
                <a
                  href={imageModal.src}
                  download
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Download File
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestReports;
