## Stand alone

```jsx
import { Header } from "./Header";

<Header
  title="Add Learning Plan"
  onClickBack={() => alert("You Clicked The Header")}
/>;
```

## With Tabs

Headers can accept `children`, in this case we can pass a list of `Tabs`

```jsx
import { Header } from "./Header";
import { TabLabel, TabItem, TabContainer } from "./Tabs";
import { ProgressBar } from "./Progress";

<Header
  title="Add Learning Plan"
  onClickBack={() => alert("You Clicked The Header")}
>
  <TabContainer>
    <div>
      <TabItem>
        <TabLabel>INFORMATION</TabLabel>
      </TabItem>
      <TabItem>
        <TabLabel isSelected>CONTENT</TabLabel>
      </TabItem>
      <TabItem>
        <TabLabel>CONFIGURATION</TabLabel>
      </TabItem>
    </div>
    <div>
      <ProgressBar progress="50" />
    </div>
  </TabContainer>
</Header>;
```
