FROM --platform=linux/amd64 node:21-alpine3.18 as builder
WORKDIR /app

ARG base_url
ENV VITE_random_Var=${base_url}
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM --platform=linux/amd64 nginx:1.25.4-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN chmod 755 -R /usr/share/nginx/html
COPY configs/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
