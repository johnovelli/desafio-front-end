export async function getIbgeApi() {
  const url = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';
  const response = await fetch(url);
  const data = response.json();
  return data;
}
