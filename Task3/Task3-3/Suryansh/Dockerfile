FROM node as builder

WORKDIR /build

COPY package*.json .
RUN npm install

COPY src/ src/
COPY myInfo.json myInfo.json
COPY routesInfo.json routesInfo.json
COPY tsconfig.json tsconfig.json
RUN npm run build

FROM node as runner

WORKDIR /app
COPY --from=builder build/package*.json .
COPY --from=builder build/node_modules node_modules
COPY --from=builder build/dist dist/
COPY --from=builder build/myInfo.json myInfo.json
COPY --from=builder build/routesInfo.json routesInfo.json

CMD [ "npm","start" ]
