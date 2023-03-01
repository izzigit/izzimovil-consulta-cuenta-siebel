export class cVConsultaStatus {
  account = "";
  phoneNumber = "";
  constructor (a) {
    this.account = a.account;
    this.phoneNumber = a.phoneNumber;
  }

  getXML(){
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cus="http://siebel.com/CustomUI">
        <soapenv:Header/>
        <soapenv:Body>
          <cus:CVConsultaStatusCuenta_Input>
              <!--Optional:-->
              <cus:CV_spcTelefono>${this.phoneNumber}</cus:CV_spcTelefono>
              <!--Optional:-->
              <cus:CV_spcCuenta>${this.account}</cus:CV_spcCuenta>
          </cus:CVConsultaStatusCuenta_Input>
        </soapenv:Body>
    </soapenv:Envelope>`
  }

}