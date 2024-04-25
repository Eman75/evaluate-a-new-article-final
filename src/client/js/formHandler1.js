// import checkURL function
import {checkURL} from './urlcheck';


const form = document.getElementById('Formid');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get url from user input 
    const formInfo = document.getElementById('info').value;
    
    // validation of url
    if(checkURL(formInfo)){
 
        // If user enter valid url, send it to server
        sendInfo('/api', {url: formInfo})
        .then(response =>{
            console.log('Server respose:' , response);
            
            document.getElementById('confidence').innerHTML = `Confidence : ${response.confidence}`;
            document.getElementById('polarity').innerHTML = `Polarity : ${response.polarity}`;
            document.getElementById('snippet').innerHTML = `Text : ${response.snippet}`;
            document.getElementById('score_tag').innerHTML = `Score_tag : ${response.score_tag}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity : ${response.subjectivity}`;
            
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }else{
        alert('Invalid URL!');
        
    }
 
}
     
    


// function which sending data to the server
async function sendInfo(url ='', data ={}){
    try{
        const response= await fetch(url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        return response.json();
    }catch(error){
        throw error;
    }
}



export { handleSubmit };

