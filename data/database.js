let categories = [
    { id: 1, nome:"Sushis" },
    { id: 2, nome:"Temakis" },
    { id: 3, nome:"Bebidas" },
    { id: 4, nome:"Sobremesas" }
];

let produtos = [
    {
        categoriaId: 1,
        nome: "Temaki Completo",
        descricao: "Temaki com salmão, cream cheese, cebolinha e gergelim.",
        preco: 28.00,
        imagem: "https://www.comidaereceitas.com.br/wp-content/uploads/2008/05/temaki_salmao.jpg"
},
{
    categoriaId: 2,
    nome: "Temaki Filadélfia",
    descricao: "Temaki com cream cheese e salmão.",
    preco: 30.00,
    imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/c1034feeb8e544b33d1fc604d40ae043_XL.jpg"
},
{
    categoriaId: 3,
    nome: "Coca-Cola",
    descricao: "Refrigerante gelado.",
    preco: 8.00,
    imagem: "https://carrefourbrfood.vtexassets.com/arquivos/ids/119765719/coca-cola-lata-350-ml-1.jpg?v=638224488171270000"
},
{
    categoriaId: 4,
    nome: "Petit Gateau",
    descricao: "Deliciosa sobremesa de chocolate com sorvete.",
    preco: 25.00,
    imagem: "https://bakeandcakegourmet.com.br/uploads/site/receitas/petit-gateau-1-1pctvk69.jpg"
}
];s

module.exports = { categorias, produtos };