
window.addEventListener("load",checkInternetConnection);


function checkInternetConnection(){

    const statusText = document.getElementById('statusText');
    const ipAddressText = document.getElementById('ipAddressText');
    const networkStrengthText = document.getElementById('networkStrengthText');

    statusText.textContent = 'Checking...';


    if(navigator.onLine){
       fetch('https://api.ipify.org?format=json')
       .then((response)=> response.json())
       .then((data)=>{

          ipAddressText.textContent = data.ip;
          statusText.textContent = 'Connected';
          statusText.style.backgroundColor = 'green'
          statusText.style.color = 'white'

          ipAddressText.style.color = 'red'

          const connection = navigator.connection;

          const networkStrength = connection ?connection.downlink +'Mbps' : 'Unknown';
          networkStrengthText.textContent = networkStrength;
          networkStrengthText.style.color = 'blue';

       })
       .catch(()=>{
        statusText.textContent = 'Disconnected';
        ipAddressText.textContent = '---'
       })

    }else{
        statusText.textContent = 'Disconnected';
        ipAddressText.textContent = '---'
        networkStrengthText.textContent = '---'
    }
}