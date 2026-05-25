# AWS Live Translation Architecture

## Frontend
- HTML
- CSS
- JavaScript
- Browser SpeechRecognition API

## Backend
- Amazon API Gateway
- AWS Lambda
- Amazon Translate

## Translation Flow
User speaks Japanese → Browser converts speech to text → API Gateway sends request → Lambda processes translation → Amazon Translate converts to English → Browser displays English subtitles.