var hints = [{id: "LinIneq28a-h1", type: "hint", dependencies: [], title: "Absolute Value Inequality", text: "For an algebraic expression X, and $$k>0$$, an absolute value inequality is an inequality of the form |X|>k is equivalent to $$X<-k$$ or $$X>k$$"}, {id: "LinIneq28a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(3\\right) x-\\left(1\\right)<-\\left(11\\right)$$ or $$\\left(3\\right) x-\\left(1\\right)>11$$"], dependencies: ["LinIneq28a-h1"], title: "Absolute Value Inequality", text: "How can we apply the above principle to our problem?", choices: ["$$\\left(3\\right) x-\\left(1\\right)<-\\left(11\\right)$$ or $$\\left(3\\right) x+\\left(1\\right)>11$$", "$$\\left(3\\right) x-\\left(1\\right)<-\\left(11\\right)$$ and $$\\left(3\\right) x-\\left(1\\right)>11$$", "$$\\left(3\\right) x-\\left(1\\right)<-\\left(11\\right)$$ or $$\\left(3\\right) x-\\left(1\\right)>11$$"]}, {id: "LinIneq28a-h3", type: "hint", dependencies: ["LinIneq28a-h2"], title: "Simplification", text: "Let's simplify the above two inequalities by using the addition and multiplication property."}, {id: "LinIneq28a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["LinIneq28a-h3"], title: "Addition", text: "What number should we add in order to isolate the variable with its coefficient on the left?"}, {id: "LinIneq28a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(3\\right) x<-\\left(10\\right)$$ or $$\\left(3\\right) x>12$$"], dependencies: ["LinIneq28a-h4"], title: "Addition", text: "What do we get after we add 1?", choices: ["$$\\left(3\\right) x<10$$ and $$\\left(3\\right) x>12$$", "$$\\left(3\\right) x<-\\left(10\\right)$$ or $$\\left(3\\right) x>12$$", "$$\\left(3\\right) x<10$$ or $$\\left(3\\right) x>12$$"]}, {id: "LinIneq28a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/3"], dependencies: ["LinIneq28a-h5"], title: "Multiplication", text: "What number should we multiply in order to isolate the variable by itself on the left?"}, {id: "LinIneq28a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x<\\frac{-\\left(10\\right)}{3}$$ or $$x>4$$"], dependencies: ["LinIneq28a-h6"], title: "Multiplication", text: "What do we get after we multiply $$\\frac{1}{3}$$?", choices: ["$$x<\\frac{-\\left(10\\right)}{3}$$ or $$x>4$$", "$$x>\\frac{-\\left(10\\right)}{3}$$ or $$x<4$$", "$$x>\\frac{-\\left(10\\right)}{3}$$ and $$x<4$$"]}, {id: "LinIneq28a-h8", type: "hint", dependencies: ["LinIneq28a-h7"], title: "Interval Notation", text: "$$(-\\infty,b)$$ represents all real numbers less than b, but not including b, and $$(a,\\infty)$$ represents all real numbers greater than a, but not including a."}, ]; export {hints};