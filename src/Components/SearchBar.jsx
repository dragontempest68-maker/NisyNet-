import React from 'react';

function SearchBar({aramaMetin, setAramaMetin}) {
  return(
    <div>
      <input
       type="text"
       value={aramaMetin}
       placeholder="borclu ismi ve ya nisyesi olan"
       onChange={(e) => setAramaMetin(e.target.value)}
       />
      
    </div>
    );
}
export default SearchBar