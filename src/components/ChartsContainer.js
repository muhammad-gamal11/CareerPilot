import AreaChart from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useSelector } from "react-redux";

const ChartsContainer = () => {
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      {/* <button type="button">Area Chart</button> */}
      <AreaChart data={data} />
    </Wrapper>
  );
};
export default ChartsContainer;
