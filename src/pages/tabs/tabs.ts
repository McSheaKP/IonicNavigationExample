import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NewpagePage } from '../newpage/newpage'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
<<<<<<< HEAD
  tab4Root = NewpagePage;
=======
  tab4Root = SettingsPage;
>>>>>>> b650676f216edb6e524a58839894f7a4c29b660f
  //Add another page here

  constructor() {

  }
}
