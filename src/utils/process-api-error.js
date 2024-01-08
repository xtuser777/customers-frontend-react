import { AxiosError } from 'axios';
import Security from './security';

/**
 * @param {AxiosError} e
 */
export const processApiError = (e) => {
  switch (e.response?.status) {
    case 404:
      alert('Erro de requisição: Rota não encontrada.');
      break;
    case 400:
      alert(`Erro na requisição: ${e.response.data}`);
      break;
    case 401:
      alert('Token de autenticação inválido. Faça login novamente.');
      Security.clear();
      window.document.location.reload();
      break;
    case 500:
      alert('Erro de servidor.');
      break;
    default:
      alert(`Erro desconhecido: ${e}`);
      break;
  }
};
