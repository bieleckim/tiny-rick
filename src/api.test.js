const api = require("./api")
// @ponicode
describe("api.fetchEpisodes", () => {
    test("0", () => {
        let callFunction = () => {
            api.fetchEpisodes(256, "Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            api.fetchEpisodes(16, "Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            api.fetchEpisodes(0, "Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            api.fetchEpisodes(64, "Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            api.fetchEpisodes(0, "Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            api.fetchEpisodes(-Infinity, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("api.fetchEpisode", () => {
    test("0", () => {
        let callFunction = () => {
            api.fetchEpisode(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            api.fetchEpisode(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            api.fetchEpisode(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            api.fetchEpisode(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            api.fetchEpisode("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            api.fetchEpisode(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("api.fetchCharacter", () => {
    test("0", () => {
        let callFunction = () => {
            api.fetchCharacter("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            api.fetchCharacter(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            api.fetchCharacter("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            api.fetchCharacter(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            api.fetchCharacter(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            api.fetchCharacter(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("api.fetchComments", () => {
    test("0", () => {
        let callFunction = () => {
            api.fetchComments("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            api.fetchComments(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            api.fetchComments(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            api.fetchComments(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            api.fetchComments(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            api.fetchComments(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("api.postComment", () => {
    test("0", () => {
        let callFunction = () => {
            api.postComment("Credit Card Account", "Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            api.postComment("Home Loan Account", "Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            api.postComment("Credit Card Account", "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            api.postComment("Checking Account", "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            api.postComment("Checking Account", "This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            api.postComment(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("api.fetchQuestions", () => {
    test("0", () => {
        let callFunction = () => {
            api.fetchQuestions()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("api.postQuizAnswers", () => {
    test("0", () => {
        let callFunction = () => {
            api.postQuizAnswers("4th generation")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            api.postQuizAnswers("dedicated")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            api.postQuizAnswers("logistical")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            api.postQuizAnswers("methodical")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            api.postQuizAnswers("value-added")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            api.postQuizAnswers(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
