class Game{
    constructor(startMoney){
        this.stats = new Stats()
        this.wallet = new Wallet(startMoney)

        document.getElementById('bid_btn').addEventListener('click', this.startGame.bind(this))
        this.walletSpan = document.querySelector('.wallet span')
        this.resultStatSpan = document.querySelector('.stat span.result')
        this.countStatSpan = document.querySelector('.stat span.count')
        this.winStatSpan = document.querySelector('.stat span.win')
        this.lossStatSpan = document.querySelector('.stat span.loss')
        this.bidInput = document.getElementById('bid')
        this.gameDiv = document.querySelectorAll('.game div')

        this.render()
    }
    render(money = this.wallet.getWallet(), stat = [0,0,0], result = true, colors = ['grey', 'grey', 'grey'], bid = 0, wonMoney = 0){
        this.walletSpan.textContent = money

        let resultText = ""
        if(result) resultText = `Wygrałeś ${wonMoney}$`
        else if(!result && result !== "") resultText = `Przegrałeś ${bid}$`

        this.resultStatSpan.textContent = resultText
        this.countStatSpan.textContent = stat[0]
        this.winStatSpan.textContent = stat[1]
        this.lossStatSpan.textContent = stat[2]

        this.bidInput.value = ""

        this.gameDiv.forEach((item, index) => {
            item.style.backgroundColor = colors[index]
        })

    }
    startGame(){
        if(this.bidInput.value < 1) return alert("Postaw piniądze!")
        const bid = Math.floor(this.bidInput.value)
        if(!this.wallet.checkPlay(bid)) return alert('Masz za mało piniędzy!')

        this.wallet.setWallet(-bid)

        this.draw = new Draw()
        const drawResults = this.draw.getResult()
        const gameResult = Result.checkWinner(drawResults)
        const wonMoney = Result.showWinMoney(gameResult, bid)

        this.wallet.setWallet(wonMoney)
        
        const stat=this.stats.addGame(gameResult, wonMoney)
        
        this.render(this.wallet.getWallet(), this.stats.showResults(), gameResult, drawResults, bid, wonMoney)
    }
}