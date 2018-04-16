// Copyright 2018 Google Inc. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file.

package main

import (
	"fmt"
	"net/http"

	"google.golang.org/appengine"
)

func main() {
	http.HandleFunc("/", handle_home)
	http.HandleFunc("/africa", handle_africa )
	appengine.Main()
}

func handle_home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "USA")
}

func handle_africa(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Africa")
}