# _ = require('lodash')
# async = require('async')
# Promise = require('bluebird')

# handlebars = require('handlebars')
# $ = require('jquery.1')
# bigwheel = require('bigwheel')
# Tween = require('gsap')

# davis = require 'Davis'
Director = require 'director'



# document.write('hoge'); 

# cup1 = require('./cup1.coffee')
# console.log cup1
# cup1.alert
# console.log('foo')

# window.alert('hoge')




# # lodash examples
# ary1 = [1,2,3,4,5]
# ary2 = [5,2,10]
# # console.log(_.difference(ary1, ary2))
# # console.log(_.intersection(ary1, ary2))

# # _([1,2,3]).eachRight (i) ->
# #   console.log(i)
# # .value()

# evens = _.filter(ary1, (n) ->
#   return n % 2 == 0
# )
# console.log(evens)
# console.log(_.size(ary1))




# # async example
# async.series [
#   (callback) ->
#     setTimeout () ->
#       console.log('Hello ')
#       callback(null, 1)
#     , 500
#   ,
#   (arg1, callback) ->
#     setTimeout () ->
#       console.log('world!')
#     , 300
# ]




# # bluebird exapmle
# setTimeoutAsync = (delay) ->
#   return new Promise (resolve, reject) ->
#     setTimeout(resolve, delay)

# setTimeoutAsync(1000)
#   .then () ->
#     console.log('hello')
#   .catch (reason) ->
#     console.log(reason)









# Director example

# # gentle introduction1
# author = () ->
#   console.log 'author'

# books = () ->
#   console.log 'books'

# viewBook = (bookId) ->
#   console.log 'viewBook: bookId is populated: ' + bookId

# routes = 
#   '/author': author
#   '/books': [
#     books ->
#       console.log 'An inline route handler.'
#   ]
#   '/books/view/:bookId': viewBook
# router = Director.Router(routes)
# router.init();

# gentle introduction2
$('document').ready ->
  showAuthorInfo = ->
    console.log 'showAuthorInfo'

  listBooks = ->
    console.log 'listBooks'

  allroutes = ->
    route = window.location.hash.slice(2)
    sections = $('section')
    section = sections.filter('[data-route=' + route + ']')
    if section.length
      sections.hide 250
      section.show 250
  
  #define the routing table
  routes = {
    '/author': showAuthorInfo,
    '/books': listBooks
  }

  # instantiate the router
  router = Director.Router(routes)

  # a global configuration setting
  router.configure({
    on: allroutes
  })

  router.init()

