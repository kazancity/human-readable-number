module.exports=toReadable=(nmbr)=>{let
    oneDig=['zero','one','two','three','four','five','six','seven','eight','nine','ten'],
    twoDig=['twenty','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
    thrDig=['hundred','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
        if(nmbr>=0&&nmbr<=10)return oneDig[nmbr]
        if(nmbr>10&&nmbr<21)return twoDig[nmbr.toString()[1]]
        if(nmbr>20&&nmbr<100){
        if(nmbr.toString()[1]==0)return thrDig[nmbr.toString()[0]]
        else{return thrDig[nmbr.toString()[0]]+' '+oneDig[nmbr.toString()[1]]}}
        if(nmbr>99&&nmbr<1000){
            if(nmbr.toString()[1]==0&&nmbr.toString()[2]==0)return oneDig[nmbr.toString()[0]]+' '+thrDig[0]
            if(nmbr.toString()[1]==0)return oneDig[nmbr.toString()[0]]+' '+thrDig[0]+' '+oneDig[nmbr.toString()[2]]
            if(nmbr.toString()[1]==1&&nmbr.toString()[2]==0)return oneDig[nmbr.toString()[0]]+' '+thrDig[0]+' '+thrDig[1]
            if(nmbr.toString()[1]==1)return oneDig[nmbr.toString()[0]]+' '+thrDig[0]+' '+twoDig[nmbr.toString()[2]]
            if(nmbr.toString()[2]==0)return oneDig[nmbr.toString()[0]]+' '+thrDig[0]+' '+thrDig[nmbr.toString()[1]]
            else return oneDig[nmbr.toString()[0]]+' '+thrDig[0]+' '+thrDig[nmbr.toString()[1]]+' '+oneDig[nmbr.toString()[2]]}}