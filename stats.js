class Stats{
    constructor(){
        this.gameResult = []
    }

    addGame(win, bid){
        let _game = {win: win, bid: bid}
        if(typeof _game === 'object' && typeof _game.win === 'boolean' && typeof _game.bid === 'number'){        
            this.gameResult.push(_game)
        }
        else{
            throw new Error(`Nieprawidłowy format danych: ${typeof _game}`)
        }
        return this.gameResult
    }

    showResults(){
        let _count = this.gameResult.length
        let _win = this.gameResult.filter(game => game.win == true).length
        let _loss = this.gameResult.filter(game => game.win == false).length
        cons
        return [_count, _win, _loss]
    }
}

stats = new Stats()