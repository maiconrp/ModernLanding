# Stage 1: Build the React application
FROM node:20-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the built application
FROM alpine:latest

RUN apk --no-cache add serve

WORKDIR /app

COPY --from=build /app/dist /app

EXPOSE 5173

CMD ["serve", "-s", ".", "-l", "5173"]