FROM golang:alpine3.17
WORKDIR /app
COPY ["go.mod","go.sum","./"]
RUN go mod download
COPY *.go ./
RUN go build -o /my-go-srv
EXPOSE 8080
CMD [ "/my-go-srv" ]