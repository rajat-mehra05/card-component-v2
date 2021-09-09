import Card from "./Card";
import RomanConvertor from "./RomanConvertor";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Card type="twitter" header="Twitter" footer={true}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div className="roman-box">
          <RomanConvertor />
        </div>
      </Card>
    </div>
  );
}
