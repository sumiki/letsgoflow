package main

import (
	"fmt"
	"net/http"
	"log"
	"strings"
	"html"
	"html/template"
	"google.golang.org/appengine"
)

func main() {
	http.HandleFunc("/a", handle_a )
	http.HandleFunc("/b", handle_b )
	http.HandleFunc("/c", handle_c )
	http.HandleFunc("/", handle_home)
	http.HandleFunc("/.*", handle_home)
	appengine.Main()
}

func handle_home(w http.ResponseWriter, r *http.Request) {
	log.Printf("Home Accessed")
	log.Printf(r.URL.Path)
	log.Printf("Req: %s %s\n", r.Host, r.URL.Path)
	t, _ := template.ParseFiles("views/index.html")

	jsfile := r.URL.Path
	if jsfile == "/" {
		jsfile = "/index"
	} else if strings.Index(jsfile, ".") > -1 {
		splited := strings.Split(jsfile, ".")
		jsfile = splited[0]
	}
	data := struct {
		Jsfile string
	}{
		Jsfile: jsfile,
	}
	t.Execute(w, data)
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