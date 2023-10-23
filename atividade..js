// Interface do sanduíche
class Sanduiche {
    getDescription() {}
    custo() {}
}

// Implementação da classe de sanduíche base
class SanduicheDeFrangoAssado extends Sanduiche {
    getDescription() {
        return 'Sanduíche de Frango Assado';
    }

    custo() {
        return 4.5;
    }
}

// Implementação do Decorator Pepperoni
class Pepperoni extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getDescription() {
        return this.sanduiche.getDescription() + ', Pepperoni';
    }

    custo() {
        return 0.99 + this.sanduiche.custo();
    }
}

// Implementação do Decorator QueijoMussarelaRalado
class QueijoMussarelaRalado extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getDescription() {
        return this.sanduiche.getDescription() + ', QueijoMussarelaRalado';
    }

    custo() {
        return 0.99 + this.sanduiche.custo();
    }
}

