import { getTodasAvaliacoesRiscoIncendio } from "../models/avaliacoesRiscoIncendioModel.js";

export async function listarAvaliacoesRiscoIncendio(req, res) {
    // Chama a função para obter as avaliações
    const avaliacoesRiscoIncendio = await getTodasAvaliacoesRiscoIncendio();

    // Envia uma resposta HTTP com status 200 (sucesso) e os dados das avaliações no formato JSON
    res.status(200).json(avaliacoesRiscoIncendio);
}