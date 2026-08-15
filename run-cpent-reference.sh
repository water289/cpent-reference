#!/usr/bin/env bash
set -e

PROJECT_DIR="/home/saad/Desktop/cpent-reference"

if [ ! -d "$PROJECT_DIR" ]; then
  echo "Error: Project directory not found at $PROJECT_DIR"
  exit 1
fi

cd "$PROJECT_DIR"

if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npm install
fi

case "${1:-dev}" in
  build)
    echo "Syncing toolkit data..."
    node scripts/parseSourceFiles.cjs
    echo "Building production bundle..."
    npx vite build
    echo ""
    echo "Production build complete in $PROJECT_DIR/dist/"
    echo "Serve with: npx vite preview"
    ;;
  dev)
    echo "Syncing toolkit data..."
    node scripts/parseSourceFiles.cjs
    echo "Starting CPENT Reference dev server..."
    echo "Open your browser to: http://localhost:3000/cpent-reference/"
    echo "Press Ctrl+C to stop."
    echo ""
    npm run dev
    ;;
  preview)
    echo "Starting preview server..."
    npx vite preview
    ;;
  *)
    echo "Usage: $0 {dev|build|preview}"
    echo "  dev    - Start development server (default)"
    echo "  build  - Build production bundle"
    echo "  preview - Serve production build locally"
    exit 1
    ;;
esac
