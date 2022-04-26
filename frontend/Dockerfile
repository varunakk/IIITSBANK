# # Stage 1
FROM node:14 as build-stage

# WORKDIR /frontend
# COPY package.json .
# RUN npm install
# COPY . .

# ARG REACT_APP_API_BASE_URL
# ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

# RUN npm run build

# # Stage 2
# FROM nginx:1.17.0-alpine

# COPY --from=build-stage /frontend/build /usr/share/nginx/html
# EXPOSE $REACT_DOCKER_PORT

# CMD nginx -g 'daemon off;'
# #EXPOSE 3000 80

# #ENTRYPOINT ["nginx", "-g", "daemon off;"]
WORKDIR /frontend
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]
