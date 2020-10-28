code_blocks = document.getElementsByClassName("answercell")[0].getElementsByTagName("code");

var largest = "";

for (i = 0; i < code_blocks.length; i++) {
    if (code_blocks[i].textContent.length > largest.length) {
        largest = code_blocks[i].textContent;
    }
}

navigator.clipboard.writeText(largest);
