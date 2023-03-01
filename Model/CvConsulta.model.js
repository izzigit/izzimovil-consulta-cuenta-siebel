import { soap } from "strong-soap";

const url = "./Wsdls/http___siebel.com_CustomUI_CV.wsdl";

const getSoapResponse = async (request) => {
  return new Promise((resolve, reject) => {
    soap.createClient(url, {}, function (err, client) {
      if (err) return reject(err);
        
      let method = client["CVConsultaStatusCuenta"];
      method(request, function (err, result, envelope, soapHeader) {
        console.log("Response xml: \n" + envelope);
        console.log("Response JSON(result): \n" + JSON.stringify(result));

        return resolve(result);
      });
    });
  });
};

export const clientConsulta = async (payload) => {
  console.log("REQUEST: \n", payload.getXML());

  var requestArgs = {
    CVConsultaStatusCuenta_Input: {
      CV_spcTelefono: payload.phoneNumber,
      CV_spcCuenta: payload.account,
    },
  };

  const response = await getSoapResponse(requestArgs);

  if(response.statusCode)
  throw {status:response.statusCode, message: response.body}

  return response;
};
