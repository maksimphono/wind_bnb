export const briefText = (text, numberOfSym) => {
    if (!text) return;
    if (text.length < numberOfSym) return text;
    const brief = [...text];

    brief.splice(numberOfSym, brief.length, "...");
    return brief.join("");
}