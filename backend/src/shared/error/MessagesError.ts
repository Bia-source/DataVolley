export enum MESSAGE_ERROR{
    CREATE_USER = "Não foi possível criar um novo usuario, verifique as Informações.",
    // Errors of the category 
    VALIDATE_CATEGORY_NOT_FOUND = "Essa categoria não foi encontrada!",
    VALIDATE_CATEGORY_EXISTS = "Já existe essa categoria nesse time!",
    VALIDATE_CATEGORY_DONT_EXISTS = "Essa categoria não existe!",

    // Errors of the athlete
    VALIDATE_WITHOUT_ATHLETES = "Não existe nenhum atleta cadastrado!",
    VALIDATE_ATHLETE_NOT_FOUND = "Essa especificação não foi encontrada",
    VALIDATE_ATHLETE_EXISTS = "Já existe um atleta com esse nome, nesta categoria",
    VALIDATE_GET_ATHLETE_BY_ID_ERROR = "Não foi possivel completar essa solicitacao verifique o numero de identificão do atleta!",
    VALIDATE_GET_ATHLETE_BY_NAME_ERROR = "Não foi possivel completar essa solicitacao verifique o nome do atleta!",
    VALIDATE_GET_ATHLETE_BY_CATEGORY_ERROR = "Não existe nenhum atleta cadastrado, verifique a categoria e o genero",
}