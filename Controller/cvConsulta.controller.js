import { cVConsultaStatus } from "../DTO/CVConsultaStatusCuentaDTO.js";
import { clientConsulta } from "../Model/CvConsulta.model.js";

export const accountSearch = async (req, res) => {
  try {
    let cvConsulta = new cVConsultaStatus(req.body);

    if (!cvConsulta.account && !cvConsulta.phoneNumber)
      throw { status: 400, message: "parametros vacios" };

    if (cvConsulta.phoneNumber < 10 && cvConsulta.account < 8)
      throw { status: 400, message: "parametros invalidos" };

    const result = await clientConsulta(cvConsulta)

    return res.status(200).json({ result });
  } catch (error) {
    if(error.status)
      return res.status(error.status).json({ error: error.message });
    
    return res.status(500).json({error:error.message})
  }
};
