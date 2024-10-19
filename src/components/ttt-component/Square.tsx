import { Component, Prop, h } from "@stencil/core"

@Component({
    tag: "square-component",
    styleUrl: "ttt-component.css",
    shadow: true
})
export class Square {

    @Prop() value: string;

    @Prop() onSquareClick;

    render() {
        return <button class="square" onClick={this.onSquareClick}>{this.value}</button>;
    }

}
