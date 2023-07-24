package main

import (
	"flag"
	"fmt"
	"net/http"
)

func handleHtml(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}
	http.ServeFile(w, r, "index.html")
}

func main() {
	loggerEnabled := flag.Bool("ip-logging", false, "Enable IP logging")
	flag.Parse()

	mux := http.NewServeMux()

	mux.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	mux.HandleFunc("/", handleHtml)
	wrappedMux := NewLogger(mux, *loggerEnabled)

	fmt.Println("To enter Portfolio click this link: http://localhost:3000/")
	http.ListenAndServe(":3000", wrappedMux)
}
