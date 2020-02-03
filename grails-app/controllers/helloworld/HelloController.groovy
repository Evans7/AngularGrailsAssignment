package helloworld

import grails.converters.JSON

class HelloController {

    def index() {
        def things=Hello.list()
      //  render file: 'webapp/index.html', contentType: 'text/html'
      //   render(view:'index',model:[things:things]
      //  render([values:things]) as JSON
        def responseData = [
                'results': things,
                'status': things ? "OK" : "Nothing present"
        ]
        render responseData as JSON
    }
    def random() {

    }
}
