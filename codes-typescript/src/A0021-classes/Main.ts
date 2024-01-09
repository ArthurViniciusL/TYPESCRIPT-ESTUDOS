import { Empresa, Colaborador } from "./A0021-classes";

export class Main {
    static start(): void {
        const empresa1 = new Empresa('Sunflower', '11.111.111/0001-11');
        const colaborador1 = new Colaborador('Arthur', 'Vinicius');
        const colaborador2 = new Colaborador('Maria', 'Miranda');
        const colaborador3 = new Colaborador('João', 'Vieira');

        empresa1.adicionaColaborador(colaborador1);
        empresa1.adicionaColaborador(colaborador2);
        empresa1.adicionaColaborador(colaborador3);
        
        console.log(empresa1);
        empresa1.mostrarColaboradores();
    }
}

Main.start();


