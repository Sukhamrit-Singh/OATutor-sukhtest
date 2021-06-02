var hints = [{id: "gaussian5a-h1", type: "hint", dependencies: [], title: "Augumented Matrix", text: "First, write the system of equations as an augumented matrix.", variabilization: {}}, {id: "gaussian5a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\begin{bmatrix} 2 3 6 1 -1 \\frac{1}{2} \\end{bmatrix}$$,"], dependencies: ["gaussian5a-h1"], title: "Augumented Matrix", text: "How do you write the system as an augumented matrix?", choices: ["$$\\begin{bmatrix} 2 3 6 1 -1 \\frac{1}{2} \\end{bmatrix}$$,", "$$\\begin{bmatrix} 2 3 6 1 \\frac{-\\left(1\\right)}{2} 2 \\end{bmatrix}$$,", "$$\\begin{bmatrix} 2 6 3 1 -1 \\frac{1}{2} \\end{bmatrix}$$,"], subHints: [{id: "gaussian5a-h2-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$\\begin{bmatrix} 2 3 6 1 -1 \\frac{1}{2} \\end{bmatrix}$$,", variabilization: {}}], variabilization: {}}, {id: "gaussian5a-h3", type: "hint", dependencies: ["gaussian5a-h2"], title: "Convert to row-echelon form", text: "You need a 1 in the first row, first column spot in the matrix, To do this, interchange row 1 and row 2 such that the matrix looks like this: $$\\begin{bmatrix} 1 -1 \\frac{1}{2} 2 3 6 \\end{bmatrix}$$,", variabilization: {}}, {id: "gaussian5a-h4", type: "hint", dependencies: ["gaussian5a-h3"], title: "Zero", text: "We now need a zero in the row 2 column 1 spot. We can obtain this by multiplying row 1 by -2, and then adding the result to row 2.", variabilization: {}}, {id: "gaussian5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["/mat{(1,-1,1/2),(0,5,5)}"], dependencies: ["gaussian5a-h4"], title: "New Matrix", text: "What is the new matrix after the operations in the previous hint?", subHints: [{id: "gaussian5a-h5-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$\\begin{bmatrix} 1 -1 \\frac{1}{2} 0 5 5 \\end{bmatrix}$$,", variabilization: {}}], variabilization: {}}, {id: "gaussian5a-h6", type: "hint", dependencies: ["gaussian5a-h5"], title: "Multiply", text: "Now, you need a 1 in the row 2 column 2 spot. Multiply row 2 by $$\\frac{1}{5}$$ to obtain a 1 there. The new matrix is $$\\begin{bmatrix} 1 -1 \\frac{1}{2} 0 1 1 \\end{bmatrix}$$,", variabilization: {}}, {id: "gaussian5a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3/2"], dependencies: ["gaussian5a-h6"], title: "Interpret", text: "You now know that $$y=1$$ based on the second row of the matrix. When translated into an equation the first row is $$x-y=\\frac{1}{2}$$ and the second row is $$y=1$$. Now substitute $$y=1$$ into the first equation to obtain x. What does x equal?", subHints: [{id: "gaussian5a-h7-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$\\frac{3}{2}$$.", variabilization: {}}], variabilization: {}}, {id: "gaussian5a-h8", type: "hint", dependencies: ["gaussian5a-h7"], title: "Answer", text: "Therefore, the answer to the system of equations is $$(3/2,1).$$", variabilization: {}}, ]; export {hints};