#!/bin/bash

# Test script for Task Master Windsurf integration
# Tests the basic commands using our wrapper script

echo "=== Testing Task Master Windsurf Integration ==="
echo ""

# Project directory - fix the path handling for spaces
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WRAPPER_SCRIPT="${PROJECT_DIR}/scripts/task-wrapper.sh"

echo "Testing task list command..."
task-master list
echo ""

echo "Testing task show command..."
task-master show 1.5
echo ""

echo "Testing expand command with wrapper (Windsurf integration)..."
"${WRAPPER_SCRIPT}" expand --id=1.5
echo ""

echo "Task Master integration test complete!"
