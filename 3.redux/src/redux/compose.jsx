function compose(...funs) {
    return function (args) {
        for(let i = funs.length - 1; i >= 0; i--){
            args = funs[i](args)
        }
        return args
    }
}


function compose1(...funs){
    return function (...args) {
        return funs.reduceRight((a,b) => b(a(...args)))
    }
}

export default compose