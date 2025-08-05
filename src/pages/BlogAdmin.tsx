import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBlogPost } from '../utils';
import Button from '../components/ui/Button';
import { Upload, Image, X, Plus } from 'lucide-react';
import { logger } from '../utils/logger';

// Pre-defined list of authors - REVO Utilities team members
const AUTHORS = [
  {
    name: 'Ryan Hughes-Francis',
    avatarUrl: '/logos/Revo/team/optimized/ryan-revo.webp'
  },
  {
    name: 'Graham Fisher',
    avatarUrl: '/logos/Revo/team/optimized/graham-revo.webp'
  },
  {
    name: 'Jade Brown',
    avatarUrl: '/logos/Revo/team/optimized/jade-revo.webp'
  },
  {
    name: 'Lisa McKay',
    avatarUrl: '/logos/Revo/team/optimized/lisa-revo.webp'
  },
  {
    name: 'Cassidy Erwin',
    avatarUrl: '/logos/Revo/team/optimized/cassidy-revo.webp'
  }
];

// Pre-defined list of common tags
const COMMON_TAGS = [
  'energy', 'cost-saving', 'efficiency', 'utilities', 'electricity',
  'gas', 'water', 'telecoms', 'sustainability', 'green',
  'business', 'uk-market', 'tariffs', 'guides', 'savings'
];

const BlogAdmin = () => {
  const navigate = useNavigate();

  // State for the blog post form
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: AUTHORS[0],
    imageUrl: '',
    tags: [] as string[]
  });

  const [isPublishing, setIsPublishing] = useState(false);
  const [error, setError] = useState('');
  const [customTag, setCustomTag] = useState('');

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle author selection
  const handleAuthorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedAuthor = AUTHORS.find(author => author.name === e.target.value);
    setFormData({
      ...formData,
      author: selectedAuthor || AUTHORS[0]
    });
  };

  // Handle tag selection
  const handleTagClick = (tag: string) => {
    if (formData.tags.includes(tag)) {
      // Remove tag if already selected
      setFormData({
        ...formData,
        tags: formData.tags.filter(t => t !== tag)
      });
    } else {
      // Add tag if not already selected
      setFormData({
        ...formData,
        tags: [...formData.tags, tag]
      });
    }
  };

  // Handle custom tag addition
  const handleAddCustomTag = () => {
    if (customTag.trim() && !formData.tags.includes(customTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, customTag.trim()]
      });
      setCustomTag('');
    }
  };

  // Handle custom tag input
  const handleCustomTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomTag(e.target.value);
  };

  // Handle custom tag input keypress
  const handleCustomTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCustomTag();
    }
  };

  // Handle form submission to create a blog post
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!formData.title.trim()) {
      setError('Please enter a blog title');
      return;
    }

    if (!formData.excerpt.trim()) {
      setError('Please enter a blog excerpt');
      return;
    }

    if (!formData.content.trim()) {
      setError('Please enter blog content');
      return;
    }

    setIsPublishing(true);
    setError('');

    try {
      // Create blog post with form data
      const newPost = await createBlogPost({
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        imageUrl: formData.imageUrl,
        tags: formData.tags,
        author: formData.author
      });

      // Navigate to the new blog post
      navigate(`/insights/${newPost.slug}`);
    } catch (err) {
      setError('Failed to publish post. Please try again.');
      logger.error('Failed to publish blog post', 'BlogAdmin', err);
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--primary-color)] to-[var(--primary-dark)] text-gray-800 py-6 md:py-20">
      {/* Main Content Area */}
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-lg relative z-10">
            {/* Form Header */}
            <div className="mb-5 pb-3 border-b">
              <h1 className="text-2xl sm:text-3xl font-bold mb-1 text-gray-800">
                Create New Blog Post
              </h1>
              <p className="text-gray-500 text-sm">
                Create and publish new content to your blog
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">Blog Details</h3>

                  {/* Author Selection */}
                  <div className="mb-4">
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                      Author
                    </label>
                    <select
                      id="author"
                      name="author"
                      value={formData.author.name}
                      onChange={handleAuthorChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] shadow-sm"
                    >
                      {AUTHORS.map(author => (
                        <option key={author.name} value={author.name}>
                          {author.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Blog Title */}
                  <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Blog Title*
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter an engaging title for your blog post"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] shadow-sm"
                      required
                    />
                  </div>

                  {/* Blog Excerpt */}
                  <div className="mb-4">
                    <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                      Short Excerpt*
                    </label>
                    <textarea
                      id="excerpt"
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleChange}
                      placeholder="Write a brief summary of your blog post (1-2 sentences)"
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] shadow-sm resize-none"
                      required
                    />
                  </div>

                  {/* Featured Image URL */}
                  <div>
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                      Featured Image URL
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] shadow-sm"
                      />
                      <button
                        type="button"
                        className="bg-gray-100 px-3 py-2 border border-gray-300 border-l-0 rounded-r-lg text-gray-500 hover:bg-gray-200"
                        onClick={() => window.open(formData.imageUrl, '_blank')}
                        disabled={!formData.imageUrl}
                      >
                        <Image size={18} />
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Enter a URL to your featured image (recommended size: 1200x600)
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tags
                    </label>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {formData.tags.map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[var(--primary-color)] text-white"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleTagClick(tag)}
                            className="ml-1 flex-shrink-0 h-4 w-4 rounded-full inline-flex items-center justify-center text-white focus:outline-none"
                          >
                            <X size={10} />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        value={customTag}
                        onChange={handleCustomTagChange}
                        onKeyPress={handleCustomTagKeyPress}
                        placeholder="Add custom tag..."
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] shadow-sm text-sm"
                      />
                      <button
                        type="button"
                        onClick={handleAddCustomTag}
                        className="bg-gray-100 px-2 py-2 border border-gray-300 border-l-0 rounded-r-lg text-gray-700 hover:bg-gray-200"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 mb-1">Common tags (click to select):</p>
                      <div className="flex flex-wrap gap-1">
                        {COMMON_TAGS.map(tag => (
                          <button
                            type="button"
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            className={`px-2 py-1 rounded-full text-xs font-medium transition-colors ${formData.tags.includes(tag)
                              ? 'bg-[var(--primary-color)] text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">Blog Content</h3>

                  {/* Blog Content */}
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                      Blog Content* (HTML supported)
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      placeholder="<p>Write your blog content here. HTML tags are supported for formatting.</p>"
                      rows={16}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] shadow-sm font-mono text-sm"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      You can use HTML tags like &lt;p&gt;, &lt;h2&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, etc.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3 flex justify-end border-t">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<Upload size={18} />}
                  disabled={isPublishing}
                  className="min-h-[44px]"
                >
                  {isPublishing ? 'Publishing...' : 'Publish Blog Post'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;