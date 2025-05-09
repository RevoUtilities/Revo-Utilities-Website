#!/bin/bash

# Task Master Wrapper Script
# This script provides a workaround for Task Master commands that require external API keys
# when working in the Windsurf environment with built-in LLM capabilities

COMMAND=$1
shift  # Remove the first argument (the command)
ARGS="$@"  # Capture all remaining arguments

# Project directory
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TASKS_DIR="$PROJECT_DIR/tasks"
TASKS_FILE="$TASKS_DIR/tasks.json"

# Function to handle commands that would normally require API keys
handle_ai_commands() {
    case "$COMMAND" in
        "analyse-complexity")
            echo "Running analyse-complexity in manual mode (Windsurf integration)"
            task-master list  # Show the task list instead
            ;;
        "expand")
            # Extract the task ID
            if [[ "$ARGS" =~ --id=([0-9.]+) ]]; then
                TASK_ID="${BASH_REMATCH[1]}"
                echo "Running expand for task $TASK_ID in manual mode (Windsurf integration)"
                echo "Please use Windsurf to expand this task manually."
                
                # Show the task details
                task-master show "$TASK_ID"
                
                # Instructions for manual expansion
                echo ""
                echo "To manually expand this task:"
                echo "1. Use Windsurf to help you break down this task"
                echo "2. Edit tasks.json manually to add subtasks"
                echo "3. Run 'task-master generate' to update task files"
            else
                echo "Error: Task ID is required. Use --id=<id>"
            fi
            ;;
        *)
            # Pass through to the original command
            task-master "$COMMAND" $ARGS
            ;;
    esac
}

# Main script logic
handle_ai_commands

# Exit with success
exit 0
