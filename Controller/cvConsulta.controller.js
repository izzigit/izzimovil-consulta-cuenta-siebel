import { cVConsultaStatus } from "../DTO/CVConsultaStatusCuentaDTO.js";
import { clientConsulta } from "../Model/CvConsulta.model.js";

export const accountSearch = async (req, res) => {
  try {
    let cvConsulta = new cVConsultaStatus(req.body);

    if (!cvConsulta.account && !cvConsulta.phoneNumber)
      throw { status: 400, message: "parametros vacios" };

    if (cvConsulta.phoneNumber.length < 10 && cvConsulta.account < 8)
      throw { status: 400, message: "parametros invalidos" };

    const res = await clientConsulta(cvConsulta.getXML())

    return res.status(200).json({ resp });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
