import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, Edit3, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getHeading, updateHeading } from '../services/api';

const AdminPage: React.FC = () => {
  const [heading, setHeading] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [originalHeading, setOriginalHeading] = useState('');

  useEffect(() => {
    const fetchHeading = async () => {
      try {
        const data = await getHeading();
        if (data) {
          setHeading(data);
          setOriginalHeading(data);
        }
      } catch (error) {
        console.error('Error fetching heading:', error);
        toast.error('Failed to load heading');
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeading();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!heading.trim()) {
      toast.error('Heading cannot be empty');
      return;
    }

    setSaving(true);
    try {
      await updateHeading(heading);
      setOriginalHeading(heading);
      setIsEditing(false);
      toast.success('Heading updated successfully!');
    } catch (error) {
      console.error('Error saving heading:', error);
      toast.error('Failed to save heading');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setHeading(originalHeading);
    setIsEditing(false);
  };

  const hasChanges = heading !== originalHeading;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Site</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-semibold text-gray-900">Content Management</h1>
            </div>
            <div className="flex items-center space-x-2">
              
              <span className="text-gray-700 font-medium">Admin Panel</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Edit Landing Page Content</h2>
                <p className="text-gray-600 mt-1">
                  Update the main heading that appears on the Company landing page
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {hasChanges && (
                  <div className="flex items-center space-x-1 text-amber-600">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">Unsaved changes</span>
                  </div>
                )}
                {!hasChanges && !isEditing && (
                  <div className="flex items-center space-x-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Saved</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Heading
                </label>
                <div className="relative">
                  <textarea
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    disabled={!isEditing}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg resize-none transition-colors ${
                      isEditing 
                        ? 'border-orange-300 focus:border-orange-500 focus:ring-orange-500' 
                        : 'border-gray-300 bg-gray-50'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    placeholder="Enter the main heading for the landing page..."
                  />
                  {isEditing && (
                    <div className="absolute top-2 right-2">
                      <Edit3 className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  This heading will appear prominently on the landing page. Words like "Revenue", "Management", and "Marketing" will be highlighted in orange.
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
                <div className="flex space-x-3">
                  {isEditing ? (
                    <>
                      <button
                        onClick={handleCancel}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSave}
                        disabled={isSaving || !hasChanges}
                        className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        {isSaving ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            <span>Saving...</span>
                          </>
                        ) : (
                          <>
                            <Save className="w-4 h-4" />
                            <span>Save</span>
                          </>
                        )}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={handleEdit}
                      className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Preview</h3>
            <p className="text-gray-600 mt-1">This is how the heading will appear on the landing page</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {heading.split(' ').map((word, index) => {
                  const highlightWords = ['Revenue', 'Management,', 'Marketing'];
                  const isHighlighted = highlightWords.some(hw => word.includes(hw.replace(',', '')));
                  return (
                    <span key={index} className={isHighlighted ? 'text-amber-500' : 'text-gray-900'}>
                      {word}{index < heading.split(' ').length - 1 ? ' ' : ''}
                    </span>
                  );
                })}
              </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;