import View from "../../../core/view/view";
import html from "./c-view.html";
import "./c-view.css";

export default class Cview extends View {

    constructor() {
        super(html);
        this.next("nextC");
    }

}