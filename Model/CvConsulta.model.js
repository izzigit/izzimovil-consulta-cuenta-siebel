import axios from "axios"

export const clientConsulta = async (payload) => {

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://test.izziapiweb.mx/vpn/siebel/app/eai/ESN',
    headers: { 
      'Content-Type': 'text/xml'
    },
    data : payload
  };
  
  console.log("request: \n",payload);
  await axios(config)
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    if(error.message === "Request failed with status code 500")
    throw {status:500, message:"En estos momentos presentamos errores en nuestros sistemas"}
    
    throw {status:402, message:error.message}
  });
}