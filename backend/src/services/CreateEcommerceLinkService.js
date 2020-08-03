class CreateEcommerceLinkService {
  async execute(ecommerceName, id){
    if(ecommerceName = 'kabum'){
      return `https://servicespub.prod.api.aws.grupokabum.com.br/descricao/v1/descricao/produto/${id}`
    }
  }
}
  
export default CreateEcommerceLinkService;