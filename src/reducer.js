import { delete_item,clear_item,display_quantity,increase, decrease } from './action';

const reducer =(currentValue,action) =>{

    if(action.type  == delete_item ){
      const newData = currentValue.cardData.filter((item) => item.id != action.value );

      return {...currentValue, cardData:newData}

    }

    if(action.type  == clear_item){

      return {...currentValue, cardData:[]}
    
    }

    if(action.type  == display_quantity){
        
      return {...currentValue,quantity:currentValue.cardData.length}
    }

    if(action.type  == increase){

      currentValue.cardData.forEach((item) =>{
        if(item.id == action.value){
          item.amount +=1;
        }
      })
        
      return {...currentValue}
    }

    if(action.type  == decrease){

      currentValue.cardData.forEach((item) =>{
        if(item.id == action.value && item.amount>1){

          item.amount -=1;
        }
      })
        
      return {...currentValue}
    }

    throw new  Error (`No Match with ${action.type}`);

  }

export default reducer;