import {Component, OnInit} from '@angular/core';
import {GameService} from "../game.service";
import {Hero} from "../hero";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-herotable',
  templateUrl: './herotable.component.html',
  styleUrls: ['./herotable.component.css']
})
export class HerotableComponent implements OnInit {
  heroList = this.gameService.getHeroList();
  newHero: any;

  // Déclaration de l'attribut hero qui me permettra de voir le héros édité
  hero: Hero | undefined;

  // Je crée mon objet JS qui représente le formulaire d'édition de mon hero
  heroForm = this.formBuilder.group({
    name: '',
  });

  // Injection dans le constructeur le GameService et le formbuilder
  constructor(private gameService: GameService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  // Gestion de l'événement clic sur "Editer" ==> je remplis les champs du formulaire
  onEditHero(hero: Hero) {
    this.heroForm.patchValue({
      name: hero.name,
          });
    // Remplissage de l'attribut hero
  this.hero = hero;
  }

// Je gère la sauvagarde d'un Héros existant
  onHeroSave() {
    // Si ma propriété Héros est défini, alors je peux le mettre à jour
    if (this.hero) {

      // Je récupère les propriétés du hero qui viennent du formulaire
      this.hero.name = this.heroForm.get('name')?.value;

      // Je sauve le Héros
      this.gameService.updateHero(this.hero).subscribe(savedHero => {
        console.log("Le héros a bien été mis à jour");
      });
    }
  }

  deleteHero(id: number) {
  }
}
