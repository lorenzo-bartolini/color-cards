import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //COMPONENTE PRINCIPALE
  title = 'color-cards';

  form: FormGroup;
  colors: any = []


  availableColors = [
    {
      code: 'red',
      label: 'Rosso'
    },
    {
      code: 'green',
      label: 'Green'
    },
    {
      code: 'blue',
      label: 'Blu'
    }
  ]

  constructor(
    private fb: FormBuilder
  ){

    //costruisco il form nel costruttore così non ottengo errori sul form
    this.form = this.fb.group({
      color: null
    })
  }

  ngOnInit(): void {
    //registro un listener sul controllo 'color' del form e loggo il valore al cambio del valore selezionato
    this.form.get('color')?.valueChanges.subscribe(selectedColor => {
      console.log(selectedColor);
    })
  }

  addColor(){
    //aggiungo il colore selezionato alla lista di colori, prendendo il valore dal controllo 'color' del form
    this.colors.push(this.form.get('color')?.value)
  }
}
