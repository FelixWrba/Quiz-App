async function searchQuery(query) {
    const search_results = document.getElementById('search_results');
    search_results.innerHTML = 'Loading...';
    try {
        const response = await fetch(`/api/search?search=${query}`);
        if (!response.ok) {
            search_results.innerHTML = response.status;
        }
        const body = await response.text();
        search_results.innerHTML = body;
    } catch (err) {
        search_results.innerHTML = JSON.stringify(err);
    }
}

async function getMostPlayed() {
    const most_played = document.getElementById('most_played');
    try {
        const response = await fetch('/api/most_played');
        if (!response.ok) {
            most_played.innerHTML = response.status;
        }
        const body = await response.text();
        most_played.innerHTML = body;
    } catch (err) {
        most_played.innerHTML = JSON.stringify(err);
    }
}

getMostPlayed();