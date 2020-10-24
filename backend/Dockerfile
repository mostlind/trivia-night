FROM golang:1.15-alpine AS build
WORKDIR /src
COPY . .
RUN go build -o /out/main .

FROM alpine 
COPY --from=build /out/main /
CMD [ "/main" ]
