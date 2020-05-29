class Wallet{
    constructor(startMoney){
        let _actualMoney = startMoney
        this.getWallet=()=>_actualMoney;
        this.setWallet=(value=0)=>{
            if(typeof value === "number"){
                _actualMoney += value
                return _actualMoney;
            }
            else{
                throw new Error(`Nieprawidłowy typ zmiennej: ${typeof value}.`)
            }
        }
        this.checkPlay=(value)=>{
            if(_actualMoney >= value) return true
            return false;
        }
        this.setWallet()
    }
}