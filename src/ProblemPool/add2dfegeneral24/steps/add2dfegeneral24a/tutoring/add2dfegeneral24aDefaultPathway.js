var hints = [{id: "add2dfegeneral24a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: [], title: "Identifying the GCF", text: "Is there a GCF? If so, make sure to factor it out.", choices: ["Yes", "No"], variabilization: {}}, {id: "add2dfegeneral24a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Binomial"], dependencies: ["add2dfegeneral24a-h1"], title: "Identifying Polynomial Type", text: "Is it a binomial, trinomial, or are there more than three terms?", choices: ["Binomial", "Trinomial", "More than 3"], variabilization: {}}, {id: "add2dfegeneral24a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$3\\left(9y^2+16\\right)$$"], dependencies: ["add2dfegeneral24a-h2"], title: "Factor Completely", text: "What is the expression when factored completely? Make sure to multiply and check.", variabilization: {}}, ]; export {hints};