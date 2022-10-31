import { Component, OnInit, VERSION } from '@angular/core';
import {loadStripe, Stripe, StripeCardElement, StripeElementsOptions} from '@stripe/stripe-js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  stripe: Stripe;
  card: StripeCardElement;

  ngOnInit() {
    this.initStripe();
  }

  private async initStripe(): Promise<any> {
    this.stripe = await loadStripe('pk_test_ZOqskYHJqUv4QXp1pMubKHd8');

    const options: StripeElementsOptions = {
      clientSecret: 'seti_1LyyTjEtCa3jKbc6Z6XBGVrT_secret_MiPI8VhWW8TPikJszsZEtsiSgZ0N6We'
    }
    const elements = this.stripe.elements();
    this.card = elements.create('card', { style: {
      base: {
    color: "blue",
    padding: "5px"
  }
    }});
    this.card.mount("#payment-card");
  }

  createToken() {
    this.stripe.createToken(this.card).then( (result) => {
      console.log(JSON.stringify(result))
    });

    this.stripe.setupIn
  }
}
