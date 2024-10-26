async function submitQuiz() {
    const respnseDiv = document.getElementById('response-div');
    try {
        const response = await fetch(`/api/upload_quiz`, {
            'method': 'POST',
            'body': JSON.stringify({
                title: document.getElementById('title').value,
                description: document.getElementById('desciption').value
            }),
            'headers': {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            respnseDiv.innerHTML = response.status;
        }
        const body = await response.text();
        respnseDiv.innerHTML = body;
    } catch (err) {
        respnseDiv.innerHTML = err;
    }
}