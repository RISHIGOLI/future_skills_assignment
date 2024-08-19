const baseUrl = 'http://localhost:5000'

export async function makeHttpRequest(endpoint, method, data) {
    const url = `${baseUrl}${endpoint}`
    let options = {
        method
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }
    }
    const response = await fetch(url, options)
    console.log(response);
    return await response.json()
    
}
