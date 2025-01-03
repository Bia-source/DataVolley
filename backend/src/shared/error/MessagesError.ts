export enum MESSAGE_ERROR{

    // Errors of the squads
    SQUAD_CATEGORY_EXISTS = "Já existe um time para essa categoria, utilize ele e altere se precisar",
    
    // Errors of the team
    VALIDATE_NAME_TEAM_EXISTS = "Já existe um time com esse nome, tente outro!",
    TEAM_NOT_FOUND = "Time não encontrado",

    // Errors of the category 
    CREATE_CATEGORY = "Não foi possível criar uma nova categoria, verifique se foi inserido o genero e categoria correto.",
    VALIDATE_CATEGORY_NOT_FOUND = "Essa categoria não foi encontrada!",
    VALIDATE_CATEGORY_EXISTS = "Já existe essa categoria nesse time!",
    VALIDATE_CATEGORY_DONT_EXISTS = "Essa categoria não existe!",
    CATEGORIES_DONT_EXISTS_TEAM = "Ainda nao existe nenhum registro de categoria!",

    // Errors of the athlete
    VALIDATE_WITHOUT_ATHLETES = "Não existe nenhum atleta cadastrado!",
    VALIDATE_ATHLETE_NOT_FOUND = "Essa especificação não foi encontrada",
    VALIDATE_ATHLETE_EXISTS = "Já existe um atleta com esse nome, nesta categoria",
    VALIDATE_GET_ATHLETE_BY_ID_ERROR = "Não foi possivel completar essa solicitacao verifique o numero de identificão do atleta!",
    VALIDATE_GET_ATHLETE_BY_NAME_ERROR = "Não foi possivel completar essa solicitacao verifique o nome do atleta!",
    VALIDATE_GET_ATHLETE_BY_CATEGORY_ERROR = "Não existe nenhum atleta cadastrado, verifique a categoria e o genero",
}