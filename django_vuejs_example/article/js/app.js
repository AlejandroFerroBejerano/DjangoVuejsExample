new Vue({
   el: ‘#starting’,
   delimiters: [‘${‘,’}’],
   data: {
   articles: [],
   loading: false,
   currentArticle: {},
   message: null,
   newArticle: { ‘article_heading’: null, ‘article_body’: null },
 },
 mounted: function() {
},
 methods: {
}
 });
