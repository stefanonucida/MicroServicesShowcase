#comments in docker must start at line beginning
FROM golang:alpine3.17
#This command tells docker that commands below have to be executed starting from this path!
WORKDIR /app
#so go.sum and go.mod will be copied in /app path
COPY ["go.mod","go.sum","./"]
RUN go mod download
COPY *.go ./
#this command will be build the solution in a file named my-go-srv
RUN go build -o /my-go-srv
EXPOSE 8080

#this point to an exutable entrypoint path
CMD [ "/my-go-srv" ]