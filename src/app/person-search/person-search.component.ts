import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-person-search',
    templateUrl: './person-search.component.html',
    styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent {
    pessoas = [
        { name: 'Manoel Pinheiro', city: 'Uberlândia', state: 'MG', actived: true },
        { name: 'Sebastião da Silva', city: 'São Paulo', state: 'SP', actived: false },
        { name: 'Carla Souza', city: 'Florianópolis', state: 'SC', actived: true },
        { name: 'Luís Pereira', city: 'Curitiba', state: 'PR', actived: true },
        { name: 'Vilmar Andrade', city: 'Rio de Janeiro', state: 'RJ', actived: false },
        { name: 'Paula Maria', cidade: 'Uberlândia', state: 'MG', actived: true }
    ];
}
