# Frontend estático (HTML/CSS/JS puro, sem bundler): só precisa de um
# servidor de arquivos. nginx alpine é minúsculo e serve isso direto.
FROM nginx:alpine
COPY index.html script.js style.css ch1.png ch2.png ch3.png /usr/share/nginx/html/
EXPOSE 80
