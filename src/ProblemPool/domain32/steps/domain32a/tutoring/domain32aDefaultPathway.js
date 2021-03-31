var hints = [{id: "domain32a-h1", type: "hint", dependencies: [], title: "Define the Domain", text: "A rational function is undefined when the denominator is equal to zero. So, let's start by setting the denominator equal to zero. Then we know every value other than that is a solution."}, {id: "domain32a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x=-3 5$$,"], dependencies: ["domain32a-h1"], title: "Solving For the Domain", text: "What is x for $$x^2-\\left(2\\right) x-\\left(15\\right)=0$$?", choices: ["$$x=3$$", "$$x=3 5$$,", "$$x=-3 -5$$,", "$$x=-3 5$$,"], subHints: [{id: "domain32a-h2-s1", type: "hint", dependencies: [], title: "Solving For the Domain", text: "For $$x^2-\\left(2\\right) x-\\left(15\\right)=0$$, factor the equation to get $$\\left(x-\\left(5\\right)\\right) \\left(x+\\left(3\\right)\\right)$$. Set these two expressions equal to zero to get that $$x=5$$ or $$x=-3$$."}]}, {id: "domain32a-h3", type: "hint", dependencies: ["domain32a-h2"], title: "Answer", text: "So, the function is defined for every value other than -3 and 5.The domain of the function is $$(-\\infty,-3) \\cup (-3,5) \\cup (5,\\infty),$$ with the circle brackets denoting the fact that -3 and 5 are not valid solutions, and the U showing that values within the intervals are solutions."}, ]; export {hints};