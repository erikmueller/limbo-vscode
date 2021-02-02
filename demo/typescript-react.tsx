import * as React from "react"

export class App extends React.Component {
  public foo: string = "Hello world"

  onClick = (event: React.MouseEvent): void => {
    console.log(event.target)
  }

  // Some function
  public render() {
    const bar = 142

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{bar}</h1>
          <button onClick={this.onClick} />
        </header>
      </div>
    )
  }
}
