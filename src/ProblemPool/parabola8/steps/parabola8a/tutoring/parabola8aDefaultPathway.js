var hints = [{id: "parabola8a-h1", type: "hint", dependencies: [], title: "Know equation for directrix", text: "The equation for a directrix in standard form is $$x=h-p$$.", variabilization: {}}, {id: "parabola8a-h2", type: "hint", dependencies: ["parabola8a-h1"], title: "Find h and p", text: "h in this case is -3, while p is -4. This can be found in the original equation, which is in the form: $${\\left(y-k\\right)}^2=4p(x-h)$$.", variabilization: {}}, {id: "parabola8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=1$$"], dependencies: ["parabola8a-h2"], title: "Plug in", text: "Given h and p, what is the directrix?", subHints: [{id: "parabola8a-h3-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$x=1$$.", variabilization: {}}], variabilization: {}}, {id: "parabola8a-h4", type: "hint", dependencies: ["parabola8a-h3"], title: "Answer", text: "Therefore, the directrix is $$x=1$$.", variabilization: {}}, ]; export {hints};