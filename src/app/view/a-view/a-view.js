import View from "../../../core/view/view";
import html from "./a-view.html";
import "./a-view.css";
import Utils from "../../../core/utils";
import Bview from "../b-view/b-view";

export default class Aview extends View {

    constructor() {
        super(html); 
        this.view = html;
        this.number();
        this.next();
    }

    next(){
        let self = this;
        let btn = document.getElementById("nextA");
        btn.addEventListener("click", function(){
            self.end(new Bview().start());
        })
    }

    number(){
        let input = document.getElementById('number');
        input.addEventListener("change", function(){
            let value = document.getElementById('number').value;
            sessionStorage.removeItem('value');
            sessionStorage.setItem('value', value);
        });
    }
}
