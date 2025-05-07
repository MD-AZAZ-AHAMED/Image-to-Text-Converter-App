const extractText =() => {
    const fileInput=document.getElementById('imageInput');
    const outputDiv = document.getElementById('output');
    const imagesFile=fileInput.files[0]; 

    if(!imagesFile){
        outputDiv.textContent="please Select An Image File."
        return;
    }
    Tesseract.recognize(
        imagesFile,
        'eng'

    ).then( ({data}) => {
        outputDiv.textContent = data.text;

    }).catch((error) => {})  
    console.error('Error', error);
    outputDiv.textContent="Error";
}