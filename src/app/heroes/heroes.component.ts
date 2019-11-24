import { Component, OnInit } from "@angular/core";
import { Hero } from "../Hero";
import { HEROES } from "../heros";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(data => (this.heroes = data));
  }

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
}
