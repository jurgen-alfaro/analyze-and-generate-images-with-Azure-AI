async function analyzeImage(imageUrl) {
    const apiKey = process.env.REACT_APP_AZURE_COMPUTER_VISION_KEY;
    const endpoint = process.env.REACT_APP_AZURE_COMPUTER_VISION_ENDPOINT;
    const features = 'caption';
  
    const url = `${endpoint}/computervision/imageanalysis:analyze?features=read,caption&language=en&api-version=2023-02-01-preview`; 
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': apiKey,
      },
      body: JSON.stringify({ url: imageUrl }),
    });
  
    const data = await response.json();
    return data;
  }
  
  export default analyzeImage;