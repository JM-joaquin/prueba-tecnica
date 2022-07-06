import View from "../../../core/view/view";
import html from "./a-view.html";
import "./a-view.css";

export default class Aview extends View {

    constructor() {
        super(html);
        this.next("nextA");
    }
}