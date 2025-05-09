// Simple Express server to proxy OpenAI API requests
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// API endpoint for generating blog content
app.post('/api/generate-blog', async (req, res) => {
  try {
    const { topic } = req.body;
    
    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }
    
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional British English content writer specialising in utility services, energy efficiency, and cost-saving strategies for UK businesses."
        },
        {
          role: "user",
          content: `Write a comprehensive blog post about "${topic}" for UK business owners. Include a title, short excerpt, and detailed content with HTML formatting. Focus on practical advice and industry insights.`
        }
      ],
      temperature: 0.7
    });
    
    const content = response.choices[0].message.content;
    
    // Parse the content to extract title, excerpt, and body
    const titleMatch = content.match(/<title>(.*?)<\/title>/i) || content.match(/# (.*?)(\n|$)/);
    const excerptMatch = content.match(/<excerpt>(.*?)<\/excerpt>/i) || content.match(/## Summary\n\n(.*?)(\n|$)/);
    
    // Remove title and excerpt tags from content if they exist
    let htmlContent = content
      .replace(/<title>.*?<\/title>/i, '')
      .replace(/<excerpt>.*?<\/excerpt>/i, '')
      .trim();
    
    // Convert markdown to HTML if needed
    if (!htmlContent.includes('<p>')) {
      // This would be a simple markdown to HTML conversion
      // In a real implementation, you'd use a proper markdown parser
      htmlContent = htmlContent
        .replace(/# (.*?)(\n|$)/g, '<h1>$1</h1>')
        .replace(/## (.*?)(\n|$)/g, '<h2>$1</h2>')
        .replace(/### (.*?)(\n|$)/g, '<h3>$1</h3>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      htmlContent = `<p>${htmlContent}</p>`;
    }
    
    return res.json({
      title: titleMatch ? titleMatch[1] : `Article about ${topic}`,
      excerpt: excerptMatch ? excerptMatch[1] : `A comprehensive guide about ${topic} for UK businesses.`,
      content: htmlContent,
      tags: [topic.toLowerCase(), 'energy-efficiency', 'cost-saving']
    });
    
  } catch (error) {
    console.error('Error generating blog post:', error);
    return res.status(500).json({ error: 'Failed to generate blog content' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
