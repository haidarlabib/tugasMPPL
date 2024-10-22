// fungsi pemanggilan API dan menampilkan hasil menggunakan fetch
function eduNews(){
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('https://newsapi.org/v2/everything?apiKey=e78496aa34f54687b5fb824a75ebf5d3&q=' + inputKeyword.value)
    .then(res => res.json())
    .then(function(res){
      if(res.totalResults > 0){
        const news = res.articles;
        let cards = '';
        news.forEach(m => cards += showCards(m));
        const newsContainer = document.querySelector('.edunews-container');
        newsContainer.innerHTML = cards;
      }else{
        const newsError = document.querySelector('.edunews-container');
        const hasilError = `<h1 class="text-center">Data Tidak Ditemukan... :)</h1>`;
        newsError.innerHTML = hasilError;
      };
    });
  };
  
//   fungsi interaktif berupa click button dan keyup Enter
  const searchButton = document.querySelector('.search-button');
  searchButton.addEventListener('click', function(){
      eduNews();
  });
  const inptKywrd = document.querySelector('.input-keyword');
  inptKywrd.addEventListener('keyup', function (key) {
    if (key.keyCode === 13) {
        eduNews();
    };
})
  
//   fungsi pembuatan card untuk menempatkan content news
  function showCards(m) {
      return `<div class="col-md-4 my-3">
                  <div class="card">
                      <img src="${m.urlToImage}" class="card-img-top" alt="">
                      <div class="card-body">
                      <h5 class="card-title">${m.title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${m.author}, ${m.publishedAt}</h6>
                      <p>${m.description}</p>
                      <a href="${m.url}" class="btn btn-primary modal-detail-button">Read More</a>
                      </div>
                  </div>
              </div>`;
  };