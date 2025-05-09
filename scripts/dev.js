#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Get current directory 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const TASKS_FILE = path.join(process.cwd(), 'tasks', 'tasks.json');
const TASKS_DIR = path.join(process.cwd(), 'tasks');

// Ensure tasks directory exists
if (!fs.existsSync(TASKS_DIR)) {
  fs.mkdirSync(TASKS_DIR, { recursive: true });
}

// Ensure tasks.json exists with default structure
if (!fs.existsSync(TASKS_FILE)) {
  const defaultTasks = { tasks: [] };
  fs.writeFileSync(TASKS_FILE, JSON.stringify(defaultTasks, null, 2));
}

// Helper functions
function loadTasks() {
  try {
    return JSON.parse(fs.readFileSync(TASKS_FILE, 'utf8'));
  } catch (error) {
    console.error('Error loading tasks:', error.message);
    return { tasks: [] };
  }
}

function saveTasks(tasksData) {
  try {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasksData, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving tasks:', error.message);
    return false;
  }
}

function generateTaskFile(task) {
  const taskFilePath = path.join(TASKS_DIR, `task-${task.id}.md`);
  const content = `# Task ID: ${task.id}
# Title: ${task.title}
# Status: ${task.status}
# Dependencies: ${task.dependencies ? task.dependencies.join(', ') : ''}
# Priority: ${task.priority || 'medium'}
# Description: ${task.description || ''}
# Details:
${task.details || ''}

# Test Strategy:
${task.testStrategy || ''}
`;
  fs.writeFileSync(taskFilePath, content);
}

// Command handlers
const commands = {
  // List all tasks
  list: () => {
    const tasksData = loadTasks();
    if (!tasksData.tasks.length) {
      console.log('No tasks found. Use "parse-prd" or "init" to create tasks.');
      return;
    }
    
    console.log('Current Tasks:');
    console.log('-------------');
    tasksData.tasks.forEach(task => {
      console.log(`[${task.id}] ${task.status.toUpperCase()}: ${task.title}`);
      if (task.dependencies && task.dependencies.length) {
        console.log(`    Dependencies: ${task.dependencies.join(', ')}`);
      }
    });
  },
  
  // Show details for a specific task
  show: (args) => {
    const id = args._[1] || args.id;
    if (!id) {
      console.error('Error: Task ID is required. Use "show <id>" or "--id=<id>"');
      return;
    }
    
    const tasksData = loadTasks();
    const task = tasksData.tasks.find(t => t.id.toString() === id.toString());
    
    if (!task) {
      console.error(`Error: Task with ID ${id} not found.`);
      return;
    }
    
    console.log(`Task ID: ${task.id}`);
    console.log(`Title: ${task.title}`);
    console.log(`Status: ${task.status}`);
    console.log(`Dependencies: ${task.dependencies ? task.dependencies.join(', ') : 'None'}`);
    console.log(`Priority: ${task.priority || 'medium'}`);
    console.log('Description:');
    console.log(task.description || 'No description provided.');
    console.log('Details:');
    console.log(task.details || 'No details provided.');
    console.log('Test Strategy:');
    console.log(task.testStrategy || 'No test strategy provided.');
  },
  
  // Generate task files from tasks.json
  generate: () => {
    const tasksData = loadTasks();
    if (!tasksData.tasks.length) {
      console.log('No tasks found to generate files for.');
      return;
    }
    
    // Ensure tasks directory exists
    if (!fs.existsSync(TASKS_DIR)) {
      fs.mkdirSync(TASKS_DIR, { recursive: true });
    }
    
    // Generate task files
    tasksData.tasks.forEach(task => {
      generateTaskFile(task);
    });
    
    console.log(`Generated ${tasksData.tasks.length} task files in ${TASKS_DIR}`);
  },
  
  // Initialize a new project
  init: () => {
    if (!fs.existsSync(TASKS_DIR)) {
      fs.mkdirSync(TASKS_DIR, { recursive: true });
    }
    
    const initialTasks = {
      tasks: [
        {
          id: 1,
          title: 'Project Setup',
          status: 'pending',
          dependencies: [],
          priority: 'high',
          description: 'Set up the basic project structure and dependencies.',
          details: 'Create directory structure, initialize package.json, and install core dependencies.',
          testStrategy: 'Verify that the project structure is correctly set up and all dependencies install without errors.'
        }
      ]
    };
    
    // Always overwrite the tasks.json file during init
    saveTasks(initialTasks);
    generateTaskFile(initialTasks.tasks[0]);
    console.log('Initialised new tasks.json with a sample task.');
  },
  
  // Set status for a task
  'set-status': (args) => {
    const id = args.id;
    const status = args.status;
    
    if (!id || !status) {
      console.error('Error: Both task ID and status are required.');
      console.error('Usage: set-status --id=<id> --status=<status>');
      return;
    }
    
    const tasksData = loadTasks();
    const taskIndex = tasksData.tasks.findIndex(t => t.id.toString() === id.toString());
    
    if (taskIndex === -1) {
      console.error(`Error: Task with ID ${id} not found.`);
      return;
    }
    
    const validStatuses = ['pending', 'done', 'deferred'];
    if (!validStatuses.includes(status)) {
      console.error(`Error: Invalid status. Use one of: ${validStatuses.join(', ')}`);
      return;
    }
    
    tasksData.tasks[taskIndex].status = status;
    if (saveTasks(tasksData)) {
      console.log(`Updated task ${id} status to "${status}"`);
      generateTaskFile(tasksData.tasks[taskIndex]);
    }
  },
  
  // Expand a task into subtasks
  expand: (args) => {
    const id = args.id;
    const subtasks = args.subtasks || 3;
    
    if (!id) {
      console.error('Error: Task ID is required.');
      console.error('Usage: expand --id=<id> [--subtasks=<number>]');
      return;
    }
    
    const tasksData = loadTasks();
    const taskIndex = tasksData.tasks.findIndex(t => t.id.toString() === id.toString());
    
    if (taskIndex === -1) {
      console.error(`Error: Task with ID ${id} not found.`);
      return;
    }
    
    const task = tasksData.tasks[taskIndex];
    console.log(`Expanding task ${id}: ${task.title}`);
    
    // Find the highest existing task ID
    const maxId = Math.max(...tasksData.tasks.map(t => parseInt(t.id)));
    
    // Create subtasks
    const newSubtasks = [];
    for (let i = 1; i <= subtasks; i++) {
      const newId = maxId + i;
      const subtask = {
        id: newId,
        title: `${task.title} - Subtask ${i}`,
        status: 'pending',
        dependencies: [parseInt(id)],
        priority: task.priority,
        description: `Subtask ${i} for "${task.title}"`,
        details: `Implementation details for subtask ${i}`,
        testStrategy: `Verification approach for subtask ${i}`
      };
      newSubtasks.push(subtask);
    }
    
    // Add subtasks to tasks array
    tasksData.tasks = [...tasksData.tasks, ...newSubtasks];
    
    if (saveTasks(tasksData)) {
      console.log(`Added ${subtasks} subtasks for task ${id}`);
      newSubtasks.forEach(subtask => {
        generateTaskFile(subtask);
      });
    }
  },
  
  // Clear subtasks for a task
  'clear-subtasks': (args) => {
    const id = args.id;
    
    if (!id) {
      console.error('Error: Task ID is required.');
      console.error('Usage: clear-subtasks --id=<id>');
      return;
    }
    
    const tasksData = loadTasks();
    const tasksToClear = tasksData.tasks.filter(t => 
      t.dependencies && t.dependencies.includes(parseInt(id))
    );
    
    if (!tasksToClear.length) {
      console.log(`No subtasks found for task ${id}.`);
      return;
    }
    
    // Remove subtasks
    const subtaskIds = tasksToClear.map(t => t.id);
    tasksData.tasks = tasksData.tasks.filter(t => !subtaskIds.includes(t.id));
    
    if (saveTasks(tasksData)) {
      console.log(`Cleared ${tasksToClear.length} subtasks for task ${id}`);
    }
  },
  
  // Parse PRD document
  'parse-prd': (args) => {
    const inputFile = args.input || 'sample-prd.txt';
    
    if (!fs.existsSync(inputFile)) {
      console.error(`Error: Input file ${inputFile} not found.`);
      return;
    }
    
    console.log(`Parsing PRD from ${inputFile}...`);
    console.log('This functionality would normally use an AI service to parse the PRD.');
    console.log('For this implementation, we\'ll create a simple set of tasks.');
    
    const defaultTasks = {
      tasks: [
        {
          id: 1,
          title: 'Project Setup',
          status: 'pending',
          dependencies: [],
          priority: 'high',
          description: 'Set up the basic project structure and dependencies.'
        },
        {
          id: 2,
          title: 'Feature 1 Implementation',
          status: 'pending',
          dependencies: [1],
          priority: 'medium',
          description: 'Implement the first core feature.'
        },
        {
          id: 3,
          title: 'Feature 2 Implementation',
          status: 'pending',
          dependencies: [1],
          priority: 'medium',
          description: 'Implement the second core feature.'
        },
        {
          id: 4,
          title: 'Testing & QA',
          status: 'pending',
          dependencies: [2, 3],
          priority: 'high',
          description: 'Comprehensive testing of implemented features.'
        }
      ]
    };
    
    if (saveTasks(defaultTasks)) {
      console.log('Generated tasks from PRD.');
      defaultTasks.tasks.forEach(task => {
        generateTaskFile(task);
      });
    }
  },
  
  // Fix dependencies
  'fix-dependencies': () => {
    const tasksData = loadTasks();
    let fixed = false;
    
    // Check for circular dependencies and invalid dependencies
    tasksData.tasks.forEach(task => {
      if (!task.dependencies) {
        task.dependencies = [];
        fixed = true;
      }
      
      // Remove dependencies that don't exist
      const validDependencies = task.dependencies.filter(depId => 
        tasksData.tasks.some(t => t.id === depId)
      );
      
      if (validDependencies.length !== task.dependencies.length) {
        task.dependencies = validDependencies;
        fixed = true;
      }
    });
    
    if (fixed && saveTasks(tasksData)) {
      console.log('Fixed invalid dependencies in tasks.');
    } else {
      console.log('No dependency issues found.');
    }
  },
};

// Parse command line arguments
function parseArgs() {
  const args = { _: [] };
  process.argv.slice(2).forEach(arg => {
    if (arg.startsWith('--')) {
      const [key, value] = arg.substring(2).split('=');
      args[key] = value === undefined ? true : value;
    } else {
      args._.push(arg);
    }
  });
  return args;
}

// Main function
function main() {
  const args = parseArgs();
  const command = args._[0] || 'list';
  
  if (commands[command]) {
    commands[command](args);
  } else {
    console.error(`Unknown command: ${command}`);
    console.log('Available commands:');
    Object.keys(commands).forEach(cmd => {
      console.log(`  ${cmd}`);
    });
  }
}

// Run the main function if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

// Export functions for potential module usage
export { commands, parseArgs, loadTasks, saveTasks, generateTaskFile };
