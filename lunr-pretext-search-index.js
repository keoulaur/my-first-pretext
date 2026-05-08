var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-chessboard-problems",
  "level": "1",
  "url": "sec-chessboard-problems.html",
  "type": "Section",
  "number": "1.1",
  "title": "Chessboard Problems",
  "body": " Chessboard Problems  This short lesson introduces perfect coverings of chessboards with dominoes.    A perfect covering is a placement of dominoes on the chessboard such that every square is covered exactly once.    There are two types of theorems here - one is existence, and the other is non-existence...   A chessboard.   Show that there exists a perfect covering of a chessboard    Check: Just cover it.      Show that if you remove the top left corner and the bottom right corner of a chessboard a perfect covering does not exist.    For a reminder of the terminology, see .  "
},
{
  "id": "def-perfect-covering",
  "level": "2",
  "url": "sec-chessboard-problems.html#def-perfect-covering",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A perfect covering is a placement of dominoes on the chessboard such that every square is covered exactly once.   "
},
{
  "id": "sec-chessboard-problems-5",
  "level": "2",
  "url": "sec-chessboard-problems.html#sec-chessboard-problems-5",
  "type": "Example",
  "number": "1.1.2",
  "title": "A <span class=\"process-math\">\\(10\\times 10 \\)<\/span> chessboard..",
  "body": " A chessboard.   Show that there exists a perfect covering of a chessboard    Check: Just cover it.   "
},
{
  "id": "sec-chessboard-problems-6",
  "level": "2",
  "url": "sec-chessboard-problems.html#sec-chessboard-problems-6",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "",
  "body": "  Show that if you remove the top left corner and the bottom right corner of a chessboard a perfect covering does not exist.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
