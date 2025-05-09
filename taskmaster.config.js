/**
 * Task Master Configuration File
 * 
 * This file configures the Task Master workflow for Revo Utilities
 */

module.exports = {
  // Project Information
  project: {
    name: 'Revo Utilities',
    description: 'Web application with various utilities',
    version: '1.0.0',
  },
  
  // Task Settings
  tasks: {
    directory: 'tasks', // Where task files are stored
    file: 'tasks/tasks.json',
    statuses: ['pending', 'in-progress', 'done', 'deferred', 'cancelled'],
    priorities: ['low', 'medium', 'high', 'critical'],
    defaultPriority: 'medium',
  },
  
  // Development Workflow Settings
  workflow: {
    requireDependencyCheck: true, // Prevent working on tasks with incomplete dependencies
    enforceTaskOrder: true, // Encourage working on tasks in order of ID when possible
    autoGenerateTaskFiles: true, // Regenerate task files when tasks.json changes
    defaultPriority: 'medium',
    statuses: ['pending', 'in-progress', 'done', 'deferred', 'cancelled'],
    useAIFeatures: false, // Disable AI features that require external API keys
  },
  
  // Expansion Settings
  expansion: {
    defaultSubtaskCount: 5, // Default number of subtasks when expanding
    useResearch: false, // Disable AI research capabilities for task expansion
    complexityThreshold: 7, // Tasks with complexity above this will be recommended for expansion
    manualExpansionMode: true, // Enable manual expansion mode without AI
  },
  
  // AI Model Settings (disabled - using Windsurf's built-in LLM capabilities)
  ai: {
    enabled: false, // Disable external AI services
    main_model: 'windsurf-internal', // Placeholder for Windsurf's internal model
    research_model: 'windsurf-internal',
    fallback_model: 'windsurf-internal',
  },
  
  // Display Settings
  display: {
    theme: 'default',
    show_descriptions: true,
    show_dependencies: true,
  },
  
  // Integration Settings
  integrations: {
    // No external API integrations needed
    windsurf: {
      enabled: true, // Using Windsurf's built-in capabilities
    }
  },
  
  // Hooks (custom scripts to run at various points in the workflow)
  hooks: {
    // Example hook that runs before marking a task as done
    // beforeTaskComplete: 'scripts/verify-task.js',
  }
};
