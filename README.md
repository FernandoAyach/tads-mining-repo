# Trabalho de TADS

## Descrição

Este script em **TypeScript** tem como objetivo extrair dados de um arquivo JSON contendo informações de usuários e calcular diversas métricas estatísticas para os seguintes atributos:
- Contagem de seguidores (`followers_count`)
- Contagem de pessoas seguidas (`following_count`)
- Idade da conta (em anos, calculada a partir da data de criação da conta)

As métricas calculadas incluem:
- Mínimo
- Máximo
- Média
- Mediana
- Desvio padrão

Essas métricas são então apresentadas no formato **CSV** para fácil leitura e análise.

## Requisitos

Para rodar este script, você precisará do **Node.js** e do **TypeScript** instalados. Além disso, é necessário ter a dependência **`fs`** para ler o arquivo JSON.

### Dependências

- **fs** (para leitura de arquivos)
- **path** (para manipulação de caminhos de arquivos)
- **calculate_functions** (arquivo de funções de cálculo de métricas)

Para instalar as dependências do projeto, execute o comando:

```bash
npm install
```

## Como Usar

1. **Arquivo de Dados**: Certifique-se de que você tenha um arquivo JSON chamado `users-data.json` na mesma pasta que o script. O arquivo deve conter os dados dos usuários no seguinte formato:

```json
[
  {
    "followers_count": 100,
    "following_count": 150,
    "created_at": "2019-01-01T00:00:00Z"
  },
  {
    "followers_count": 200,
    "following_count": 250,
    "created_at": "2020-01-01T00:00:00Z"
  }
]
```

2. **Executar o Script**: Para rodar o script e gerar as métricas, execute o seguinte comando no terminal:

```bash
npm run start
```

3. **Resultado**: As métricas calculadas serão exibidas no terminal no formato CSV:

```csv
Metric, Min, Max, Avg, Median, Std
Followers Count, 100.00, 200.00, 150.00, 150.00, 50.00
Following Count, 150.00, 250.00, 200.00, 200.00, 50.00
Account Age (years), 1.00, 2.00, 1.50, 1.50, 0.50
```

## Funções do Script

### 1. `extractUserData()`
Essa função lê o arquivo `users-data.json` e retorna os dados dos usuários como um objeto JSON.

### 2. `calculateMetrics(list: number[]): Metrics`
Calcula as métricas de uma lista numérica, incluindo mínimo, máximo, média, mediana e desvio padrão.

### 3. `formatCSVLine(title: string, metrics: Metrics): string`
Formata uma linha de métricas no formato CSV com título e valores das métricas.

### 4. `extractMetrics(usersJson: any[]): boolean`
Extrai as métricas dos dados de usuários fornecidos, incluindo `followers_count`, `following_count` e idade da conta (em anos). Em seguida, exibe as métricas no formato CSV no terminal.

## Exemplo de Execução

Ao executar o script, você verá no terminal algo como o seguinte:

```
Metric, Min, Max, Avg, Median, Std
Followers Count, 10.00, 500.00, 150.00, 150.00, 100.00
Following Count, 20.00, 300.00, 160.00, 160.00, 80.00
Account Age (years), 1.00, 5.00, 2.50, 2.50, 1.00
Métricas extraídas com sucesso!
```

## Contribuições

Se você quiser contribuir para este projeto, por favor, crie uma issue ou um pull request para melhorias ou correções de bugs.

## Licença

Este projeto é licenciado sob a licença ISC. Veja o arquivo LICENSE para mais detalhes.

---

Esse README fornece todas as informações necessárias para rodar o script e entender como ele calcula e exibe as métricas dos usuários no formato CSV.