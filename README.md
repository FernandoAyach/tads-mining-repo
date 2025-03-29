Aqui está o README atualizado com as mudanças para incluir o novo código de localizações:

---

# Trabalho de TADS

## Descrição

Este script em **TypeScript** tem como objetivo extrair dados de um arquivo JSON contendo informações de usuários e calcular diversas métricas estatísticas para os seguintes atributos:
- Contagem de seguidores (`followers_count`)
- Contagem de pessoas seguidas (`following_count`)
- Idade da conta (em anos, calculada a partir da data de criação da conta)

Além das métricas estatísticas, o script também calcula a frequência de localizações dos usuários, exibindo as localizações mais frequentes no formato CSV.

As métricas calculadas incluem:
- Mínimo
- Máximo
- Média
- Mediana
- Desvio padrão

Essas métricas são apresentadas no formato **CSV** para fácil leitura e análise.

## Requisitos

Para rodar este script, você precisará do **Node.js** e do **TypeScript** instalados. Além disso, é necessário ter a dependência **`fs`** para ler o arquivo JSON.

### Dependências

- **fs** (para leitura de arquivos)
- **path** (para manipulação de caminhos de arquivos)

Para instalar as dependências do projeto, execute o comando:

```bash
npm install
```

## Como Usar

1. **Executar o Script de Métricas**: Para rodar o script e gerar as métricas, execute o seguinte comando no terminal:

```bash
npm run metrics
```

2. **Executar o Script de Localizações**: Para calcular e exibir a frequência das localizações dos usuários, execute o seguinte comando no terminal:

```bash
npm run locations
```

3. **Resultado das Métricas**: As métricas calculadas serão exibidas no terminal no formato CSV:

```csv
Metric, Min, Max, Avg, Median, Std
Followers Count, 100.00, 200.00, 150.00, 150.00, 50.00
Following Count, 150.00, 250.00, 200.00, 200.00, 50.00
Account Age (years), 1.00, 2.00, 1.50, 1.50, 0.50
```

4. **Resultado das Localizações**: As localizações dos usuários serão exibidas, ordenadas pela maior frequência, no formato CSV:

```csv
Nome da localização, Quantidade de ocorrências
new york, 150
los angeles, 120
miami, 80
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

### 5. `calculateLocationFrequency(targetLocation: string, locations: string[]): number`
Calcula a frequência de uma localização específica na lista de localizações fornecidas.

### 6. `extractLocationsAndFrequencies(usersJson: any[])`
Extrai as localizações dos usuários e calcula a frequência de cada uma. As localizações são apresentadas ordenadas pela maior frequência.

## Exemplo de Execução

Ao executar o script de métricas (`npm run metrics`), você verá no terminal algo como o seguinte:

```
Metric, Min, Max, Avg, Median, Std
Followers Count, 10.00, 500.00, 150.00, 150.00, 100.00
Following Count, 20.00, 300.00, 160.00, 160.00, 80.00
Account Age (years), 1.00, 5.00, 2.50, 2.50, 1.00
Métricas extraídas com sucesso!
```

Ao executar o script de localizações (`npm run locations`), você verá algo assim:

```
Location, Frequency
new york, 150
los angeles, 120
miami, 80
```

## Scripts

O projeto contém os seguintes scripts:

- **`metrics`**: Calcula e exibe as métricas estatísticas para `followers_count`, `following_count`, e idade da conta (em anos).
- **`locations`**: Calcula e exibe a frequência das localizações dos usuários, ordenadas pela maior frequência.
- **`test`**: Roda os testes do projeto utilizando **Jest**.
- **`test-coverage`**: Roda os testes com cobertura utilizando **Jest**.

---

Agora o README está atualizado, com as informações sobre o cálculo de frequências de localizações, ordenação e o uso dos scripts para métricas e localizações.
