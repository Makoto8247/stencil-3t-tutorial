import { Component, h, State, Listen} from "@stencil/core"

@Component({
    tag: "ttt-component",
    styleUrl: "ttt-component.css",
    shadow: true
})
export class TttComponent {
    @State() squares: Array<string> = Array(9);
    @State() xIsNext: boolean = true;

    @Listen("handle-click")
    private handleClick(i: number) {
        if (this.squares[i]) return;

        const nextSquares = this.squares.slice();

        if (this.xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        this.squares = nextSquares;

        this.xIsNext = !this.xIsNext;
    }

    @Listen("game-restart")
    private restart() {
        this.squares = Array(9);
        this.xIsNext = true;
    }

    render() {
        return (
            <div>
                <div class="board-row">
                    <square-component value={this.squares[0]} onSquareClick={() => this.handleClick(0)}></square-component>
                    <square-component value={this.squares[1]} onSquareClick={() => this.handleClick(1)}></square-component>
                    <square-component value={this.squares[2]} onSquareClick={() => this.handleClick(2)}></square-component>
                </div>
                <div class="board-row">
                    <square-component value={this.squares[3]} onSquareClick={() => this.handleClick(3)}></square-component>
                    <square-component value={this.squares[4]} onSquareClick={() => this.handleClick(4)}></square-component>
                    <square-component value={this.squares[5]} onSquareClick={() => this.handleClick(5)}></square-component>
                </div>
                <div class="board-row">
                    <square-component value={this.squares[6]} onSquareClick={() => this.handleClick(6)}></square-component>
                    <square-component value={this.squares[7]} onSquareClick={() => this.handleClick(7)}></square-component>
                    <square-component value={this.squares[8]} onSquareClick={() => this.handleClick(8)}></square-component>
                </div>

                <button onClick={() => this.restart()}>restart</button>
            </div>
        );
    }
}