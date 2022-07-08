import View from "../../../core/view/view";
import html from "./d-view.html";
import "./d-view.css";
import Bview from "../b-view/b-view";

export default class Dview extends View {

    constructor() {
        super(html);
        this.next();
    }

    next(){
        let self = this;
        let btn = document.getElementById("nextD");
        btn.addEventListener("click", function(){
            sessionStorage.removeItem('value');
            sessionStorage.setItem('value', 8);
            self.end(new Bview().start());
        })
    }
}