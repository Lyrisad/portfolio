package main

import (
	"log"
	"net/http"
)

type Logger struct {
	handler http.Handler
	enabled bool
}

func (l *Logger) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if l.enabled {
		log.Printf("%s:    %s\n", r.URL.String(), r.RemoteAddr)
	}
	l.handler.ServeHTTP(w, r)
}

func NewLogger(handler http.Handler, enabled bool) *Logger {
	return &Logger{handler: handler, enabled: enabled}
}

// 10.10.5.39:8080
