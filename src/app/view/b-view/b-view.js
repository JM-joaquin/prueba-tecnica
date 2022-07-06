import View from "../../../core/view/view";
import html from "./b-view.html";
import "./b-view.css";

export default class Bview extends View {

    constructor() {
        super(html);
        this.next("nextB");
    }


}