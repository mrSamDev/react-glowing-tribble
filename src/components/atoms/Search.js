import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, InputAdornment } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const SearchBox = (props) => {
  const [searchButton, setSearchButton] = React.useState(true);
  const [buttonBackground, setButtonBackground] = React.useState("white");
  const [searchValue, setSearchValue] = React.useState(true);
  const textRef = React.createRef();
  const { value } = props;
  const onClickButton = () => {
    if (searchButton && searchValue !== "" && textRef.current.value !== "") {
      setSearchButton(false);
      props.onSearch && props.onSearch(searchValue);
    } else {
      setSearchButton(true);
      textRef.current.value = "";
      if (props.removeSearch) props.removeSearch();
    }
  };

  const onChangeText = (event) => {
    setSearchValue(event.target.value);
  };

  const keyPress = (event) => {
    if (event.keyCode === 13 && searchValue) {
      onClickButton();
    }
  };

  return (
    <TextField
      inputRef={textRef}
      fullWidth
      value={value}
      placeholder={props.placeholder || "Enter text to search"}
      size="small"
      onChange={(event) => onChangeText(event)}
      onKeyDown={(e) => keyPress(e)}
      onFocus={() => setButtonBackground("lightgray")}
      onBlur={() => setButtonBackground("white")}
      InputProps={{
        style: {
          backgroundColor: "#fff",
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton style={{ padding: 5, backgroundColor: buttonBackground, marginBottom: 5, marginTop: 5 }} onClick={() => onClickButton()}>
              {searchButton ? <SearchIcon /> : <Close />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      variant="outlined"
    ></TextField>
  );
};

export default SearchBox;
