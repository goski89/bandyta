class Draw{
    constructor(){
        this.options = ['red', 'green', 'blue']
        let _result = this.drawResult()
        this.getResult = () => _result
    }

    drawResult(){
        let colors = []
        for(let x=0; x<3; ++x){
            colors.push(this.options[Math.floor(Math.random()*this.options.length)])
        }
        return colors
    }
}