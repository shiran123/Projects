//Method - 01 --> Use inbuild functions

const betaCalc = {

    currentValue : 1000,

    setValue(newValue){
        this.currentValue = newValue;
        console.log(this.currentValue);
    },

    plus(value){
        this.setValue(this.currentValue + value);
    },

    minus(value){
        this.setValue(this.currentValue - value);
    }


}


//Method - 02 --> Add custom functions

const xCalc = {

    currentValue : 0,

    getValue(){
        return this.currentValue;
    },

    setValue(newValue){
        this.currentValue = newValue;
        console.log(this.currentValue);
    },
    
    core : {
        'plus' : (cv,value) => cv + value,
        'minus': (cv,value) => cv - value
    },

    plugins : {},

    press(btnname,newValue) {
        const func = this.core[btnname] || this.plugins[btnname];
        this.setValue(func(this.currentValue,newValue));
    },

    register(plugin){
        const { name, exec} = plugin;
        this.plugins[name] = exec;
    }

}