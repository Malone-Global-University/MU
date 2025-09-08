#!/bin/bash

# Check if commit message is provided
if [ -z "$1" ]; then
  echo "Usage: ./git-auto.sh \"building site\""
  exit 1
fi

# Stage all changes
git add .

# Commit with provided message
git commit -m "$1"

# Push to the current branch
git push

echo "Changes added, committed, and pushed successfully!"
