var piecesOfChoc = Number(
    prompt("How many pieces of chocolate would you like? (ex. 0-10")
);
var leftOver = 10 - piecesOfChoc;

if (leftOver >= 8) {
    alert(`There are ${leftOver} pieces of chocolate left, are you sure you don't want more?`);
} else if (leftOver >= 5) {
    alert("Glad your a chocolate lover too!"
    );
} else if (leftOver >= 3) {
    alert("Yes go for the gold!"
    );
} else {
    alert(`We only have ${leftOver} chocolates left, could you put some back so other people can enjoy the chocolate too`);
}