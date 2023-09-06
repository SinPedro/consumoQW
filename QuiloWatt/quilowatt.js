const quiloWatt = 0.5
const descontoConsumo = 0.15
const valorConsumo = prompt("Digite o consumo de sua residência:");




console.log("Seu valor a ser pago:", quiloWatt * valorConsumo);
const consumoTotal = quiloWatt * valorConsumo
console.log("Você terá um desconto de:", descontoConsumo * valorConsumo);
const valorComDesconto = consumoTotal - descontoConsumo
console.log("Valor total a ser pago:",valorComDesconto );



