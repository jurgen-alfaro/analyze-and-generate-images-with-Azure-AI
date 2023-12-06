import React, { useState } from 'react';
import analyzeImage from './utils/azure-image-analysis';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // const analyzeImage = async () => {
  //   // Code to trigger image analysis
  //   setIsAnalyzing(true);
  //   // Perform the image analysis logic here
  //   await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay for the analysis
  //   setIsAnalyzing(false);
  //   // Set the analysis result
  //   setAnalysisResult({ 
  //     // Replace with actual analysis result data
  //     labels: ['label1', 'label2', 'label3'],
  //     imageUrl: 'https://example.com/processed-image.jpg'
  //   });
  // };

  const handleImageAnalysis = async () => {
    setIsAnalyzing(true);
    // Perform the image analysis 
    const data = await analyzeImage(inputValue);
    setIsAnalyzing(false)
    // Set the analysis result
    setAnalysisResult({URL: inputValue, data})
  };

  const handleImageGeneration = () => {
    // Code to trigger image generation
  };

  const DisplayResults = () => {
    if (analysisResult) {
      
      return (
        <div>
          <h2>Computer Vision Analysis</h2>
          {!analysisResult.data.error && <img src={inputValue} alt='Processed' width={340} height={340} /> }
      
          
          <pre>
            {JSON.stringify(analysisResult, null, 2)}
          </pre>

        </div>
      );
    }
    return null;
  };

  return (
    <>
      <h1>Computer Vision</h1>
      <p>Insert URL or type prompt:</p>
      <input type="text" placeholder='Enter URL to analyze or textual prompt to generate an image' style={{width: "360px"}} value={inputValue} onChange={handleInputChange} />
      <br />
      <button onClick={handleImageAnalysis} disabled={isAnalyzing}>{isAnalyzing ? 'Analyzing...' : 'Analyze Image'}</button>
      <button onClick={handleImageGeneration}>Generate Image</button>
      <DisplayResults />
    </>
  );
}

export default App;
