const axios = require("axios");

module.exports = {
  async show(req, res) {
    const productId = req.params.id;
    const productInfo = await axios.get(`https://servicespub.prod.api.aws.grupokabum.com.br/descricao/v1/descricao/produto/${productId}`);
    
    const selectedProduct = productInfo.data;

    delete selectedProduct.brinde;
    delete selectedProduct.fabricante;
    delete selectedProduct.oferta;
    delete selectedProduct.oferta_inicio;
    delete selectedProduct.menus;
    delete selectedProduct.familia;
    delete selectedProduct.produto_html;
    delete selectedProduct.descricao;
    delete selectedProduct.tag_title;
    delete selectedProduct.tem_frete_gratis;
    delete selectedProduct.avaliacao_numero;
    delete selectedProduct.avaliacao_nota;
    delete selectedProduct.desconto;
    delete selectedProduct.is_openbox;
    delete selectedProduct.dimensao_peso;
    delete selectedProduct.peso;
    delete selectedProduct.codigo_anatel;
    delete selectedProduct.garantia;
    delete selectedProduct.produto_especie;
    delete selectedProduct.tag_description;
    delete selectedProduct.origem;
    delete selectedProduct.origem_nome;
    delete selectedProduct.flag_blackfriday;
    delete selectedProduct.preco_prime;
    delete selectedProduct.preco_desconto_prime;
    delete selectedProduct.frete_gratis_somente_prime;
    delete selectedProduct.preco_antigo;
    
    res.json(selectedProduct);
  }
};