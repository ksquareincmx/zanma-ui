```jsx
import { MainHeader, MainHeaderLinks, ILink } from "./MainHeader";
import { Caption } from "./Caption";
import { Touchable } from "./Touchable";

const getLinks = () => [
  {
    id: 1,
    text: "Home",
  },
  {
    id: 2,
    text: "Courses",
  },
  {
    id: 3,
    text: "Learning Plans",
  },
  {
    id: 4,
    text: "Programs",
  },
  {
    id: 5,
    text: "Users",
  },
  {
    id: 6,
    text: "Groups",
  },
];

const handleClickLink = link => () => alert("Clicked: " + link.text);

<MainHeader
  logo={
    <div
      style={{
        backgroundColor: "#A3ABB0",
        height: "32px",
        width: "120px",
      }}
    />
  }
  links={getLinks()}
  onClickLink={handleClickLink}
/>;
```
