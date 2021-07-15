var hints = [{id: "sequences22b-h1", type: "hint", dependencies: [], title: "Substitution", text: "Substitute $$n=2$$ into the formula", variabilization: {}}, {id: "sequences22b-h2", type: "hint", dependencies: ["sequences22b-h1"], title: "Simplification", text: "Calculate the expression a_2=(5*2)/((2+2)!)", variabilization: {}}, {id: "sequences22b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10"], dependencies: ["sequences22b-h2"], title: "Calculate the numerator", text: "What is $$\\left(5\\right) \\left(2\\right)$$", variabilization: {}}, {id: "sequences22b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["24"], dependencies: ["sequences22b-h3"], title: "Calculate the denominator", text: "((2+2)!) is equal to 4! What is $$\\left(4\\right) \\left(3\\right) \\left(2\\right) \\left(1\\right)$$?", variabilization: {}}, {id: "sequences22b-h5", type: "hint", dependencies: ["sequences22b-h4"], title: "Putting It Together", text: "Put the numerator and denominator together to create a fraction", variabilization: {}}, ]; export {hints};