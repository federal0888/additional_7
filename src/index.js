module.exports = function solveSudoku(mat) {
    let solved = false;
    insertNumbers(fnext());
    return mat;

    function insertNumbers(next) {
        if (!next) {
            solved = true;
            return true;
        };

        for (let n = 1; n < 10; n++) {
            if (AcolInRow(n, next[0]) && AcolInColumn(n, next[1]) && AcolInCell(n, next[0], next[1])) {
                mat[next[0]][next[1]] = n;
                insertNumbers(fnext());
                if (solved) return;
            }
        }
        mat[next[0]][next[1]] = 0;
    }

    function fnext() {
        for (let row = 0; row < mat.length; row++) {
            for (let column = 0; column < mat[row].length; column++) {
                if (mat[row][column] === 0) return [row, column];
            }
        }
        return false;
    }

    function AcolInRow(n, row) {
        for (let i = 0; i < mat[row].length; i++) {
            if (mat[row][i] === n) return false;
        }
        return true;
    }

    function AcolInColumn(n, column) {
        for (let i = 0; i < mat.length; i++) {
            if (mat[i][column] === n) return false;
        }
        return true;
    }

    function AcolInCell(n, row, column) {
        row = Math.floor(row / 3) * 3;
        column = Math.floor(column / 3) * 3;
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (mat[row + r][column + c] === n) return false;
            }
        }
        return true;
    }
}
