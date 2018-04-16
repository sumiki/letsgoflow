package main

import (
	"fmt"
	"net/http"
	"log"
	"html"
	"html/template"
	"google.golang.org/appengine"
)

func main() {
	http.HandleFunc("/", handle_home)
	http.HandleFunc("/a", handle_a )
	http.HandleFunc("/b", handle_b )
	http.HandleFunc("/c", handle_c )
	appengine.Main()
}

func handle_home(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("views/index.html")
	t.Execute(w, nil)
}



func handle_a(w http.ResponseWriter, r *http.Request) {
	const s = `"TEST" <hoho@hoho>`
	fmt.Fprintln(w, html.EscapeString(s))
}

func handle_b(w http.ResponseWriter, r *http.Request) {
	const tpl = `
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>{{.Title}}</title>
	</head>
	<body>
		{{range .Items}}<div>{{ . }}</div>{{else}}<div><strong>no rows</strong></div>{{end}}
	</body>
</html>`

	check := func(err error) {
		if err != nil {
			log.Fatal(err)
		}
	}
	t, err := template.New("webpage").Parse(tpl)
	check(err)

	data := struct {
		Title string
		Items []string
	}{
		Title: "My page",
		Items: []string{
			"My photos",
			"My blog",
		},
	}

	err = t.Execute(w, data)
	check(err)

}

func handle_c(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Home")
}