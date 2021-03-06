new Vue({
   el: '#starting',
   delimiters: ['[[',']]'],
   data: {
   articles: [],
   loading: false,
   currentArticle: {},
   message: null,
   newArticle: { 'article_heading': null, 'article_body': null },
   timer: 3000
 },
 mounted: function() {
   this.getArticles();
   setInterval(function() {
     this.getArticles();
   }.bind(this), this.timer);
 },
 methods: {
  getArticles: function() {
  this.loading = true;
  this.$http.get('/api/article/').then((response) => {
        this.articles = response.data;
        this.loading = false;
      }).bind(this);
 },
 getArticle: function(id) {
  this.loading = true;
  this.$http.get('/api/article/' + id)
      .then((response) => {
        this.currentArticle = response.data;
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
        console.log(err);
      })
 },
 addArticle: function() {
  this.loading = true;
  this.$http.post('/api/article/',this.newArticle)
      .then((response) => {
        this.loading = false;
        this.getArticles();
      })
      .catch((err) => {
        this.loading = false;
        console.log(err);
      })
 },
 updateArticle: function() {
  this.loading = true;
  console.log(this.currentArticle);
  this.$http.put('/api/article/' + this.currentArticle.article_id + '/', this.currentArticle)
      .then((response) => {
        this.loading = false;
        this.currentArticle = response.data;
        this.getArticles();
      })
      .catch((err) => {
        this.loading = false;
        console.log(err);
      })
 },
 deleteArticle: function(id) {
  this.loading = true;
  this.$http.delete('/api/article/' + id )
      .then((response) => {
        this.loading = false;
        this.getArticles();
      })
      .catch((err) => {
        this.loading = false;
        console.log(err);
      })
 }
 },
});
