import * as React from "React";

// Aweseome class
export class App extends React.Component {
  public foo: string = 'Hello world';

  public render() {
    const quz = "bar"

    let me = {
      foo: 'bar'
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.foo}</h1>
        </header>
      </div>
    );
  }
}
