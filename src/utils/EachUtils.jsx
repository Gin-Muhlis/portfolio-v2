import { Children } from "react";

const EachUtils = ({dataList, render}) => {
  return Children.toArray(dataList.map((item, index) => render(item, index)))
}

export default EachUtils