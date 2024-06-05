import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveItem(listItem, id){
    listItem.id = id ? id : new Date().getTime();
    const savedItems = await getItems ()

    if(respone) savedItems = JSON.parse(response);
    savedItems.push(listItem);
    
    return AsyncStorage.setItem('items', JSON.stringify(savedItems))
}

function getItems(){
    return AsyncStorage.getItem('items')
    .then(response => {
        if(response)
            return Promise.resolve(JSON.parse(response));
        else
            return Promise.resolve([])
    })
}

async function getItem(id){
    const savedItems = await getItem ();
    return saveItem.find(item=> item.id === id);
}



module.exports = { 
    saveItem, getItems }
