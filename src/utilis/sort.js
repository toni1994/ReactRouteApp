const getSort = (folders,sortMode,searchValue) =>
{
    var viewFolders = [];
    for(var i=0;i<folders.length;i++){
        if(folders[i].name.toUpperCase().includes(searchValue.toUpperCase())) viewFolders.push(folders[i]);
    }
    
    if(sortMode === 'ASC'){
        viewFolders.sort(sortAsc);
        return viewFolders
    }
    else{
        viewFolders.sort(sortDesc);
        return viewFolders
    }
}

const sortAsc = (valA, valB) => {
    if (valA.name > valB.name) return 1;
    if (valA.name < valB.name) return -1;
    return 0;
  };
  
  const sortDesc = (valA, valB) => {
    if (valA.name > valB.name) return -1;
    if (valA.name < valB.name) return 1;
    return 0;
};

export default getSort;