#!/bin/bash

# Docker 빌드 스크립트
echo "Building Docker image for DogGain Forum..."

# 이미지 빌드
docker build -f docker/Dockerfile -t doggain-forum:latest .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    echo "Image name: doggain-forum:latest"
else
    echo "❌ Docker build failed!"
    exit 1
fi