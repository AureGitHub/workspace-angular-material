import { slEnum } from "../enums/shared-lib.enums";
import { AuthService, User } from "../auth/auth.service";

export class ComponentBase  {
	// Propiedades y métodos comunes para todos los componentes
    iconNone = slEnum.icon.none; 
    iconSave = slEnum.icon.save;
    iconCancel = slEnum.icon.cancel;         
    iconHelp = slEnum.icon.help;   
    iconvolver = slEnum.icon.volver;     
    iconInfo = slEnum.icon.info;

    colorPrimary = slEnum.color.Primary; 
    colorAccent = slEnum.color.Accent;
    colorWarn = slEnum.color.Warn;  
  
    user: User | null | undefined;

	constructor( public auth: AuthService){
        this.auth.usuarioSubject.subscribe(user => {
            this.user =user;
        })        
    }
}
