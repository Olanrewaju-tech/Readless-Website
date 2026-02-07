#!/bin/bash

echo "===================================="
echo " Readless Landing Page Setup"
echo "===================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    echo ""
    exit 1
fi

echo "Node.js version:"
node --version
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    echo "This may take 2-3 minutes..."
    echo ""
    npm install
    if [ $? -ne 0 ]; then
        echo ""
        echo "ERROR: Failed to install dependencies"
        exit 1
    fi
fi

echo ""
echo "===================================="
echo " Starting development server..."
echo "===================================="
echo ""
echo "Your site will open at:"
echo "http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev
