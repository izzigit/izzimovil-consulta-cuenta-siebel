import { soap } from "strong-soap";

const url = "./Wsdls/http___siebel.com_CustomUI_CV.wsdl";

const getSoapResponse = async (request)=>{
  return await soap.createClient(url, {}, async function (err, client) {
    var method = client["CVConsultaStatusCuenta"];
    return await method(request, function (err, result, envelope, soapHeader) {
      //response envelope
      console.log("Response Envelope: \n" + envelope);
      //'result' is the response body
      console.log("Result: \n" + JSON.stringify(result));
      return result
    });
  });
}

export const clientConsulta = async (payload) => {
  console.log("REQUEST: \n", payload.getXML());

  var requestArgs = {
    CVConsultaStatusCuenta_Input: {
      CV_spcTelefono: payload.phoneNumber,
      CV_spcCuenta: payload.account,
    },
  };

  const response = await getSoapResponse(requestArgs);

  return response;
};
