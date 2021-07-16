import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";
import {FormBuilder} from "@angular/forms";
import {Hero} from "../hero";
import {Weapon} from "../weapon";

@Component({
  selector: 'app-weapontable',
  templateUrl: './weapontable.component.html',
  styleUrls: ['./weapontable.component.css']
})
export class WeapontableComponent implements OnInit {
  weaponList= this.gameService.getWeaponList();

  // Déclaration de l'attribut wweapon qui me permettra de voir le weapon édité
  weapon: Weapon | undefined | null ;

  // Je crée mon objet JS qui représente le formulaire d'édition de mon weapon
  weaponForm = this.formBuilder.group({
    name: '',points :'',
  });

  // Injection dans le constructeur le GameService et le formbuilder
  constructor(private gameService : GameService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


// Gestion de l'événement clic sur "Editer" ==> je remplis les champs du formulaire
  onWeaponEdit(weapon: Weapon) {
    this.weaponForm.patchValue({
      name: weapon.name,
      points:weapon.points,
    });

    // Remplissage de l'attribut weapon
    this.weapon = weapon;
  }

// Je gère la sauvagarde d'un weapon existant
  onWeaponSave() {
    // Si ma propriété weapon est définie, alors je peux le mettre à jour
    if (this.weapon) {

      // Je récupère les propriétés du weapon qui viennent du formulaire
      this.weapon.name = this.weaponForm.get('name')?.value;
      this.weapon.points = this.weaponForm.get('points')?.value;

      // Je sauve le weapon
      this.gameService.updateWeapon(this.weapon).subscribe(savedWeapon => {
        console.log("Le weapon a bien été mis à jour");
      });
    } else {

      // Création d'un nouvel objet
      // @ts-ignore (pour ignorer l'ID qui peut être null)
      this.weapon = {id: null, name: this.weaponForm.get('name')?.value,
        points: this.weaponForm.get('points')?.value};
      // Je suis obligé de créer un objet weapon pour pouvoir le sauvegarder dans la base

      // @ts-ignore - Je sauve le weapon
      this.gameService.createWeapon(this.weapon).subscribe(savedWeapon => {
        console.log("Le weapon a bien été sauvegardé");
      })
    }
  }
  // On vide le formulaire sur le clic du bouton
  onWeaponCreate() {
    this.weaponForm.reset();
    this.weapon = null;
  }

  // Je gère l'événement de suppression d'un hero
  onWeaponDelete(id: number) {
    // J'envoie la demande à l'API de supprimer le weapon (par son id) et je recharge la liste
    this.gameService.deleteWeapon(id).subscribe(() => {
        console.log("Le weapon" + id + " a bien été supprimé");
        this.weaponList = this.gameService.getWeaponList();
      },
      () => console.log("Erreur à la suppression du weapon"));
  }
}
