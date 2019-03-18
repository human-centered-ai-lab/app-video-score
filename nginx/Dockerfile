FROM nginx:alpine

MAINTAINER Heimo Müller "heimo.mueller@mac.com"

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]