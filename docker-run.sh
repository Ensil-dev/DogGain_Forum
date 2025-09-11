#!/bin/bash

# Docker 실행 스크립트
CONTAINER_NAME="doggain-forum"
IMAGE_NAME="doggain-forum:latest"
PORT=8080

echo "Starting DogGain Forum Docker container..."

# 기존 컨테이너가 실행 중이면 중지하고 제거
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping existing container..."
    docker stop $CONTAINER_NAME
fi

if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Removing existing container..."
    docker rm $CONTAINER_NAME
fi

# 새 컨테이너 실행
docker run -d \
    --name $CONTAINER_NAME \
    -p $PORT:80 \
    $IMAGE_NAME

if [ $? -eq 0 ]; then
    echo "✅ Container started successfully!"
    echo "🌐 Application is running at: http://localhost:$PORT"
    echo "📊 Container status:"
    docker ps -f name=$CONTAINER_NAME
else
    echo "❌ Failed to start container!"
    exit 1
fi