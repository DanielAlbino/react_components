const App = () => {
  const [inputText, setInputText] = React.useState("");
  const Onchange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <Button text="Submit" click={(_) => console.log("clicked!")} />
      <br />
      <Input placeholder="ex: your name" handleChange={Onchange} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
