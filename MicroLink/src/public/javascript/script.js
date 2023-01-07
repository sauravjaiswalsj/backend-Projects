const form = document.querySelector('#url-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const Urldata = document.querySelector(".url-input");
  console.log(data);
  
  fetch('/urlapi',{
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.Stringify({longUrl: Urldata.value;})
  })
  .then(response=>{
    if(!response.ok){
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(data =>{
    console.log(data.shortUrl);
    
    result.insertAdjacentHTML('afterbegin', `
    <div class="result">
      <a target="_blank" class="short-url" href="${data.shortUrl}">
        ${data.shortUrl}
      </a>
    </div>`
  )})
.catch(console.error)


});
