import * as React from "React";

function generateSome<T>(howMany: number): T {
  const name = 'wes';
  const size = 10;

  return { size, name };
};

@Decorator()
export class App extends React.Component {
  public foo: string = "Hello world";
  public bar: number = 142;

  // Some function
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.foo}</h1>
          {generateSome<Object>(4).name}
        </header>
      </div>
    );
  }
}
