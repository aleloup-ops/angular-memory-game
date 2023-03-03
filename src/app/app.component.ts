import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memory-game-angular';

  private isDarkTheme: boolean = false;
  public darkThemeIcon: string = 'https://cdn-icons-png.flaticon.com/512/581/581601.png';

  public pokemonTeam: Array<any> = [];

  public retrieveData($event: any): void {
    console.log($event);
    this.pokemonTeam = $event;
  }

  public toggleDarkMode(): void {
    if (!this.isDarkTheme) {
      var root = document.documentElement;
      root.className += ' dark';
      this.isDarkTheme = true;
      this.darkThemeIcon = 'https://cdn-icons-png.flaticon.com/512/2917/2917242.png';
    } else {
      var root = document.documentElement;
      root.classList.remove('dark');
      this.isDarkTheme = false;
      this.darkThemeIcon = 'https://cdn-icons-png.flaticon.com/512/581/581601.png';
    }
  }
}
