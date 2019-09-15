export function success(obj){
    return {
        code:200,
        msg:'success',
        data:obj
    }
}
export function failed(){
    return {
        code:500,
        msg:'failed',
        data:null
    }
}