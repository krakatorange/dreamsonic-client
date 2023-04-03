FROM node:alpine

ENV DATABASE_URL postgres://postgres:masterpostgres@antisonnik.cuwp0bgaaogi.us-east-1.rds.amazonaws.com:5432/antisonnik_dev
ENV DATABASE_HOST antisonnik.cuwp0bgaaogi.us-east-1.rds.amazonaws.com
ENV DATABASE_NAME antisonnik_dev
ENV DATABASE_USER postgres
ENV DATABASE_PASSWORD masterpostgres
ENV DATABASE_PORT 5432
ENV AWS_APIGATEWAY_LAMBDA_CHATGPT_API_KEY BJFA0dYW2u60luG7p9yZJ77nmcY7VONw8QLPZ8oz
ENV AWS_APIGATEWAY_LAMBDA_CHATGPT_ENDPOINT https://2t9vfabjhb.execute-api.us-east-1.amazonaws.com/prod
ENV REACT_APP_DOMAIN 127.0.0.1

WORKDIR /app
COPY package.json ./
COPY ./ ./
RUN yarn install
ENV NODE_OPTIONS="--openssl-legacy-provider"
EXPOSE 3000
CMD ["yarn", "start"]