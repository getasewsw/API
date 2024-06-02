const apiKey = '431367b4854740e691115b95403ef075'; // Your actual API key from NewsAPI
const url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const articles = data.articles;
        const articlesContainer = document.getElementById('news-articles');

        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.innerHTML = `
                <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
                <p>${article.description}</p>
            `;
            articlesContainer.appendChild(articleElement);
        });
    })
    .catch(error => {
        console.error('Error fetching the news:', error);
    });
