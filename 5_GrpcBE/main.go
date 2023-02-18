package main

import (
	"math/rand"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
)

var listeningUrl string = "http://localhost"
var listeningPort string = ":8080"

func main() {
	seedData()
	handleRequests()
}

func seedData(){
	rand.Seed(time.Now().UnixNano())
}

func handleRequests(){
	http.HandleFunc("/", homePage)
	http.HandleFunc("/getArticles", getArticles)
	fmt.Printf("web server is listening at %s%s\n",listeningUrl, listeningPort)
	fmt.Printf("get authors at %s%s%s",listeningUrl, listeningPort, "/getArticles\n")
	log.Fatal(http.ListenAndServe(listeningPort, nil))
}

func homePage(w http.ResponseWriter, r *http.Request){
	fmt.Fprint(w, "Welcome to the homepage")
	fmt.Println("endpoint hit: homepage")
}

func getArticles(w http.ResponseWriter, r *http.Request){ 
	fmt.Println("endpoint hit: gopage")
	randomNumber := rand.Intn(44)
	Articles = []Article{}
	for i:=0; i<randomNumber; i++ {
		Articles = append(Articles, Article{ 
			Title: fmt.Sprintf("Title: %d",i), 
			Author: fmt.Sprintf("Author: %d",i), 
			Link: fmt.Sprintf("https://link%d.com",i)})
	}
	json.NewEncoder(w).Encode(Articles)
}

type Article struct {
	Title string `json:"Title"`
	Author string `json:"Author"`
	Link string `json:"Link"`
}

var Articles [] Article



