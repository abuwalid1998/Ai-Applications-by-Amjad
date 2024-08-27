
interface SummaryResponse {
    summary: string;
}


export async function getSummary(text: string): Promise<string> {
    const apiUrl = 'http://127.0.0.1:5000/summarize'; // Replace with your API URL

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: SummaryResponse = await response.json();
        return data.summary;
    } catch (error) {
        console.error('Error fetching summary:', error);
        throw error;
    }
}

export async function getImage(text: string): Promise<string> {
    const apiUrl = 'http://127.0.0.1:5000/generate-image'; // Replace with your API URL

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Retrieve the image Blob
        const imageBlob = await response.blob();

        // Create a URL for the image Blob
        const imageUrl = URL.createObjectURL(imageBlob);

        return imageUrl;
    } catch (error) {
        console.error('Error fetching image:', error);
        throw error;
    }
}

export async function getImage3d(text: string): Promise<string> {
    const apiUrl = 'http://127.0.0.1:5000/generate-3dimage'; // Replace with your API URL

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Retrieve the image Blob
        const imageBlob = await response.blob();

        // Create a URL for the image Blob
        const imageUrl = URL.createObjectURL(imageBlob);

        return imageUrl;
    } catch (error) {
        console.error('Error fetching image:', error);
        throw error;
    }
}
