import { Button } from "darshan-ui-lib"

function App() {
  return (
    <div className="p-10 flex gap-5">

      <Button>
        Primary
      </Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="danger">
        Danger
      </Button>

      <Button size="lg">
        Large Button
      </Button>

    </div>
  )
}

export default App