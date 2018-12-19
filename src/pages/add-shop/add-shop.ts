import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Item } from "../../model/item/item.model";
import { ShoppingListService } from "../../services/shopping-list/shopping-list.service";

@IonicPage()
@Component({
  selector: "page-add-shop",
  templateUrl: "add-shop.html"
})
export class AddShopPage {
  item: Item = {
    name: "",
    quantity: undefined,
    price: undefined
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopping: ShoppingListService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddShopPage");
  }

  addItem(item: Item) {
    this.shopping.addItem(item).then(ref => {
      console.log(ref.key);
    });
  }
}
