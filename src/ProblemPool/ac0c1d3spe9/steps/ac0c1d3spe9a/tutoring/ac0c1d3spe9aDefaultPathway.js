var hints = [{id: "ac0c1d3spe9a-h1", type: "hint", dependencies: [], title: "Subtraction Binomial Square Formula", text: "We compare our expression to the subtraction binomial square formula: $${\\left(a-b\\right)}^2=a^2-2a b+b^2$$.", variabilization: {}}, {id: "ac0c1d3spe9a-h2", type: "hint", dependencies: ["ac0c1d3spe9a-h1"], title: "Compare the Binomial", text: "$${\\left(a-b\\right)}^2$$ $${\\left(m-15\\right)}^2$$", variabilization: {}}, {id: "ac0c1d3spe9a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["m"], dependencies: ["ac0c1d3spe9a-h2"], title: "Identify a", text: "What is a in the expression?", variabilization: {}}, {id: "ac0c1d3spe9a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["15"], dependencies: ["ac0c1d3spe9a-h3"], title: "Identify b", text: "What is b in the expression?", variabilization: {}}, {id: "ac0c1d3spe9a-h5", type: "hint", dependencies: ["ac0c1d3spe9a-h3", "ac0c1d3spe9a-h4"], title: "Plug in the Terms", text: "Substitute $$a=m$$ and $$b=15$$ into the subtraction binomial square formula: $${\\left(a-b\\right)}^2=a^2+2a b+b^2$$ $${\\left(m-15\\right)}^2=m^2-2m\\times15+{15}^2$$", variabilization: {}}, {id: "ac0c1d3spe9a-h6", type: "hint", dependencies: ["ac0c1d3spe9a-h5"], title: "Simplify", text: "$$m^2-30y+225$$", variabilization: {}}, ]; export {hints};