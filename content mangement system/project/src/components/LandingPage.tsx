import React, { useState, useEffect } from 'react';
import { Home, Settings, Play, ArrowRight, CheckCircle, TrendingUp, Users, BarChart3, Target, Zap } from 'lucide-react';
import { getHeading } from '../services/api';

const LandingPage: React.FC = () => {
  const [heading, setHeading] = useState('Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeading = async () => {
      try {
        const data = await getHeading();
        if (data) {
          setHeading(data);
        }
      } catch (error) {
        console.error('Error fetching heading:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeading();
  }, []);

  const formatHeading = (text: string) => {
    const words = text.split(' ');
    const highlightWords = ['Revenue', 'Management,', 'Marketing'];
    
    return words.map((word, index) => {
      const isHighlighted = highlightWords.some(hw => word.includes(hw.replace(',', '')));
      return (
        <span key={index} className={isHighlighted ? 'text-amber-500' : 'text-gray-900'}>
          {word}{index < words.length - 1 ? ' ' : ''}
        </span>
      );
    });
  };

  const features = [
    {
      icon: "🚀",
      title: "Ready to Go Algos",
      description: "Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.",
      dotColor: "bg-emerald-500"
    },
    {
      icon: "💡",
      title: "Internal capability building",
      description: "Build internal capability for your team to understand and leverage AI tools effectively.",
      dotColor: "bg-yellow-500"
    },
    {
      icon: "📊",
      title: "Multi-source data ingestion",
      description: "Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.",
      dotColor: "bg-emerald-500"
    },
    {
      icon: "🏛️",
      title: "Stakeholder alignment",
      description: "No black box. Stakeholders understand the 'how', 'so what' and 'now what', leading to clear decision making trade offs.",
      dotColor: "bg-blue-500"
    },
    {
      icon: "💼",
      title: "Continuous engagement",
      description: "We engage for the long-term to enhance, course-correct, and adopt new models to continuously refine your work.",
      dotColor: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
               
              </div>
              
              <nav className="hidden md:flex space-x-8">
                <a href="#" className=" ml-8 text-gray-900 hover:text-orange-600 transition-colors font-medium">Home</a>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">Services</a>
                <a href="/admin" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">Admin</a>
              </nav>
                
            </div>
            <div className="flex items-center space-x-4">
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {isLoading ? (
                    <div className="animate-pulse">
                      <div className="h-8 bg-gray-200 rounded mb-2"></div>
                      <div className="h-8 bg-gray-200 rounded mb-2"></div>
                      <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  ) : (
                    formatHeading(heading)
                  )}
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Powerful AI solutions that go beyond mere data crunching and applications. 
                  Unleash the power of AI to transform business outcomes that power you 
                  towards your goals.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Top Row - 2 Cards */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl">
                  🚀
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Ready to Go Algos</h3>
              <p className="text-gray-600 leading-relaxed">
                We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl">
                  💡
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Internal capability building</h3>
              <p className="text-gray-600 leading-relaxed">
                We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.
              </p>
            </div>
          </div>

          

          {/* Bottom Row - 3 Cards */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl">
                  📊
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Multi-source data</h3>
              <p className="text-gray-600 leading-relaxed">
                Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl">
                  🏛️
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Stakeholder alignment</h3>
              <p className="text-gray-600 leading-relaxed">
                No black boxes. Stakeholders understand the "how", "so what" and "now what", leading to clear decision-making trade offs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl">
                  💼
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Continuous engagement</h3>
              <p className="text-gray-600 leading-relaxed">
                We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;