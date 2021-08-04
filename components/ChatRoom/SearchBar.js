import React from "react";

import { Input } from "native-base";

const SearchBar = ({ setQuery }) => {
  return (
    <Input
      placeholder="Search for Room"
      onChangeText={(event) => setQuery(event)}
    />
  );
};

export default SearchBar;
