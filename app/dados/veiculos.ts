export type Veiculo = {
    id: number,
    nome: string,
    ano: number,
    categoria: string,
    km: number,
    cambio: string,
    combustivel: string,
    cor: string,
    portas: number,
    preco: number,
    descricao: string
}

const descricao = "Veículo em excelente estado de conservação, revisado e com documentação em dia. Aceita financiamento e troca."

export const veiculos: Veiculo[] = [
    {id: 1, nome: "Hyundai HB20 Diamond", ano: 2022, categoria: "Hatch", km: 14800, cambio: "Automático", combustivel: "Flex", cor: "Preto Phantom", portas: 4, preco: 89900, descricao: descricao},
    {id: 2, nome: "VW Polo GTS 200 TSI", ano: 2023, categoria: "Hatch", km: 5100, cambio: "Automático", combustivel: "Gasolina", cor: "Cinza Platinum", portas: 4, preco: 134990, descricao: descricao},
    {id: 3, nome: "Toyota Corolla XEI", ano: 2022, categoria: "Sedan", km: 28700, cambio: "Automático", combustivel: "Flex", cor: "Prata Metálico", portas: 4, preco: 142500, descricao: descricao},
    {id: 4, nome: "Fiat Toro Freedom", ano: 2023, categoria: "Pickup", km: 19200, cambio: "Automático", combustivel: "Flex", cor: "Branco Banchisa", portas: 4, preco: 164900, descricao: descricao},
    {id: 5, nome: "BYD Song Plus", ano: 2023, categoria: "SUV", km: 9800, cambio: "Automático", combustivel: "Híbrido", cor: "Azul Cosmos", portas: 4, preco: 229900, descricao: descricao},
    {id: 6, nome: "Honda Civic Type R", ano: 2022, categoria: "Esportivo", km: 12300, cambio: "Manual", combustivel: "Gasolina", cor: "Preto Cristal", portas: 4, preco: 299000, descricao: descricao},
]
