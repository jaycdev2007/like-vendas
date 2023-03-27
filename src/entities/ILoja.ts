export interface ILoja {
    id: string;
    senha: string;
    nomeDaLoja:string;
    emailDaLoja:string;
    dataDeIncerramentoDoServico: string;
    validadeDoServico: string;
    dataDeEscricaoDoServico: string;
    logoDaLoja: {url: string};
}