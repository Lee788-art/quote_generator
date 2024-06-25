let apiUrl = 'https://type.fit/api/quotes' 
let quote = document.querySelector('.quote')
let author = document.querySelector('.author')
let new_btn = document.querySelector('.new-quote-btn') 
let tweet = document.querySelector('.tweet-btn')
let result = async()=>{
    let rasponse = await fetch(apiUrl)
    let data = await rasponse.json();
    // console.log(data)
    let num = Math.floor(Math.random()*data.length)
    quote.textContent = `${data[num].text}`
    let word =  data[num].author.split(',')
    author.textContent = `${word[0]}`
}
result();

new_btn.addEventListener('click',result)

tweet.addEventListener('click',()=>{
    window.open(`href="https://twitter.com/intent/tweet?text=${quote.innerHTML}">`,'tweet window','width=900px,height=500px')
})