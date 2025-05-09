// Blog service for fetching and managing blog posts
export {};

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl?: string;
  tags: string[];
  author: {
    name: string;
    avatarUrl?: string;
  };
}

// Sample initial blog posts
const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How to Reduce Your Business Energy Costs',
    slug: 'reduce-business-energy-costs',
    excerpt: 'Practical tips for UK businesses to lower their energy bills and improve efficiency.',
    content: `
      <i>Energy costs represent a significant expense for UK businesses. With prices continuing to rise, finding ways to reduce consumption and improve efficiency is more important than ever.</i>
      
      <h2>Rising Energy Costs</h2>
      <p>UK businesses are facing unprecedented energy price increases. These rising costs directly impact your bottom line and can force difficult decisions about operations, staffing, and growth plans. For many companies, energy now represents one of the largest operational expenses after payroll.</p>
      
      <h2>The True Cost of Inaction</h2>
      <p>Failing to address energy efficiency doesn't just mean higher bills today—it means increasingly unsustainable costs in the future. While your competitors implement energy-saving measures and reduce their operational expenses, inaction puts you at a competitive disadvantage. Every month of delay means thousands of pounds wasted on inefficient systems and practices that could be optimised.</p>
      
      <h2>Strategic Energy Management</h2>
      <p>Taking control of your energy consumption requires a strategic approach. Here are the most effective ways to reduce your business energy costs:</p>
      
      <h3>1. Conduct an Energy Audit</h3>
      <p>The first step in reducing energy costs is understanding how and where your business uses energy. A professional energy audit can identify inefficiencies and provide targeted recommendations.</p>
      <ul>
        <li>Identifies specific areas of energy waste</li>
        <li>Provides prioritized recommendations based on ROI</li>
        <li>Creates a baseline for measuring improvement</li>
      </ul>
      
      <h3>2. Upgrade to Energy-Efficient Equipment</h3>
      <p>Modern, energy-efficient equipment may require an upfront investment but will save money in the long run. Look for the Energy Star rating when purchasing new equipment.</p>
      <ul>
        <li>Reduces operational costs over equipment lifetime</li>
        <li>Often qualifies for tax incentives and rebates</li>
        <li>Typically offers improved performance and reliability</li>
      </ul>
      
      <h3>3. optimise Heating and Cooling</h3>
      <p>Heating and cooling typically account for a large portion of energy usage. Regular maintenance of HVAC systems, proper insulation, and programmable thermostats can significantly reduce these costs.</p>
      <ul>
        <li>Schedule regular maintenance to ensure optimal efficiency</li>
        <li>Install programmable thermostats to automate temperature control</li>
        <li>Improve insulation to reduce heating and cooling losses</li>
      </ul>
      
      <h3>4. Switch to LED Lighting</h3>
      <p>LED lights use up to 75% less energy than traditional incandescent bulbs and last much longer. This simple change can lead to substantial savings over time.</p>
      <ul>
        <li>Uses up to 75% less energy than traditional lighting</li>
        <li>Lasts 25 times longer than incandescent bulbs</li>
        <li>Requires minimal maintenance and replacement costs</li>
      </ul>
      
      <h3>5. Negotiate Better Utility Rates</h3>
      <p>Many businesses don't realise they can negotiate better rates with utility providers. Working with a utility broker like Revo Utilities can help you find the most competitive rates available.</p>
      <ul>
        <li>Access to exclusive deals not available to the general public</li>
        <li>Expert negotiation on your behalf with multiple suppliers</li>
        <li>Regular rate reviews to ensure you're always on the best tariff</li>
      </ul>
    `,
    date: '2025-05-01',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
    tags: ['energy', 'cost-saving', 'efficiency'],
    author: {
      name: 'Sarah Johnson',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    }
  },
  {
    id: '2',
    title: 'Sustainable Practices for Small Businesses',
    slug: 'sustainable-practices-small-businesses',
    excerpt: 'Discover actionable strategies to make your small business more environmentally friendly.',
    content: `
      <i>Implementing sustainable practices is not just good for the environment - it can also save money and attract eco-conscious customers. Here's how small businesses can get started.</i>
      
      <h2>Environmental Impact</h2>
      <p>Small businesses collectively have an enormous environmental footprint. From excessive waste generation to energy inefficiency and carbon emissions, even modest-sized companies contribute significantly to environmental degradation. Many business owners believe sustainability is only for large corporations with substantial resources.</p>
      
      <h2>The Hidden Costs</h2>
      <p>Beyond the environmental impact, unsustainable business practices carry significant hidden costs. Excessive energy use and waste directly impact your bottom line. Meanwhile, today's consumers increasingly favor eco-friendly businesses, with 73% of consumers willing to pay more for sustainable products. Companies that ignore this shift risk losing market share to more environmentally conscious competitors.</p>
      
      <h2>Practical Sustainability</h2>
      <p>Implementing sustainable practices doesn't require a complete business overhaul. Here are five practical approaches that small businesses can implement immediately:</p>
      
      <h3>1. Reduce Waste</h3>
      <p>Conduct a waste audit to identify areas for improvement. Implement recycling programs and switch to digital documentation to reduce paper waste.</p>
      
      <h3>2. Energy Efficiency</h3>
      <p>Use energy-efficient appliances and encourage staff to power down equipment when not in use. Consider installing smart power strips that cut power to idle devices.</p>
      
      <h3>3. Sustainable Suppliers</h3>
      <p>Partner with suppliers who prioritize sustainability. Look for local suppliers to reduce transportation emissions.</p>
      
      <h3>4. Green Products & Packaging</h3>
      <p>Offer eco-friendly products and use sustainable packaging materials. Communicate your green initiatives to customers.</p>
      
      <h3>5. Remote Work Options</h3>
      <p>Allowing employees to work from home when possible reduces commuting emissions and office energy consumption.</p>
    `,
    date: '2025-04-25',
    imageUrl: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e',
    tags: ['sustainability', 'small-business', 'green'],
    author: {
      name: 'Michael Chen',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    }
  },
  {
    id: '3',
    title: 'Understanding UK Energy Tariffs',
    slug: 'understanding-uk-energy-tariffs',
    excerpt: 'A comprehensive guide to navigating energy tariffs and choosing the best option for your business.',
    content: `
      <i>Understanding energy tariffs can be complex, but choosing the right one can lead to significant savings for your business. This guide breaks down the key concepts.</i>
      
      <h2>Tariff Complexity</h2>
      <p>The UK energy market offers dozens of different tariff structures, making it extremely difficult for business owners to determine which option provides the best value. With technical terminology, complex pricing models, and various contract terms, many businesses end up selecting inappropriate tariffs that cost them thousands of pounds in unnecessary expenses.</p>
      
      <h2>The Cost of Confusion</h2>
      <p>Choosing the wrong energy tariff isn't just a minor inconvenience—it's a significant financial liability. Research shows that over 70% of UK businesses are on suboptimal energy contracts, overpaying by an average of £1,500 annually. This problem compounds over time, as businesses locked into inappropriate long-term contracts face years of excessive costs with substantial early termination penalties.</p>
      
      <h2>Tariff Education</h2>
      <p>By understanding the fundamental components of energy tariffs, you can make informed decisions that align with your business's consumption patterns and financial goals. Here's what you need to know:</p>
      
      <h3>1. Types of Tariffs</h3>
      <p>Fixed-rate tariffs lock in a price for a set period, while variable tariffs fluctuate with market prices. There are also economy tariffs that offer cheaper rates during off-peak hours.</p>
      
      <h3>2. Standing Charges vs Unit Rates</h3>
      <p>Your bill consists of standing charges (a fixed daily fee) and unit rates (price per kWh of energy used). Compare both when evaluating tariffs.</p>
      
      <h3>3. Contract Length</h3>
      <p>Business energy contracts can range from 1-5 years. Longer contracts may offer price certainty but less flexibility if your needs change.</p>
      
      <h3>4. Green Tariffs</h3>
      <p>Many suppliers now offer tariffs sourced from renewable energy. While sometimes more expensive, they help meet sustainability goals.</p>
      
      <h3>5. Working with a Broker</h3>
      <p>Energy brokers like Revo Utilities can help navigate the complex market, comparing offers from multiple suppliers to find the best fit for your business needs and budget.</p>
    `,
    date: '2025-04-18',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tags: ['energy', 'tariffs', 'guide'],
    author: {
      name: 'Emma Rodriguez',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    }
  },
  {
    id: '4',
    title: 'Radio Teleswitching Service (RTS) Switch-Off: What You Need to Know',
    slug: 'radio-teleswitching-service-switch-off',
    excerpt: 'The BBC\'s Radio Teleswitching Service (RTS) will be switched off from 30 June 2025. Here\'s what it means for your electricity meter and how to prepare.',
    content: `
      <p>The Radio Teleswitching Service (RTS) is also known as the BBC\'s long wave signal. It\'s the same signal that powers long wave Radio 4, the shipping forecast, and even test cricket.</p>
      <p>Some electricity meters also use this signal. It lets them switch between peak and off-peak times, and control your heating and hot water.</p>
      <p><strong>The signal will be switched off from <b>30 June 2025</b>.</strong> This change is similar to the shift from terrestrial to digital TV – it\'s a nationwide upgrade to a new technology.</p>
      <p>We\'ve been getting in touch with everyone who has an RTS meter, as it\'ll need to be replaced. You\'ll find details on how to book a meter replacement in the letter or email we send you. It\'ll depend on the type of tariff you have:</p>
      <h3>If you\'re on the Economy 7 tariff</h3>
      <p>The Economy 7 tariff offers cheaper off-peak electricity overnight, and costs more during the day. If you\'re on this tariff, please <a href="https://www.example.com/book-meter-replacement" target="_blank" rel="noopener">visit our website</a> to book a meter replacement, or call us on <strong>0330 102 8819</strong> Monday to Friday, 9am to 5pm.</p>
      <h3>If you\'re on a different tariff to Economy 7</h3>
      <p>If you\'re on any other tariff, like Total Heat Total Control (THTC) or Economy 10, please call us on <strong>0330 102 8594</strong> to book a meter replacement. We\'re here Monday to Friday, 9am to 5pm.</p>
    `,
    date: '2025-06-01',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b',
    tags: ['RTS', 'radio teleswitch', 'metering', 'energy', 'tariffs', 'UK'],
    author: {
      name: 'REVO Utilities Team',
      avatarUrl: ''
    }
  }
];

// Function to fetch all blog posts
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  // In a real implementation, this would fetch from an API
  // For now, return the sample posts
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(INITIAL_BLOG_POSTS);
    }, 500);
  });
};

// Function to fetch a single blog post by slug
export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  // In a real implementation, this would fetch from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = INITIAL_BLOG_POSTS.find(p => p.slug === slug) || null;
      resolve(post);
    }, 500);
  });
};

// GPT integration for generating blog content
export const generateBlogPost = async (topic: string): Promise<Partial<BlogPost>> => {
  try {
    // Call our secure server-side API endpoint instead of OpenAI directly
    const response = await fetch('http://localhost:3001/api/generate-blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ topic })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to generate blog post');
    }
    
    const data = await response.json();
    
    return {
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      tags: data.tags,
      author: {
        name: 'AI Assistant',
        avatarUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9'
      }
    };
  } catch (error) {
    console.error('Error generating blog post:', error);
    throw new Error('Failed to generate blog post content');
  }
};

// Function to create a new blog post (would connect to backend in real implementation)
export const createBlogPost = async (postData: Partial<BlogPost>): Promise<BlogPost> => {
  // In a real implementation, this would send data to your backend
  const newPost: BlogPost = {
    id: Date.now().toString(),
    title: postData.title || 'Untitled Post',
    slug: postData.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') || `post-${Date.now()}`,
    excerpt: postData.excerpt || '',
    content: postData.content || '',
    date: new Date().toISOString(),
    imageUrl: postData.imageUrl,
    tags: postData.tags || [],
    author: postData.author || { name: 'AI Assistant', avatarUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9' }
  };
  
  // In a real implementation, you would save this to a database
  INITIAL_BLOG_POSTS.unshift(newPost);
  
  return newPost;
};